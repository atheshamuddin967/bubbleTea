import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Detailstyle } from "../styles/Details";
import { Images } from "../assets/images/Index";
import Buttons from "../components/Button";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../assets/Hooks/cartContext";

function Details() {
  const navigation: any = useNavigation();
  const route: any = useRoute();
  const item = route?.params?.product;
  function navigateBackToShop() {
    navigation.goBack();
  }

  const { addItemToCart }: any = useCart();
  function handleAddToCart() {
    addItemToCart(item);
    navigation.navigate("cart");
  }
  return (
    <View style={Detailstyle.container}>
      <StatusBar backgroundColor="#ffff" />
      <View style={{ flex: 1 }}>
        <View style={Detailstyle.backlayout}>
          <TouchableOpacity
            style={Detailstyle.backbtn}
            onPress={() => {
              navigateBackToShop();
            }}
          >
            <Image source={Images.back} style={Detailstyle.btnimg} />
          </TouchableOpacity>
          <Text style={Detailstyle.detailtext}>Details</Text>
        </View>
        <View style={Detailstyle.imagebg}>
          <Image source={item.productimg} style={Detailstyle.img} />
        </View>
        <View style={Detailstyle.detailslayout}>
          <Text style={Detailstyle.itemName}>{item.productname}</Text>
          <Text style={Detailstyle.itemprice}>$ {item.price}</Text>
        </View>

        <View style={{ paddingHorizontal: 24, marginVertical: 5 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#000000",
              fontFamily: "popins-semibold",
            }}
          >
            Details
          </Text>
          <Text
            style={{
              fontFamily: "popins-regular",
              fontSize: 14,
              color: "gray",
              marginVertical: 5,
            }}
          >
            {item.details}
          </Text>
        </View>
      </View>
      <View style={{ paddingHorizontal: 24, marginBottom: 20 }}>
        <Buttons title={"Add to cart"} ButtonPress={handleAddToCart} />
      </View>
    </View>
  );
}

export default Details;
