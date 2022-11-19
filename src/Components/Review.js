import {
  View,
  Text,
  Box,
  Heading,
  VStack,
  FormControl,
  Select,
  CheckIcon,
  TextArea,
  Button,
} from "native-base";
import React, { useState } from "react";
import Colors from "../color";
import Buttone from "./Buttone";
import Message from "./Notifications/Message";
import Rating from "./Rating";

export default function Review() {
  const [ratings, setRatings] = useState("");
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
      </Heading>

      {/* <Message
        color={Colors.main}
        bg={Colors.deepGray}
        bold
        children={"NO REVIEWS YET"}
      /> */}

      <Box p={3} bg={Colors.deepGray} mt={5} rounded={5}>
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
      {/* WRITE REVIEW */}
      {/* <Box mt={5}>
        <Heading fontSize={15} bold mb={4}>
          REVIEW THIS PRODUCT
        </Heading>
        <VStack space={6}>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
                color: Colors.black,
              }}
            >
              Rating
            </FormControl.Label>
            <Select
              bg={Colors.subGreen}
              borderWidth={0}
              rounded={5}
              py={4}
              placeholder="Choose Rate
            "
              _selectedItem={{
                bg: Colors.subGreen,
                endIcon: <CheckIcon size={3} />,
              }}
              selectedValue={ratings}
              onValueChange={(e) => setRatings(e)}
            >
              <Select.Item label="1 - Poor" value="1" />
              <Select.Item label="2 - Fair " value="2" />
              <Select.Item label="3 - Good" value="3" />
              <Select.Item label="4 - Very Good" value="4" />
              <Select.Item label="5 - Perfect" value="5" />
            </Select>
          </FormControl>
          <FormControl>
            <FormControl.Label
              _text={{
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              Comment
            </FormControl.Label>
            <TextArea
              h={24}
              w="full"
              placeholder="this product is good ...."
              borderWidth={0}
              bg={Colors.subGreen}
              py={4}
              _focus={{ bg: Colors.subGreen }}
            />
          </FormControl>
          <Buttone bg={Colors.main} color={Colors.white}>
            SUBMIT
          </Buttone>
        
            color={Colors.white}
            bg={Colors.black}
            children={"Please Login to write a review"}
          /> 
        </VStack>
      </Box> */}
    </Box>
  );
}
