import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function MealButton({title}) {
  return (
    <Pressable style={{
      backgroundColor: 'white',
      margin: 3,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 7
    }}>
      <Text>{title}</Text>
    </Pressable>
  )
}