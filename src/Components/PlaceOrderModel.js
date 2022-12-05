import { useNavigation } from "@react-navigation/native";
import moment from "moment/moment";
import { Center, HStack, Modal, Text, VStack, Button } from "native-base";
import React, { useState } from "react";
import { useContext } from "react";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { OrderContext } from "../../Services/Order/order.context";
import color from "../color";
import Buttone from "../Components/Buttone";

const PlaceOrderModel = () => {
  const navigation = useNavigation();

  const [showModel, setShowModel] = useState(false);

  const { cartItems, cartTotal, setCartItems } = useContext(FirebaseContext);

  const { orders, setOrders, deliveryAddress, setDeliveryAddress } =
    useContext(OrderContext);

  const shippingFee = 30000 * cartItems.length;

  const OrderInfos = [
    {
      title: "Products",
      price: cartTotal,
      color: "black",
    },
    {
      title: "Shipping",
      price: shippingFee,
      color: "black",
    },

    {
      title: "Total Amount",
      price: cartTotal + shippingFee,
      color: "main",
    },
  ];

  const showTotalHandler = () => {
    setShowModel(!false);
  };

  const placeOrder = () => {
    const order = {
      items: cartItems,
      paid: true,
      paidOn: moment().format("LL"),
      total: cartTotal,
      deliveryAddress,
    };
    setOrders(() => [...orders, order]);
    setCartItems([]);
    navigation.navigate("Order", order);
    setShowModel(false);
  };

  return (
    <Center>
      <Buttone
        onPress={showTotalHandler}
        bg={color.black}
        color={color.white}
        mt={5}
      >
        SHOW TOTAL
      </Buttone>
      <Modal isOpen={showModel} onClose={placeOrder} size="lg">
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
            <Button
              flex={1}
              bg={color.main}
              h={45}
              _text={{ color: color.white }}
              _pressed={{ bg: color.main }}
              onPress={placeOrder}
            >
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PlaceOrderModel;
