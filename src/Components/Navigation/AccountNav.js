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

const Stack = createNativeStackNavigator();

const AccountNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="NotVerifyScreen"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NotVerifyScreen" component={NotVerifyScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNav;
