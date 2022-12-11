import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { useContext } from "react";
import { View, Text } from "react-native";
import { FirebaseContext } from "../../../Services/Firebase/firebase.context";
import LoginScreen from "../../Screens/LoginScreen";
import NotVerifyScreen from "../../Screens/NotVerifyScreen";

import OrderScreen from "../../Screens/OrderScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import AccountNav from "./AccountNav";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  const { isAuthenticated } = useContext(FirebaseContext);
  return (
    <Stack.Navigator
      initialRouteName={isAuthenticated ? "Profile" : "NotVerified"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="NotVerified" component={NotVerifyScreen} />
      <Stack.Screen
        name="Profile"
        component={isAuthenticated ? ProfileScreen : NotVerifyScreen}
      />

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ProfileOrderScreen" component={OrderScreen} />
      <Stack.Screen name="AccountNav" component={AccountNav} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
