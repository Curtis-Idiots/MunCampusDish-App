
import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { COLORS } from '../assets/constants'
import MealButton from './MealButton.js'

export default function HomeHeader() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-between',
        height: 180,
        backgroundColor: COLORS.primary,
        marginBottom: 20,
        padding: 10
      }}
    >
      <View>
        <Text style={{ color: COLORS.accent, fontWeight: 'bold', fontSize: 24 }}>MUN Dining Hall</Text>
        <Text style={{ color: COLORS.accent, fontWeight: 'bold', fontSize: 24 }}>Daily Menu</Text>
      </View>
      <TextInput style={{ backgroundColor: '#FFFFFF', padding: 5, borderRadius: 5, marginTop: 10 }} placeholder='Search'></TextInput>
      <View style={{flexDirection: 'row'}}>
        <MealButton title="Breakfast" />
        <MealButton title="Lunch" />
        <MealButton title="Dinner" />
      </View>
    </View>
  )
}