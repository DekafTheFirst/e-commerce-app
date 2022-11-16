import { View, Text, Box, Heading } from "native-base";
import React from "react";
import Colors from "../color";
import Message from "./Notifications/Message";
import Rating from "./Rating";
export default function Review() {
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
      </Heading>

      <Message
        color={Colors.deepGray}
        bg={Colors.main}
        size={10}
        bold
        children={"**THIS PRODUCT HAS NO REVIEWS YET**"}
      />

      <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
        <Heading fontSize={15} color={Colors.black}>
          User Doe
        </Heading>
        <Rating value={4} />
        <Text my={2}>Nov 16 2022</Text>
        <Message
          color={Colors.black}
          bg={Colors.white}
          size={10}
          children={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium enim vitae tincidunt tempor. Ut ullamcorper aliquam ante, et semper risus iaculis sed."
          }
        />
      </Box>
    </Box>
  );
}
