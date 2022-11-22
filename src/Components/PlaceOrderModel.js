import { Center, HStack, Modal, Text, VStack, Button } from "native-base";
import React, { useState } from "react";
import color from "../color";
import Buttone from "../Components/Buttone";

const OrderInfos = [
  {
    title: "Products",
    price: 125.77,
    color: "black",
  },
  {
    title: "Shipping",
    price: 34.77,
    color: "black",
  },
  {
    title: "Tax",
    price: 23.77,
    color: "black",
  },
  {
    title: "Total Amount",
    price: 323.77,
    color: "main",
  },
];

const PlaceOrderModel = () => {
  const [showModel, setShowModel] = useState(false);

  const showTotalHandler = () => {
    setShowModel(!false);
  };

  const closeTotalHandler = () => {
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
            <Button
              flex={1}
              bg={color.main}
              h={45}
              _text={{ color: color.white }}
              _pressed={{ bg: color.main }}
              onPress={closeTotalHandler}
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
