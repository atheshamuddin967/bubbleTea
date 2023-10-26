import React, { useRef, useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Images } from "../assets/images/Index";
import { checkoutstyle } from "../styles/checkout";
import QRCode from "react-native-qrcode-svg";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import * as Clipboard from "expo-clipboard";
import Buttons from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from "expo-file-system";
import * as Permissions from "expo-permissions";
import * as MediaLibrary from "expo-media-library";
import * as Sharing from "expo-sharing";
import ViewShot from "react-native-view-shot";
import { captureRef } from "react-native-view-shot";
function CheckoutScreeen() {
  const uniqueID = generateUniqueID();

  function generateUniqueID() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const uniqueID = "#" + (timestamp % 1000000).toString().padStart(7, "0"); // Ensure 6 digits

    return uniqueID;
  }
  const handleCopyOrderNumber = async () => {
    try {
      await Clipboard.setString(uniqueID);
      7;
      alert("Order number copied to clipboard");
    } catch (error) {
      console.error("Error copying order number:", error);
    }
  };

  const navigation: any = useNavigation();
  function navigateBackToCart() {
    navigation.goBack();
  }

  const qrCodeRef: any = useRef();
  // const qrCodeRef = useRef();

  const requestMediaLibraryPermissions = async () => {
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        // You have permission to access the media library
        // You can proceed with saving the file.
        downloadSVG();
      } else {
        // Handle the case where the user denied permission.
        console.error("Permission to access the media library was denied");
        // You can show a message to the user or take other appropriate actions.
      }
    } catch (error) {
      console.error("Error requesting media library permissions:", error);
    }
  };
  const downloadSVG = async () => {
    try {
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
      });

      const asset = await MediaLibrary.createAssetAsync(uri);
      const albumName = "download";
      const album = await MediaLibrary.getAlbumAsync(albumName);

      if (album === null) {
        await MediaLibrary.createAlbumAsync(albumName, asset, false);
      } else {
        await MediaLibrary.addAssetsToAlbumAsync([asset], album, false);
      }

      alert("File saved to the media library successfully!");
    } catch (error) {
      console.error("Error saving file:", error);
    }
  };

  const shareQRCodeImage = async () => {
    try {
      // Ensure you have the URI of the image you want to share
      const fileUri = FileSystem.documentDirectory + "code.png";
      const uri = await captureRef(qrCodeRef, {
        format: "png",
        quality: 1,
      });
      // Check if the Expo Sharing API is available
      if (!(await Sharing.isAvailableAsync())) {
        alert("Sharing is not available on your device.");
        return;
      }

      // Share the image to other apps
      await Sharing.shareAsync(uri, { dialogTitle: "Share QR Code Image" });
    } catch (error) {
      console.error("Error sharing image:", error);
    }
  };

  return (
    <View style={checkoutstyle.container}>
      <View style={checkoutstyle.Header}>
        <TouchableOpacity
          style={checkoutstyle.backbtnbg}
          onPress={navigateBackToCart}
        >
          <Image source={Images.back} style={checkoutstyle.backbtn} />
        </TouchableOpacity>
        <Text style={checkoutstyle.checkouheading}>Chcekout</Text>
      </View>
      <View style={checkoutstyle.box}>
        <View style={checkoutstyle.qrviewbox}>
          <Text style={checkoutstyle.heading2}>
            Show this to counter & Receive your order
          </Text>
          <ViewShot ref={qrCodeRef}>
            <QRCode
              value={uniqueID}
              size={268}
              backgroundColor="white"
              color="black"
            />
          </ViewShot>
          <View style={checkoutstyle.uniqucode}>
            <Text style={checkoutstyle.unitext}>{uniqueID}</Text>
            <Text style={checkoutstyle.orderhedaing}>Order No</Text>
            <TouchableOpacity onPress={handleCopyOrderNumber}>
              <Image source={Images.copy} style={checkoutstyle.copimg} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={checkoutstyle.saveshare}>
          <TouchableOpacity
            style={checkoutstyle.imgbox}
            onPress={requestMediaLibraryPermissions}
          >
            <Image source={Images.save} style={checkoutstyle.imgsave} />
          </TouchableOpacity>
          <TouchableOpacity
            style={checkoutstyle.imgbox}
            onPress={shareQRCodeImage}
          >
            <Image source={Images.share} style={checkoutstyle.imgsave} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Buttons title="back" ButtonPress={navigateBackToCart} />
      </View>
    </View>
  );
}

export default CheckoutScreeen;
