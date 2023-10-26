import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Shopstyle } from "../styles/ShopStyle";

function CatBtn({ item, onPress, selected, product, setProduct }: any) {
  const save = () => {
    onPress();
    setProduct(item.product);
  };
  return (
    <View>
      <TouchableOpacity
        style={[selected ? Shopstyle.catbuttonHover : Shopstyle.catbutton]}
        onPress={save}
      >
        <Text
          style={[selected ? Shopstyle.catBtnTextHover : Shopstyle.catBtnText]}
        >
          {item.catName}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CatBtn;
