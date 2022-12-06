import React from "react";
import { Box, Button, HStack, Pressable, ScrollView, Text } from "native-base";
import Colors from "../../color";
import { useContext } from "react";
import { OrderContext } from "../../../Services/Order/order.context";
import { useNavigation } from "@react-navigation/native";
export default function Orders() {
  const navigation = useNavigation();

  const { orders } = useContext(OrderContext);

  return (
    <Box h="full" bg={Colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Paid Order */}
        {orders.map((order, id) => (
          <Pressable
            onPress={() => {
              const viewFromProfile = "viewFromProfile";
              navigation.navigate("ProfileOrderScreen", {
                order,
              });
            }}
            key={id}
          >
            <HStack
              space={4}
              justifyContent="space-between"
              alignItems="center"
              bg={Colors.deepGray}
              py={5}
              px={2}
            >
              <Text fontSize={9} color={Colors.blue} isTruncated>
                {id}
              </Text>
              <Text fontSize={12} bold color={Colors.black} isTruncated>
                {order.paid ? "PAID" : "UNPAID"}
              </Text>

              <Text fontSize={11} italic color={Colors.black} isTruncated>
                {order.paidOn}
              </Text>

              <Button
                px={7}
                py={1.5}
                rounded={50}
                bg={Colors.main}
                _text={{ color: Colors.white }}
                _pressed={{ bg: Colors.main }}
              >
                {`₱${order.total}`}
              </Button>
            </HStack>
          </Pressable>
        ))}

        {/* Not Paid */}
      </ScrollView>
    </Box>
  );
}
