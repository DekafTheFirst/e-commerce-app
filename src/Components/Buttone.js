import { View, Text } from "react-native";
import React, { Children } from "react";
import { Button } from "native-base";

export default function Buttone({
  mt,
  bg,
  color,
  children,
  onPress,

  rightIcon,
}) {
  return (
    <Button
      w="full"
      h={55}
      mt={mt}
      rounded="full"
      bg={bg}
      _text={{
        color: color,
        fontWeight: "bold",
      }}
      _pressed={{ bg: bg }}
      onPress={onPress}
      rightIcon={rightIcon}
    >
      {children}
    </Button>
  );
}
