import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function MealButton({title, action, code, currentMeal}) {
  return (
    <Pressable
     onPress={() => action(code)}
     style={{
      backgroundColor:currentMeal === code ? '#D3D3D3' : 'white',
      margin: 3,
      paddingHorizontal: 10,
      paddingVertical: 3,
      borderRadius: 7
    }}>
      <Text>{title}</Text>
    </Pressable>
  )
}