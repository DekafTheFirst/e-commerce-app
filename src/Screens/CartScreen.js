import React, { useContext } from "react";
import {
  Box,
  Button,
  Center,
  HStack,
  ScrollView,
  Text,
  View,
} from "native-base";
import Colors from "../color";
import CartEmpty from "../Components/CartEmpty";
import CartItems from "../Components/CartItems";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import LoginScreen from "./LoginScreen";
import { useEffect } from "react";
function CartScreen() {
  const { isAuthenticated, cartItems, cartTotal, numOfCartItems } =
    useContext(FirebaseContext);
  const navigation = useNavigation();
  function shippingHandler() {
    navigation.navigate("Shipping");
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <>
          <Center w="full" py={5} bg={Colors.white}>
            <Text color={Colors.black} fontSize={20} bold>
              Cart
            </Text>
          </Center>
          <ScrollView flex={1} safeAreaTop px={5} bg={Colors.white}>
            {/* <CartEmpty /> */}
            <CartItems />
            <Center mt={5}>
              <HStack
                rounded={50}
                justifyContent="space-between"
                bg={Colors.white}
                shadow={2}
                w="100%"
                pl={5}
                h={45}
                alignItems="center"
              >
                <Text>Total</Text>
                <Text ml="auto" mr={5}>
                  {numOfCartItems}
                </Text>
                <Button
                  px={30}
                  h={45}
                  rounded={50}
                  bg={Colors.main}
                  _text={{
                    color: Colors.white,
                    fontWeight: "semibold",
                  }}
                  _pressed={{
                    bg: Colors.main,
                  }}
                  flexDirection="row"
                >
                  {`$${cartTotal}`}
                </Button>
              </HStack>
            </Center>
            <Center mb={50}>
              {cartItems.length ? (
                <Buttone
                  bg={Colors.black}
                  color={Colors.white}
                  mt={10}
                  onPress={shippingHandler}
                >
                  CHECKOUT
                </Buttone>
              ) : (
                <Buttone
                  bg={Colors.black}
                  color={Colors.white}
                  mt={10}
                  onPress={() => {
                    navigation.navigate("Main");
                  }}
                >
                  CONTINUE SHOPPING
                </Buttone>
              )}
            </Center>
          </ScrollView>
        </>
      ) : (
        <CartEmpty />
      )}
    </>
  );
}

export default CartScreen;
