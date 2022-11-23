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
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import { AuthenticationContext } from "../../Services/Authentication/authentiation.context";
import { useNavigation } from "@react-navigation/native";

function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { onLogin, error } = useContext(AuthenticationContext);

  // const navigation = useNavigation();

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
        <Heading>LOGIN</Heading>
        <VStack space={6} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholder="user@gmail.com"
            w="70%"
            pl={2}
            color={Colors.main}
            onChangeText={(text) => setEmail(text)}
            borderBottomColor={Colors.underline}
          />
          <Input
            InputLeftElement={
              <Ionicons name="eye" size={24} color={Colors.main} />
            }
            variant="underlined"
            placeholder="**********"
            type="password"
            w="70%"
            pl={2}
            color={Colors.main}
            onChangeText={(text) => {
              setPassword(text);
            }}
            borderBottomColor={Colors.underline}
          />
        </VStack>
        <Text color={Colors.red} pt={2}>
          {error}
        </Text>
        <Button
          _pressed={{
            bg: Colors.main,
          }}
          my={30}
          w="40%"
          rounded={50}
          bg={Colors.main}
          onPress={() => onLogin(email, password)}
          _text={{
            color: Colors.white,
          }}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color={Colors.deepestGray}>SIGN UP</Text>
        </Pressable>
      </Box>
    </Box>
  );
}

export default LoginScreen;
