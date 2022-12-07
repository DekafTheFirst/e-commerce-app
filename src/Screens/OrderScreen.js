import React from "react";
import { Box, Heading, ScrollView, Text } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

import color from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import OrderModel from "../Components/OrderModel";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { useContext } from "react";
import {
  OrderContext,
  OrderContextProvider,
} from "../../Services/Order/order.context";
import Buttone from "../Components/Buttone";

function OrderScreen({ route }) {
  const { order } = route.params;

  return (
    <Box bg={color.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="SHIPPING INFO"
            success
            subTitle="shipping: Cebu, Philippines"
            text="payment method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={color.white}
              />
            }
            order={order}
          />
          <OrderInfo
            title="DELIVER TO"
            danger
            subTitle="Address:"
            text={order.deliveryAddress}
            icon={
              <Ionicons name="location-sharp" size={30} color={color.white} />
            }
          />
        </ScrollView>
        {/* ORDER ITEM */}
      </Box>
      <Box px={6} flex={1} pb={3} mb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem orderItems={order.items} />
        {/* TOTAL */}
        <OrderModel order={order} />
      </Box>
    </Box>
  );
}

export default OrderScreen;
