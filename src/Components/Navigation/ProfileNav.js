import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { View, Text } from "react-native";

import OrderScreen from "../../Screens/OrderScreen";
import ProfileScreen from "../../Screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const ProfileNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileOrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default ProfileNav;
