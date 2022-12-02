import React, { useContext, useEffect, useState } from "react";
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
import { useNavigation } from "@react-navigation/native";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";

function ShippingScreen() {
  const navigation = useNavigation();

  const { deliveryAddress, setDeliveryAddress } = useContext(FirebaseContext);

  const [deliveryAddressObject, setdeliveryAddressObject] = useState({
    ADDRESS: "",
    CITY: "",

    POSTAL_CODE: "",
    COUNTRY: "",
  });

  function convertAddressToString() {
    setDeliveryAddress(
      `${deliveryAddressObject.ADDRESS}, ${deliveryAddressObject.CITY}, ${deliveryAddressObject.POSTAL_CODE}, ${deliveryAddressObject.COUNTRY}.`
    );
  }

  const ShippingInputs = [
    { identifier: "ADDRESS", label: "ADDRESS", type: "text" },
    { identifier: "CITY", label: "CITY", type: "text" },
    { identifier: "POSTAL_CODE", label: "POSTAL CODE", type: "text" },
    { identifier: "COUNTRY", label: "COUNTRY", type: "text" },
  ];

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setdeliveryAddressObject((curInputs) => {
      return {
        ...curInputs,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function checkoutHandler() {
    convertAddressToString();
    navigation.navigate("Checkout");
  }

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
                  onChangeText={inputChangedHandler.bind(this, i.identifier)}
                />
              </FormControl>
            ))}
            <Buttone
              bg={Colors.main}
              color={Colors.white}
              onPress={checkoutHandler}
            >
              CONTINUE
            </Buttone>
          </VStack>
        </ScrollView>
      </Box>
    </Box>
  );
}

export default ShippingScreen;
