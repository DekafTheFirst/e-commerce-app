import {
  View,
  Text,
  Box,
  Pressable,
  HStack,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import React, { useContext, useState } from "react";
import Colors from "../color";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

export default function CartItems() {
  const { cartItems, setCartItems, products } = useContext(FirebaseContext);
  const navigation = useNavigation();

  function onAddQuantity(thisItem) {
    setCartItems(
      cartItems.map((x) =>
        x._id === thisItem._id ? { ...thisItem, qty: thisItem.qty + 1 } : x
      )
    );
  }

  function onReduceQuantity(thisItem) {
    if (thisItem.qty > 1) {
      setCartItems(
        cartItems.map((x) =>
          x._id === thisItem._id ? { ...thisItem, qty: thisItem.qty - 1 } : x
        )
      );
    } else {
      removeItemFromCart(thisItem);
    }
  }

  function removeItemFromCart(thisItem) {
    setCartItems(cartItems.filter((item) => item._id !== thisItem._id));
  }

  return (
    <Box mr={6}>
      {cartItems.map((item) => (
        <TouchableOpacity
          key={item._id}
          onPress={() => navigation.navigate("Single", item)}
          style={{
            width: "100%",
            height: 100,
            marginVertical: 6,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "35%",
              height: 100,
              padding: 7,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: Colors.backgroundLight,
              borderRadius: 10,
              marginRight: 22,
            }}
          >
            <Image
              source={{ uri: item.image }}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "contain",
              }}
              alt={item.name}
            />
          </View>
          <View
            style={{
              flex: 1,
              height: "100%",
              justifyContent: "space-around",
            }}
          >
            <View style={{}}>
              <Text
                style={{
                  fontSize: 14,
                  maxWidth: "100%",
                  color: Colors.black,
                  fontWeight: "600",
                  letterSpacing: 1,
                }}
              >
                {item.name}
              </Text>
              <View
                style={{
                  marginTop: 4,
                  flexDirection: "row",
                  alignItems: "center",
                  opacity: 0.6,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "400",
                    maxWidth: "85%",
                    marginRight: 4,
                  }}
                >
                  ${item.price}
                </Text>
                <Text>(~${item.price + item.price / 20})</Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Pressable
                  style={{
                    borderRadius: 100,
                    marginRight: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: Colors.backgroundMedium,
                    opacity: 0.5,
                  }}
                  onPress={() => onReduceQuantity(item)}
                >
                  <MaterialCommunityIcons
                    name="minus"
                    style={{
                      fontSize: 16,
                      color: Colors.backgroundDark,
                    }}
                  />
                </Pressable>
                <Text>{item.qty}</Text>
                <Pressable
                  style={{
                    borderRadius: 100,
                    marginLeft: 20,
                    padding: 4,
                    borderWidth: 1,
                    borderColor: Colors.backgroundMedium,
                    opacity: 0.5,
                  }}
                  onPress={() => onAddQuantity(item)}
                >
                  <MaterialCommunityIcons
                    name="plus"
                    style={{
                      fontSize: 16,
                      color: Colors.backgroundDark,
                    }}
                  />
                </Pressable>
              </View>
              <TouchableOpacity onPress={() => removeItemFromCart(item)}>
                <MaterialCommunityIcons
                  name="delete-outline"
                  style={{
                    fontSize: 16,
                    color: Colors.backgroundDark,
                    backgroundColor: Colors.backgroundLight,
                    padding: 8,
                    borderRadius: 100,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </Box>
  );
}
