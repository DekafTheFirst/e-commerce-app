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
import React from "react";
import products from "../data/Products";
import color from "../color";

const OrderItem = () => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={products.slice(0, 3)}
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
                  5
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
