import React, { useContext } from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../Screens/LoginScreen";
import RegisterScreen from "../../Screens/RegisterScreen";
import { AuthenticationContext } from "../../../Services/Authentication/authentiation.context";

const Stack = createNativeStackNavigator();

export default function AccountNav() {
  const { isAuthenticated, isLoggedOut } = useContext(AuthenticationContext);

  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </>
  );
}
