import React, { useContext } from "react";
import { Box, Heading, ScrollView } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";

import color from "../color";
import OrderInfo from "../Components/OrderInfo";
import OrderItem from "../Components/OrderItem";
import PlaceOrderModel from "../Components/PlaceOrderModel";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import CartItems from "../Components/CartItems";

function PlaceOrderScreen() {
  const { user, cartItems, deliveryAddress } = useContext(FirebaseContext);
  return (
    <Box bg={color.subGreen} flex={1} safeArea pt={6}>
      <Box>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <OrderInfo
            title="CUSTOMER"
            subTitle="Dekaf"
            text={user.email}
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
            text={deliveryAddress}
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
