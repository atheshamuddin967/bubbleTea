import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Trash } from "lucide-react-native";
import { Images } from "../assets/images/Index";
import { useCart } from "../assets/Hooks/cartContext";
function CartItem({ item }: any) {
  const { removeItemFromCart, increment, decrement, itemprice } = useCart();

  function handleremovecart() {
    removeItemFromCart(item);
  }
  function handlequanityinc() {
    increment(item);
  }
  function handlequantitydec() {
    decrement(item);
  }
  return (
    <View style={cartItem.container}>
      <View style={cartItem.imgBackground}>
        <Image source={item.productimg} style={cartItem.img} />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={cartItem.itemName}>{item.productname}</Text>
        <View style={cartItem.quantitybtnBg}>
          <TouchableOpacity onPress={handlequantitydec} style={cartItem.btn}>
            <Text style={cartItem.btnfontsize}>-</Text>
          </TouchableOpacity>
          <Text style={cartItem.btnfontsize}>{item.quantity}</Text>
          <TouchableOpacity onPress={handlequanityinc} style={cartItem.btn}>
            <Text style={cartItem.btnfontsize}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={cartItem.lastBox}>
        <TouchableOpacity onPress={handleremovecart}>
          <Trash color={"red"} size={24} />
        </TouchableOpacity>

        <Text style={cartItem.priceText}>${item.quantity * item.price}</Text>
      </View>
    </View>
  );
}

export default CartItem;
export const cartItem = StyleSheet.create({
  container: {
    shadowColor: "rgba(0,0,0,0.6)",
    backgroundColor: "#ffff",
    shadowOpacity: 0.4,
    borderRadius: 10,
    elevation: 6,
    marginVertical: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imgBackground: {
    width: 75,
    height: 70,
    borderRadius: 12,
    backgroundColor: "#E7C0F7",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    width: 55,
    height: 55,
  },
  quantitybtnBg: {
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 24,
    justifyContent: "space-around",
    width: 74,
    alignItems: "center",
    marginTop: 10,
    height: 33,
    borderColor: "#D8D8D8",
  },
  btnfontsize: {
    fontSize: 14,
  },
  itemName: {
    fontSize: 16,
    fontFamily: "popins-medium",
    color: "#323232",
  },
  priceText: {
    fontSize: 18,
    color: "#4FB8E9",
    fontFamily: "popins-bold",
    marginTop: 10,
  },
  lastBox: {
    alignItems: "flex-end",
  },
  btn: { flex: 1, justifyContent: "center", alignItems: "center" },
});
