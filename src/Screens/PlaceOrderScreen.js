import React from "react";
import { Box, Heading, ScrollView } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

import color from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";

function PlaceOrderScreen() {
  return (
    <Box bg={color.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="admin Doe"
            text="admin@example.com"
            icon={<FontAwesome name="user" size={30} color={color.white} />}
          />
          <OrderInfo
            title="SHIPPING INFO"
            subTitle="shipping: Cebu, Philippines"
            text="payment method: Paypal"
            icon={
              <FontAwesome5
                name="shipping-fast"
                size={30}
                color={color.white}
              />
            }
          />
          <OrderInfo
            title="DELIVER TO"
            subTitle="Address:"
            text="054 Santa monica st. Cebu city, Cebu"
            icon={
              <Ionicons name="location-sharp" size={30} color={color.white} />
            }
          />
        </ScrollView>
        {/* ORDER ITEM */}
      </Box>
      <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize={15} isTruncated my={4}>
          PRODUCTS
        </Heading>
        <OrderItem />
        {/* TOTAL */}
        <PlaceOrderModel />
      </Box>
    </Box>
  );
}

export default PlaceOrderScreen;
