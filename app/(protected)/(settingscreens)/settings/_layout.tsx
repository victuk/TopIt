import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

export default function ProtectedLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="profile" options={{
        title: "Profile"
      }} />
      <Stack.Screen name="about" options={{
        title: "About"
      }} />
    </Stack>
  );
}
