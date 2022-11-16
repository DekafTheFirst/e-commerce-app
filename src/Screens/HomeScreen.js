import React from "react";
import { Text, View, Box } from "native-base";
import Colors from "../color";
import HomeSearch from "../Components/HomeSearch";
import HomeProducts from "../Components/HomeProducts";
function HomeScreen() {
  return (
    <Box flex={1} bg={Colors.subGreen}>
      <HomeSearch />
      <HomeProducts />
    </Box>
  );
}

export default HomeScreen;
