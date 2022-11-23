import React, { useContext } from "react";
import { Center, Pressable } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "../../Screens/HomeScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import CartScreen from "../../Screens/CartScreen";
import color from "../../color";
import StackNav from "./StackNav";
import AccountNav from "./AccountNav";
import { AuthenticationContext } from "../../../Services/Authentication/authentiation.context";

const Tab = createBottomTabNavigator();

const CustomTab = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      h={70}
      w={70}
      _pressed={{ bg: color.black }}
      rounded="full"
      bg={color.main}
      top={-30}
      shadow={2}
    >
      {children}
    </Pressable>
  );
};

const BottomNav = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <Tab.Navigator
      backBehavior="Main"
      initialRouteName="Main"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: { ...styles.tab },
        headerShown: false,
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name="Main"
        component={StackNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={color.main} />
              ) : (
                <AntDesign name="home" size={24} color={color.black} />
              )}
            </Center>
          ),
        }}
      />
      {/* CART */}
      <Tab.Screen
        name="Cart"
        component={isAuthenticated ? CartScreen : AccountNav}
        options={{
          tabBarButton: (props) => <CustomTab {...props} />,
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome5
                  name="shopping-basket"
                  size={24}
                  color={color.white}
                />
              ) : (
                <MaterialCommunityIcons
                  name="shopping-outline"
                  size={24}
                  color={color.white}
                />
              )}
            </Center>
          ),
        }}
      />
      {/* PROFILE */}
      <Tab.Screen
        name="Profile"
        component={isAuthenticated ? ProfileScreen : AccountNav}
        options={{
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <FontAwesome name="user" size={24} color={color.main} />
              ) : (
                <AntDesign name="user" size={24} color={color.black} />
              )}
            </Center>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  tab: {
    elavation: 0,
    backgroundColor: color.white,
    height: 60,
  },
});
