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
import { useEffect } from "react";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { OrderContext } from "../../Services/Order/order.context";
import color from "../color";
import Buttone from "../Components/Buttone";

const OrderModel = ({ order }) => {
  const navigation = useNavigation();

  const [showModel, setShowModel] = useState(false);

  const { cartTotal, cartItems, setCartItems } = useContext(FirebaseContext);

  const totalShipping = 30000 * order.items.length;

  const totalAmount = order.total + totalShipping;

  const OrderInfos = [
    {
      title: "Products",
      price: order.total,
      color: "black",
    },
    {
      title: "Shipping",
      price: totalShipping,
      color: "black",
    },
    {
      title: "Total Amount",
      price: totalAmount,
      color: "main",
    },
  ];

  useEffect(() => {
    const { routes } = navigation.getState();
    const filteredRoutes = routes.filter((route) => {
      return (
        route.name !== "Checkout" &&
        route.name !== "Placeorder" &&
        route.name !== "Shipping" &&
        route.name !== "Single"
      );
    });

    navigation.reset({
      index: filteredRoutes.length - 1,
      routes: filteredRoutes,
    });
  }, []);

  const showTotalHandler = () => {
    setShowModel(!false);
  };

  const processPayment = () => {
    setShowModel(false);
  };

  const closeTotalHandler = () => {
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
        SHOW DETAILS
      </Buttone>
      <Buttone
        onPress={() => {
          navigation.navigate("Home");
        }}
        bg={color.black}
        color={color.main}
        mt={5}
      >
        CONTINUE SHOPPING
      </Buttone>
      <Modal isOpen={showModel} onClose={closeTotalHandler} size="lg">
        <Modal.Content maxWidth="350">
          {/* <Modal.CloseButton /> */}

          <Modal.Header>Order {order.id}</Modal.Header>
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
            {!order.paid && (
              <Pressable
                w="full"
                justifyContent="center"
                bg={color.paypal}
                h={45}
                onPress={processPayment}
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
            )}

            <Button
              w="full"
              mt={2}
              bg={color.black}
              h={45}
              _text={{ color: color.white }}
              _pressed={{ bg: color.black }}
              onPress={closeTotalHandler}
            >
              CLOSE
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default OrderModel;
