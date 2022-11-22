import React from "react";
import {
  Text,
  View,
  Box,
  Center,
  ScrollView,
  VStack,
  FormControl,
  Input,
  HStack,
  Image,
  Spacer,
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

import Colors from "../color";
import Buttone from "../Components/Buttone";

const PaymentMethods = [
  {
    image: require("../../assets/paypal.png"),
    alt: "paypal",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/gcash.png"),
    alt: "gcash",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/gpay.png"),
    alt: "googlePay",
    icon: "fontAwesome",
  },
];

function PaymentScreen() {
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          PAYMENT METHOD
        </Text>
      </Center>
      {/* SELECTION */}
      <Box h="full" bg={Colors.subGreen} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {PaymentMethods.map((i, index) => (
              <HStack
                alignItems="center"
                bg={Colors.white}
                px={3}
                py={1}
                rounded={10}
                justifyContent="space-between"
                key={index}
              >
                <Box>
                  <Image
                    source={i.image}
                    alt="paypal"
                    resizeMode="contain"
                    w={60}
                    h={50}
                  />
                </Box>
                {i.icon === "Ionicons" ? (
                  <Ionicons
                    name="checkmark-circle"
                    size={30}
                    color={Colors.main}
                  />
                ) : (
                  <FontAwesome
                    name="circle-thin"
                    size={30}
                    color={Colors.main}
                  />
                )}
              </HStack>
            ))}

            <Buttone bg={Colors.main} color={Colors.white}>
              CONTINUE
            </Buttone>
            <Text italic textAlign="center">
              Payment method is{" "}
              <Text italic bold>
                Paypal
              </Text>{" "}
              by default
            </Text>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default PaymentScreen;
