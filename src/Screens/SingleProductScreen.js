import React, { useContext, useState } from "react";
import {
  HStack,
  Heading,
  Text,
  View,
  Box,
  ScrollView,
  Image,
  Spacer,
} from "native-base";
import NumericInput from "react-native-numeric-input";

import Colors from "../color";
import Rating from "../Components/Rating";
import Buttone from "../Components/Buttone";
import Review from "../Components/Review";
import { useNavigation } from "@react-navigation/native";
import { AuthenticationContext } from "../../Services/Firebase/authentication.context";

function SingleProductScreen({ route }) {
  const [value, setValue] = useState(0);
  const { cartItems, setCartItems } = useContext(AuthenticationContext);
  const navigation = useNavigation();
  const product = route.params;

  function addCartHandler() {
    setCartItems((arr) => [...arr, product]);
  }
  console.log(cartItems);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: product.image,
          }}
          alt="Product Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          {product.name}
        </Heading>
        <Rating value={product.rating} text={`${product.numReviews} reviews`} />
        <HStack space={2} alignItems="center" my={5}>
          {product.countInStock > 0 ? (
            <NumericInput
              value={value}
              totalWidth={140}
              totalHeight={30}
              iconSize={25}
              step={1}
              maxValue={product.countInStock}
              minValue={0}
              borderColor={Colors.deepGray}
              rounded
              onChange={() => {}}
              textColor={Colors.black}
              iconStyle={{ color: Colors.white }}
              rightButtonBackgroundColor={Colors.main}
              leftButtonBackgroundColor={Colors.main}
            />
          ) : (
            <Heading bold color={Colors.red} fontSize={12}>
              Out of Stock
            </Heading>
          )}
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            {product.price}
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          {product.description}
        </Text>
        <Buttone
          bg={Colors.main}
          color={Colors.white}
          mt={10}
          onPress={addCartHandler}
        >
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
