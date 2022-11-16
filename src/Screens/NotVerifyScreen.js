import React from "react";
import { Box, Center, Image, Text, View } from "native-base";

function NotVerifyScreen() {
  return (
    <Box flex={1} bg={Colors.main} safeAreaTop>
      <Center w="full" h={250}>
        <Image source={require("../../assets/logo.png")} h="100%" />
      </Center>
    </Box>
  );
}

export default NotVerifyScreen;
