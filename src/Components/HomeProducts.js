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
import React from "react";
import products from "../data/Products";
import Colors from "../color";
import Rating from "./Rating";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts() {
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
