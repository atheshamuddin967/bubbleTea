import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { cartStyle } from "../styles/Cart";
import Buttons from "../components/Button";
import CartItem from "../components/CartItem";
import { useCart } from "../assets/Hooks/cartContext";
import { useNavigation } from "@react-navigation/native";

function Cart() {
  const navigation: any = useNavigation();
  const { cart, totalitemprice } = useCart();
  function checkout() {
    navigation.navigate("Checkout");
  }

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <StatusBar backgroundColor="#ffff" />
      <View style={{ flex: 1 }}>
        <View style={cartStyle.container}>
          <Text style={cartStyle.cartHeading}>Cart Items ({cart.length})</Text>

          {cart.map((item, index) => (
            <CartItem key={index} item={item} />
          ))}
        </View>
      </View>
      {cart.length > 0 && ( // Conditionally render the button if cart is not empty
        <Buttons
          title={`Proceed to checkout $${totalitemprice}`}
          style={{ marginBottom: 10 }}
          ButtonPress={checkout}
        />
      )}
    </View>
  );
}

export default Cart;
