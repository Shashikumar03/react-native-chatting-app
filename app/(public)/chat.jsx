// App.js
import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import ChatScreen from '../../components/Chat';
// import ChatScreen from './ChatScreen';

export default function Chat() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ChatScreen/>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});