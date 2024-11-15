import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';

interface IServices {
    title: string;
    onPress: () => void;
    style?: object;
    textColor: object;
}

export default function Services({title, onPress, style, textColor}: IServices) {
  return (
    <Pressable onPress={onPress} style={[{justifyContent: "center", alignItems: "center", padding: 10, width: "50%", borderRadius: 10}, style]}>
      <Text style={[textColor]}>{title}</Text>
    </Pressable>
  )
}