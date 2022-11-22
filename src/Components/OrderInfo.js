import { Center, Heading, Text } from "native-base";
import React from "react";
import color from "../color";

const OrderInfo = ({ icon, title, subTitle, text, success, danger }) => {
  return (
    <Center
      bg={color.white}
      w={200}
      py={2}
      rounded={10}
      shadow={4}
      mb={2}
      ml={5}
      mr={1}
      px={4}
    >
      <Center bg={color.main} w={60} h={60} rounded="full">
        {icon}
      </Center>
      <Heading bold fontSize={12} isTruncated mt={3} mb={2} color={color.black}>
        {title}
      </Heading>
      <Text fontSize={13} color={color.black}>
        {subTitle}
      </Text>
      <Text fontSize={13} textAlign="center" italic color={color.black}>
        {text}
      </Text>
      {/* STATUS */}
      {success && (
        <Center py={2} mt={2} rounded={5} w="full" bg={color.blue}>
          <Text fontSize={12} color={color.black}>
            Paid on Nov 22 2022
          </Text>
        </Center>
      )}
      {danger && (
        <Center py={2} mt={2} rounded={5} w="full" bg={color.red}>
          <Text fontSize={12} color={color.black}>
            Not Deliver
          </Text>
        </Center>
      )}
    </Center>
  );
};

export default OrderInfo;
