import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Images } from "../assets/images/Index";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "../assets/Hooks/cartContext";

function Item({ item, onPress }: any) {
  const [selected2, setSelected2] = useState<number | null>(null);
  const navigation: any = useNavigation();
  function selectedItem2() {
    onPress;
    setSelected2(item);
    navigation.navigate("Details", {
      product: item,
    });
  }

  const { addItemToCart }: any = useCart();
  function handleAddToCart() {
    addItemToCart(item);
    navigation.navigate("cart");
  }
  return (
    <TouchableOpacity style={itemstyle.container} onPress={selectedItem2}>
      <View style={itemstyle.imgbackground}>
        <Image source={item.productimg} style={itemstyle.imagestyle} />
      </View>

      <View style={itemstyle.detailbox}>
        <Text style={itemstyle.detailtext}>{item.productname}</Text>
        <View style={itemstyle.cartView}>
          <Text style={itemstyle.detailprice}>${item.price}</Text>
          <TouchableOpacity
            style={itemstyle.cartbtnbox}
            onPress={handleAddToCart}
          >
            <Image source={Images.cartbtn} style={itemstyle.cartbtn} />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Item;
const itemstyle = StyleSheet.create({
  container: {
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.6)",
    shadowOpacity: 0.4,
    elevation: 6,
    backgroundColor: "#fff",
    width: "47%",
    height: 208,
    marginVertical: 5,

    marginHorizontal: 5,
  },
  imgbackground: {
    backgroundColor: "#BDE8E3",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    padding: 10,
    overflow: "hidden",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    height: 109,
  },
  detailbox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  detailtext: {
    fontFamily: "popins-regular",
    fontWeight: "500",
    color: "#1C1E23",
    fontSize: 15,
    height: 50,
  },
  detailprice: {
    color: "#4FB8E9",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "popins-semibold",
  },
  imagestyle: {
    width: 96,
    height: 96,
  },
  cartView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cartbtn: {
    height: 20,
    width: 20,
  },
  cartbtnbox: {
    backgroundColor: "#4FB8E9",
    width: 31,
    height: 31,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});
