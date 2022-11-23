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
import { AuthenticationContext } from "../../Services/Authentication/authentiation.context";
import LoginScreen from "./LoginScreen";
import AccountNav from "../Components/Navigation/AccountNav";
function CartScreen() {
  const { isAuthenticated } = useContext(AuthenticationContext);

  const navigation = useNavigation();

  function shippingHandler() {
    navigation.navigate("Shipping");
  }

  return (
    <>
      <Box flex={1} safeAreaTop bg={Colors.subGreen}>
        <Center w="full" py={5}>
          <Text color={Colors.black} fontSize={20} bold>
            Cart
          </Text>
        </Center>
        {/* <CartEmpty /> */}
        <CartItems />
        <Center mt={5}>
          <HStack
            rounded={50}
            justifyContent="space-between"
            bg={Colors.white}
            shadow={2}
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
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
            >
              $356
            </Button>
          </HStack>
        </Center>

        <Center px={5}>
          <Buttone
            bg={Colors.black}
            color={Colors.white}
            mt={10}
            onPress={shippingHandler}
          >
            CHECKOUT
          </Buttone>
        </Center>
      </Box>
    </>
  );
}

export default CartScreen;
