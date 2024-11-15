import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { AntDesign, FontAwesome5 } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { StatusBar } from 'expo-status-bar'

export default function ProtectedLayout() {
  return (
    <>
    <StatusBar backgroundColor={Colors.blue} />
    <Tabs screenOptions={{
      headerShown: false
    }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({size, focused}) => (<AntDesign name="home" size={size} color={focused ? "#0E54A9" : "black"} />),
        }}
      />

<Tabs.Screen
        name="history"
        options={{
          tabBarLabel: "History",
          tabBarIcon: ({size, focused}) => (<FontAwesome5 name="history" size={size} color={focused ? "#0E54A9" : "black"} />)
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({size, focused}) => (<AntDesign name="setting" size={size} color={focused ? "#0E54A9" : "black"} />)
        }}
      />
    </Tabs>
    </>
  )
}