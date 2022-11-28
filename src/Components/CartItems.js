import {
  View,
  Text,
  Box,
  Pressable,
  HStack,
  Center,
  Image,
  VStack,
  Button,
} from "native-base";
import React, { useContext, useState } from "react";
import Colors from "../color";
import products from "../data/Products";
import { SwipeListView } from "react-native-swipe-list-view";
import { FontAwesome } from "@expo/vector-icons";
import { AuthenticationContext } from "../../Services/Firebase/authentication.context";
const Swiper = () => {
  const { cartItems } = useContext(AuthenticationContext);
  return (
    <SwipeListView
      rightOpenValue={-50}
      previewRowKey="0"
      previewOpenValue={-40}
      previewOpenDelay={3000}
      data={cartItems}
      renderHiddenItem={renderHiddenItem}
      renderItem={renderItem}
      showsVerticalScrollIndicator={true}
    />
  );
};

const renderItem = (data, rowMap) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack
        alignItems="center"
        bg={Colors.white}
        shadow={1}
        rounded={10}
        overflow="hidden"
      >
        <Center w="30%" bg={Colors.deepGray} px={2}>
          <Image
            source={{ uri: data.item.image }}
            alt={data.item.name}
            w="full"
            h={24}
            resizeMode="contain"
          ></Image>
        </Center>
        <VStack w="55%" px={2} space={2}>
          <Text isTruncated color={Colors.black} bold fontSize={12}>
            {data.item.name}
          </Text>
          <Text bold color={Colors.lightBlack}>
            ${data.item.price}
          </Text>
        </VStack>
        <Center>
          <Button
            bg={Colors.main}
            _pressed={{ bg: Colors.main }}
            _text={{ color: Colors.white }}
          >
            5
          </Button>
        </Center>
      </HStack>
    </Box>
  </Pressable>
);

const renderHiddenItem = () => (
  <Pressable
    w={50}
    roundedTopRight={10}
    roundedBottomRight={10}
    h="85%"
    ml="auto"
    justifyContent="center"
    bg={Colors.red}
  >
    <Center alignItems="center" space={2}>
      <FontAwesome name="trash" size={24} color={Colors.white} />
    </Center>
  </Pressable>
);

export default function CartItems() {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  );
}
