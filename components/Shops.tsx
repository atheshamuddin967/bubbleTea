import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Homestyle } from "../styles/Home";
import { Images } from "../assets/images/Index";

function Shops({ item, Selected, onPress }: any) {
  return (
    <View style={Homestyle.shopNameContainer}>
      <TouchableOpacity
        style={[Selected ? Homestyle.shopNameHover : Homestyle.shopName]}
        onPress={onPress}
      >
        <Image
          source={Selected ? Images.shopWhite : Images.shopBlue}
          style={Homestyle.shopImage}
        />

        <Text
          style={[
            Selected ? Homestyle.shopHeadingHover : Homestyle.shopHeading,
          ]}
        >
          {item.name}
        </Text>
        <Text
          style={[
            Selected ? Homestyle.shopdetailsHover : Homestyle.shopdetails,
          ]}
        >
          {item.address}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Shops;
