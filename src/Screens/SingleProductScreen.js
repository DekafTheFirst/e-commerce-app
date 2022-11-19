import React, { useState } from "react";
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
function SingleProductScreen() {
  const [value, setValue] = useState(0);
  return (
    <Box safeArea flex={1} bg={Colors.white}>
      <ScrollView px={5} showsVerticalScrollIndicator={false}>
        <Image
          source={{
            uri: "https://www.pngplay.com/wp-content/uploads/13/Nissan-GT-R-Nismo-Transparent-Background.png",
          }}
          alt="Product Image"
          w="full"
          h={300}
          resizeMode="contain"
        />
        <Heading bold fontSize={15} mb={2} lineHeight={22}>
          Nisan GT-R 2020 Edition
        </Heading>
        <Rating value={4.5} />
        <HStack space={2} alignItems="center" my={5}>
          <NumericInput
            value={value}
            totalWidth={140}
            totalHeight={30}
            iconSize={25}
            step={1}
            maxValue={15}
            minValue={0}
            borderColor={Colors.deepGray}
            rounded
            onChange={() => {}}
            textColor={Colors.black}
            iconStyle={{ color: Colors.white }}
            rightButtonBackgroundColor={Colors.main}
            leftButtonBackgroundColor={Colors.main}
          />
          <Spacer />
          <Heading bold color={Colors.black} fontSize={19}>
            ₱400
          </Heading>
        </HStack>
        <Text lineHeight={24} fontSize={12}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et
          semper risus iaculis sed. Aenean sit amet ex urna. Pellentesque
          ultrices sodales neque, id efficitur enim ullamcorper at. Nulla ipsum
          nunc.
        </Text>
        <Buttone bg={Colors.main} color={Colors.white} mt={10}>
          ADD TO CART
        </Buttone>
        <Review />
      </ScrollView>
    </Box>
  );
}

export default SingleProductScreen;
