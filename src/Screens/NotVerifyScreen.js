import React from "react";
import { Box, Center, Image, Text, View, VStack } from "native-base";
import Buttone from "../Components/Buttone";
import { useNavigation } from "@react-navigation/native";

function NotVerifyScreen() {
  const navigation = useNavigation();
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/logo.png")} alt="Logo" size="lg" />
      </Center>
      <VStack space={6} px={5} alignItems="center">
        <Buttone
          bg={Colors.black}
          color={Colors.white}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Buttone>
        <Buttone
          bg={Colors.white}
          color={Colors.black}
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </Buttone>
      </VStack>
    </Box>
  );
}

export default NotVerifyScreen;
