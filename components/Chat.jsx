import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { auth, db, signInAnonymously } from '../config/firebaseConfig'; // Ensure to import your Firebase setup

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    // Function to sign in anonymously and fetch user email
    const signInAndFetchEmail = async () => {
      try {
        await signInAnonymously(auth);
        const user = auth.currentUser;
        if (user) {
          setUserEmail(user.email || 'User'); // Set user email or fallback to 'User'
        }
        const messagesQuery = query(
          collection(db, 'chats'),
          orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
          const allMessages = snapshot.docs.map((doc) => ({
            _id: doc.id,
            text: doc.data().text,
            createdAt: doc.data().createdAt.toDate(),
            user: doc.data().user,
          }));
          setMessages(allMessages);
        });

        return () => unsubscribe();
      } catch (error) {
        console.error("Failed to sign in anonymously: ", error);
      }
    };

    signInAndFetchEmail();
  }, []);

  const onSend = useCallback((messages = []) => {
    const { _id, createdAt, text, user } = messages[0];
    addDoc(collection(db, 'chats'), { _id, createdAt, text, user });
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={onSend}
      user={{
        _id: auth.currentUser?.uid || '',
        name: userEmail, // Use the user's email as the name
      }}
    />
  );
}
