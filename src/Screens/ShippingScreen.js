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
} from "native-base";
import Colors from "../color";
import Buttone from "../Components/Buttone";

const ShippingInputs = [
  { label: "CITY", type: "text" },
  { label: "COUNTRY", type: "text" },
  { label: "POSTAL CODE", type: "text" },
  { label: "ADDRESS", type: "text" },
];

function ShippingScreen() {
  return (
    <Box flex={1} safeArea bg={Colors.main} py={5}>
      <Center pb={15}>
        <Text color={Colors.white} fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      {/* Inputs */}
      <Box h="full" bg={Colors.white} px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input
                  borderWidth={0.2}
                  borderColor={Colors.main}
                  bg={Colors.subGreen}
                  py={4}
                  type={i.type}
                  color={Colors.main}
                  _focus={{
                    bg: Colors.subGreen,
                    borderWidth: 1,
                    borderColor: Colors.main,
                  }}
                />
              </FormControl>
            ))}
            <Buttone bg={Colors.main} color={Colors.white}>
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
