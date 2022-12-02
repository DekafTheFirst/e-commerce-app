import { useNavigation } from "@react-navigation/native";
import {
  Center,
  HStack,
  Modal,
  Text,
  VStack,
  Button,
  Pressable,
  Image,
} from "native-base";
import React, { useContext, useState } from "react";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import color from "../color";
import Buttone from "../Components/Buttone";

const OrderModel = () => {
  const navigation = useNavigation();

  const [showModel, setShowModel] = useState(false);

  const { cartTotal, cartItems } = useContext(FirebaseContext);

  const totalShipping = 100 * cartItems.length;

  const tax = 50;
  const totalAmount = cartTotal + totalShipping + tax;

  const OrderInfos = [
    {
      title: "Products",
      price: cartTotal,
      color: "black",
    },
    {
      title: "Shipping",
      price: totalShipping,
      color: "black",
    },
    {
      title: "Tax",
      price: 23.77,
      color: "black",
    },
    {
      title: "Total Amount",
      price: totalAmount,
      color: "main",
    },
  ];

  const showTotalHandler = () => {
    setShowModel(!false);
  };

  const closeTotalHandler = () => {
    navigation.navigate("Home");
    setShowModel(false);
  };

  return (
    <Center>
      <Buttone
        onPress={showTotalHandler}
        bg={color.main}
        color={color.white}
        mt={5}
      >
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={closeTotalHandler} size="lg">
        <Modal.Content maxWidth="350">
          {/* <Modal.CloseButton /> */}
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfos.map((i, index) => (
                <HStack
                  key={index}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text
                    color={i.color === "main" ? color.main : color.black}
                    bold
                  >
                    {i.price}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Modal.Body>
          <Modal.Footer>
            <Pressable
              w="full"
              justifyContent="center"
              bg={color.paypal}
              h={45}
              onPress={closeTotalHandler}
              rounded={3}
              overflow="hidden"
            >
              <Image
                source={require("../../assets/paypal.png")}
                alt="paypal"
                resizeMode="contain"
                w="full"
                h={34}
              />
            </Pressable>
            <Button
              w="full"
              mt={2}
              bg={color.black}
              h={45}
              _text={{ color: color.white }}
              _pressed={{ bg: color.black }}
              onPress={closeTotalHandler}
            >
              PAY LATER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
