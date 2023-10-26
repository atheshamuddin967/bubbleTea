import React, { useState } from "react";
import { View, Text, StatusBar, Image, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Homestyle } from "../styles/Home";
import { Images } from "../assets/images/Index";
import Shops from "../components/Shops";
import { HomeData } from "../data/HomeData";
import Buttons from "../components/Button";

function Home() {
  const navigation: any = useNavigation();
  const [selected, setSelected] = useState<number | null>(HomeData[0]);
  function selectedItem(item: any, index: any) {
    setSelected(index);
  }
  // console.log(selected);
  function navigate() {
    if (selected == null) {
      alert("Please select a service");
      return;
    }
    navigation.navigate("MyTab", {
      screen: "Shop",
      params: {
        datas: HomeData[selected],
      },
    });
  }

  return (
    <View style={Homestyle.container}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ffff" />
        <View>
          <Image source={Images.logo} style={Homestyle.logo} />
          <Text style={Homestyle.userName}>Hello Jane</Text>
          <Text style={Homestyle.Headings}>
            Choose a shop to order your bubble tea
          </Text>
        </View>

        <FlatList
          data={HomeData}
          renderItem={({ item, index }) => (
            <Shops
              item={item}
              key={index}
              onPress={() => {
                selectedItem(item, index);
              }}
              Selected={selected === index}
            />
          )}
          style={{
            flex: 1,
            paddingBottom: 10,
            marginRight: 10,
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Buttons
          title="Continue"
          ButtonPress={() => {
            navigate();
          }}
        />
      </View>
    </View>
  );
}

export default Home;
