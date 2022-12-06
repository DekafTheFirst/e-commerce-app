import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";

import HomeScreen from "../../Screens/HomeScreen";
import SingleProductScreen from "../../Screens/SingleProductScreen";
import ShippingScreen from "../../Screens/ShippingScreen";
import PaymentScreen from "../../Screens/PaymentScreen";
import PlaceOrderScreen from "../../Screens/PlaceOrderScreen";
import LoginScreen from "../../Screens/LoginScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import NotVerifyScreen from "../../Screens/NotVerifyScreen";
import AccountNav from "./AccountNav";
import OrderScreen from "../../Screens/OrderScreen";
import BottomNav from "./BottomNav";
import ProfileScreen from "../../Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeNav;
