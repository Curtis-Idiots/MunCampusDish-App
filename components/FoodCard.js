import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import heart from '../assets/heart.png'

export default function FoodCard({ data }) {
  return (
    <View style={{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding: 20,
      margin: 10,
      marginBottom: 10,
      shadowColor: 'black',
      shadowOffset: {
        width: 5,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 10,

      elevation: 5,
    }}>
      <Text>{data}</Text>
      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: 'white',
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={heart}
          resizeMode="contain"
          style={{ width: 24, height: 24 }}
        />
      </Pressable>
    </View>
  )
}