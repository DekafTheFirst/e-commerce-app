import React from "react";
import { View, HStack, Text, Input, Pressable, Box } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../color";

export default function HomeSearch() {
  const navigation = useNavigation();

  const navCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <HStack
      space={3}
      w="full"
      px={6}
      bg={Colors.main}
      py={4}
      alignItems="center"
      safeAreaTop
    >
      <Input
        placeholder="Nike, Puma, Adidas ...."
        w="85%"
        h={12}
        bg={Colors.white}
        type="search"
        variant="filled"
        borderWidth={0}
        _focus={{
          bg: Colors.white,
        }}
      />
      <Pressable ml={3} onPress={navCart}>
        <FontAwesome name="shopping-basket" size={24} color={Colors.white} />
        <Box
          px={1}
          rounded="full"
          position="absolute"
          top={-13}
          left={2}
          bg={Colors.red}
          _text={{
            color: Colors.white,
            fontSize: "11px",
          }}
        >
          5
        </Box>
      </Pressable>
    </HStack>
  );
}
