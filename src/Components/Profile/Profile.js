import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Box, FormControl, Icon, Input, ScrollView, VStack } from "native-base";
import Colors from "../../color";
import Buttone from "../Buttone";
import { AuthenticationContext } from "../../../Services/Firebase/authentication.context";
import { AntDesign } from "@expo/vector-icons";

export default function Profile() {
  const { onLogout, user } = useContext(AuthenticationContext);

  const Inputs = [
    {
      label: "USERNAME",
      type: "text",
      defaultValue: user.displayName,
    },
    { label: "EMAIL", type: "text", defaultValue: user.email },
    { label: "NEW PASSWORD", type: "password", defaultValue: user.password },
    {
      label: "CONFIRM PASSWORD",
      type: "password",
      defaultValue: user.password,
    },
  ];
  return (
    <Box h="full" bg={Colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {Inputs.map((i, index) => (
            <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                  color: Colors.black,
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input
                borderWidth={0}
                bg={Colors.subGreen}
                py={3}
                type={i.type}
                color={Colors.main}
                fontSize={15}
                _focus={{
                  bg: Colors.subGreen,
                  borderColor: Colors.main,
                  borderWidth: 0,
                }}
                defaultValue={i.defaultValue}
              />
            </FormControl>
          ))}
          <Buttone bg={Colors.main} color={Colors.white}>
            UPDATE PROFILE
          </Buttone>
          <Buttone
            bg={Colors.main}
            color={Colors.white}
            onPress={() => onLogout()}
            style={{ flexDirection: "row" }}
            rightIcon={<AntDesign name="logout" size={24} color="black" />}
          >
            LOGOUT
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  );
}
