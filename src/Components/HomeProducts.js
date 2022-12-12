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
  FlatList,
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
    <View flex={1}>
      <Flex
        flexWrap="wrap"
        direction="row"
        justifyContent="space-between"
        px={6}
      >
        {isLoading ? (
          <Box safeAreaTop flex={1}>
            <Center height="full">
              <ActivityIndicator />
            </Center>
          </Box>
        ) : (
          <FlatList
            flex={1}
            data={products}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <Pressable
                  key={item._id}
                  onPress={() => navProduct(item)}
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
                      source={{ uri: item.image }}
                      alt={item.name}
                      w="90%"
                      h={24}
                      resizeMode="contain"
                    />
                  </Center>

                  <Box px={4} pt={1}>
                    <Heading size="sm" bold>
                      ₱{item.price}
                    </Heading>
                    <Text fontSize={11} mt={1} isTruncated>
                      {item.name}
                    </Text>
                    <Rating value={item.rating} />
                  </Box>
                </Pressable>
              );
            }}
          />
        )}
      </Flex>
    </View>
  );
}
