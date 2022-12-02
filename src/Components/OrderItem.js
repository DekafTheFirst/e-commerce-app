import {
  FlatList,
  HStack,
  Pressable,
  Center,
  Box,
  Image,
  VStack,
  Text,
  Button,
} from "native-base";
import React, { useContext } from "react";
import products from "../data/Products";
import color from "../color";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";

const OrderItem = () => {
  const { user, cartItems, deliveryAddress } = useContext(FirebaseContext);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={cartItems}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => (
        <Pressable>
          <Box mb={3}>
            <HStack
              alignItems="center"
              bg={color.white}
              shadow={1}
              rounded={10}
              overflow="hidden"
            >
              <Center w="25%" bg={color.deepGray}>
                <Image
                  source={{ uri: item.image }}
                  alt={item.name}
                  w="full"
                  h={24}
                  resizeMode="contain"
                />
              </Center>
              <VStack w="60%" px={2}>
                <Text isTruncated color={color.black} bold fontSize={12}>
                  {item.name}
                </Text>
                <Text color={color.lightBlack} bold mt={2}>
                  {item.price}
                </Text>
              </VStack>
              <Center>
                <Button
                  bg={color.main}
                  _pressed={{ bg: color.main }}
                  _text={{ color: color.white }}
                >
                  {item.qty}
                </Button>
              </Center>
            </HStack>
          </Box>
        </Pressable>
      )}
    />
  );
};

export default OrderItem;
