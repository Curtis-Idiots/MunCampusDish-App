import { View, Text, Pressable, Image } from "react-native"
import React, { useState } from "react"
import Ionicons from "@expo/vector-icons/Ionicons"
import Toast from "react-native-root-toast"

export default function FoodCard({ data }) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    const message = `${isFavorite ? "Removed" : "Added"} ${data.name} ${
      isFavorite ? "from" : "to"
    } favorites`
    Toast.show(message, {
      duration: Toast.durations.SHORT,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    })
  }

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        backgroundColor: "white",
        borderRadius: 5,
        padding: 20,
        margin: 10,
        marginBottom: 10,
        shadowColor: "black",
        shadowOffset: {
          width: 5,
          height: 2,
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,

        elevation: 5,
      }}
    >
      <Text>{data.name}</Text>
      <Pressable
        style={{
          width: 40,
          height: 40,
          backgroundColor: "#D3D3D3",
          borderRadius: 24,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => toggleFavorite()}
      >
        <Ionicons
          name={isFavorite ? "md-heart" : "md-heart-outline"}
          size={32}
          color="red"
        />
      </Pressable>
    </View>
  )
}
