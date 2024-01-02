import React from 'react'
import { Text, TextInput, View, Image, Dimensions } from 'react-native'

const Screen = Dimensions.get("screen").width;


export default function HeaderLogo({ title }) {
  // Function body goes here
  return (
    <View
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        width: Screen * 0.8,
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 25, fontWeight: "600", color: "white" }}>
        {title}
      </Text>
      <View
        style={{
          padding: 5,
          borderRadius: 20,
          borderWidth: 2,
          borderColor: "white",
        }}
      >
        {/* <Image
          source={require("../assets/images/Logo.png")}
          style={{ width: 18, height: 18 }}
        /> */}
      </View>
    </View>
  );
}
