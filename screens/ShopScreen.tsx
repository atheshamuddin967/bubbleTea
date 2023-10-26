import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import { Images } from "../assets/images/Index";
import { Homestyle } from "../styles/Home";
import { Shopstyle } from "../styles/ShopStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import CatBtn from "../components/CatBtn";
import { useRoute } from "@react-navigation/native";
import Item from "../components/Item";

function Shop() {
  const route: any = useRoute();
  const item = route?.params?.datas;

  const categeory = item.categeory;
  const [data, setData] = useState(item.categeory);

  const [selected, setSelected] = useState<number | null>(categeory[0]?.id);
  const [product, setProduct] = useState<any>(categeory[0].product);
  // console.log(product);
  function selectedItem(item: any, id: any) {
    setSelected(id);
  }

  return (
    <ScrollView style={Shopstyle.container}>
      <StatusBar backgroundColor="#ffff" />
      <View>
        <Image source={Images.logo} style={Shopstyle.logo} />
        <View style={Shopstyle.secondContainer}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={Images.shopicon}
              style={{ height: 19, width: 19, marginRight: 5 }}
            />
            <Text style={Shopstyle.ShopName}>{item.address}</Text>
          </View>
          <TouchableOpacity>
            <Text style={Shopstyle.change}>Change</Text>
          </TouchableOpacity>
        </View>
        <Text style={Shopstyle.Headings}>Find the best Tea for you</Text>
      </View>
      <View style={Shopstyle.makeContainer}>
        <View style={{ flex: 1 }}>
          <Text style={Shopstyle.Maketext}>
            Make Your Own Customizable Bubble Tea
          </Text>
          <TouchableOpacity style={Shopstyle.makeButton}>
            <Text style={Shopstyle.btnText}>Make</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Image source={Images.Make} style={{ width: 110, height: 132 }} />
        </View>
      </View>
      <Text style={Shopstyle.catheading}>Categeory</Text>
      <View style={{ alignItems: "center" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CatBtn
              item={item}
              key={item.id}
              product={product}
              setProduct={setProduct}
              onPress={() => {
                selectedItem(item, item.id);
              }}
              selected={selected === item.id}
            />
          )}
          style={{
            paddingBottom: 10,
            marginHorizontal: 10,
          }}
          numColumns={3}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>

      <FlatList
        data={product}
        renderItem={({ item }) => (
          <Item
            item={item}
            key={item.id}
            onPress={() => {
              selectedItem(item, item.id);
            }}
            selected={selected === item.id}
          />
        )}
        style={{
          paddingBottom: 10,
          // justifyContent: "space-between",
        }}
        contentContainerStyle={{ justifyContent: "space-around" }}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

export default Shop;
