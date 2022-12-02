import {
  View,
  ScrollView,
  Text,
  Flex,
  Pressable,
  Image,
  Box,
  Heading,
  Center,
} from "native-base";
import React, { useContext } from "react";

import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { ActivityIndicator } from "react-native";

export default function HomeProducts() {
  const { products, cartItems, isLoading } = useContext(FirebaseContext);
  const navigation = useNavigation();

  function navProduct(product) {
    navigation.navigate("Single", product);
  }

  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {isLoading && (
          <Center>
            <ActivityIndicator />
          </Center>
        )}
        {products.map((product) => (
          <Pressable
            key={product._id}
            onPress={() => navProduct(product)}
            w="47%"
            bg={Colors.white}
            rounded="md"
            shadow={2}
            pt={0}
            my={3}
            pb={2}
            overflow="hidden"
          >
            <Center>
              <Image
                source={{ uri: product.image }}
                alt={product.name}
                w="90%"
                h={24}
                resizeMode="contain"
              />
            </Center>

            <Box px={4} pt={1}>
              <Heading size="sm" bold>
                ₱{product.price}
              </Heading>
              <Text fontSize={11} mt={1} isTruncated>
                {product.name}
              </Text>
              <Rating value={product.rating} />
            </Box>
          </Pressable>
        ))}
      </Flex>
    </ScrollView>
  );
}
