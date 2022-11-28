import React, { useContext, useState } from "react";
import {
  Text,
  View,
  Box,
  Image,
  Heading,
  VStack,
  Input,
  Button,
  Pressable,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { AuthenticationContext } from "../../Services/Firebase/authentiation.context";

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, error } = useContext(AuthenticationContext);

  return (
    <Box flex={1} bg={Colors.black}>
      <Image
        flex={1}
        alt="Logo"
        source={require("../../assets/login-background.png")}
      />
      <Box
        w="full"
        h="full"
        position="absolute"
        top="-50"
        px="6"
        justifyContent="center"
      >
        <Heading>Sign Up</Heading>
        <VStack space={6} pt="6">
          <Input
            size="md"
            InputLeftElement={
              <FontAwesome name="user" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="Name"
            placeholderTextColor={Colors.black}
            w="70%"
            p={2}
            pl={3}
            mb={3}
            color={Colors.black}
            borderBottomColor={Colors.underline}
            borderBottomWidth={0.5}
            onChangeText={(text) => setUsername(text)}
          />
          <Input
            size="md"
            InputLeftElement={
              <MaterialIcons name="email" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="Email Address"
            placeholderTextColor={Colors.black}
            w="70%"
            pl={2}
            mb={3}
            color={Colors.main}
            onChangeText={(text) => setEmail(text)}
            borderBottomColor={Colors.underline}
            borderBottomWidth={0.5}
          />
          <Input
            size="md"
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="Enter Password"
            placeholderTextColor={Colors.black}
            type="password"
            w="70%"
            pl={2}
            mb={3}
            color={Colors.main}
            onChangeText={(text) => setPassword(text)}
            borderBottomColor={Colors.underline}
            borderBottomWidth={0.5}
          />

          <Input
            size="md"
            InputLeftElement={
              <Ionicons name="eye" size={20} color={Colors.black} />
            }
            variant="underlined"
            placeholder="Confirm password"
            placeholderTextColor={Colors.black}
            type="password"
            w="70%"
            pl={2}
            color={Colors.main}
            onChangeText={(text) => setRepeatedPassword(text)}
            borderBottomColor={Colors.underline}
            borderBottomWidth={0.5}
          />
        </VStack>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          p={4}
          my={30}
          rounded={50}
          bg={Colors.main}
          _text={{
            color: Colors.black,
            fontWeight: "bold",
            fontSize: 16,
          }}
          onPress={() =>
            onRegister(email, password, repeatedPassword, username)
          }
        >
          Sign up
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
          <Text color={Colors.deepestGray}>LOGIN</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default RegisterScreen;
