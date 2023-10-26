import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

function Buttons({ title, ButtonPress }: any) {
  return (
    <View style={ButtonStyle.ButtonContainer}>
      <TouchableOpacity style={ButtonStyle.Button} onPress={ButtonPress}>
        <Text style={ButtonStyle.buttonTitle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Buttons;
const ButtonStyle = StyleSheet.create({
  ButtonContainer: {
    width: "100%",
  },
  Button: {
    width: "100%",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4FB8E9",
    borderRadius: 100,
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "popins-semibold",
  },
});
