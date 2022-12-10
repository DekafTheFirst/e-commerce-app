import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";

import HomeScreen from "../../Screens/HomeScreen";
import SingleProductScreen from "../../Screens/SingleProductScreen";
import ShippingScreen from "../../Screens/ShippingScreen";
import PaymentScreen from "../../Screens/PaymentScreen";
import PlaceOrderScreen from "../../Screens/PlaceOrderScreen";

import AccountNav from "./AccountNav";
import OrderScreen from "../../Screens/OrderScreen";

const Stack = createNativeStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Single" component={SingleProductScreen} />

      <Stack.Screen name="Shipping" component={ShippingScreen} />
      <Stack.Screen name="Checkout" component={PaymentScreen} />
      <Stack.Screen name="Placeorder" component={PlaceOrderScreen} />
      <Stack.Screen name="OrderDetails" component={OrderScreen} />

      <Stack.Screen name="AccountNav" component={AccountNav} />
    </Stack.Navigator>
  );
};

export default StackNav;
