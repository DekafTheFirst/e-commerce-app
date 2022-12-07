import React, { useContext } from "react";
import { Box, Center, Pressable } from "native-base";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  AntDesign,
  Entypo,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "../../Screens/HomeScreen";
import ProfileScreen from "../../Screens/ProfileScreen";
import CartScreen from "../../Screens/CartScreen";
import color from "../../color";
import StackNav from "./StackNav";
import { FirebaseContext } from "../../../Services/Firebase/firebase.context";
import NotVerifyScreen from "../../Screens/NotVerifyScreen";
import AccountNav from "./AccountNav";
import ProfileNav from "./ProfileNav";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/build/MaterialIcons";

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
  const { isAuthenticated, numOfCartItems } = useContext(FirebaseContext);

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
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Entypo name="home" size={24} color={color.main} />
              ) : (
                <AntDesign name="home" size={24} color={color.black} />
              )}
            </Center>
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (
              routeName == "Shipping" ||
              routeName == "Checkout" ||
              routeName == "OrderDetails" ||
              routeName == "Placeorder"
            ) {
              return { display: "none" };
            } else {
              return {
                height: 60,
              };
            }
          })(route),
        })}
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
                <>
                  <FontAwesome5
                    name="shopping-basket"
                    size={24}
                    color={color.white}
                  />
                </>
              ) : (
                <>
                  <MaterialCommunityIcons
                    name="shopping-outline"
                    size={24}
                    color={color.white}
                  />
                  <Box
                    px={1}
                    rounded="full"
                    position="absolute"
                    top={-13}
                    left={4}
                    bg={Colors.red}
                    _text={{
                      color: Colors.white,
                      fontSize: "11px",
                    }}
                  >
                    {numOfCartItems}
                  </Box>
                </>
              )}
            </Center>
          ),
        }}
      />
      {/* PROFILE */}
      <Tab.Screen
        name="ProfileNav"
        component={isAuthenticated ? ProfileScreen : ProfileNav}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => (
            <Center>
              {focused ? (
                <Ionicons name="person" size={24} color="black" />
              ) : (
                <Ionicons name="person-outline" size={24} color="black" />
              )}
            </Center>
          ),
          tabBarStyle: ((route) => {
            const routeName = getFocusedRouteNameFromRoute(route) ?? "";
            console.log(routeName);
            if (routeName !== "Profile" && routeName !== "NotVerified") {
              return { display: "none" };
            } else {
              return { height: 60 };
            }
          })(route),
        })}
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
