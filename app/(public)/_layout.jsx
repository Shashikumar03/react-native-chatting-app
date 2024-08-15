import { View, Text } from 'react-native'
import React from 'react'
import {Tabs} from "expo-router"

export default function PublicLayout() {
  return (
    <Tabs>
        <Tabs.Screen name='chat'/>
    </Tabs>
  )
}