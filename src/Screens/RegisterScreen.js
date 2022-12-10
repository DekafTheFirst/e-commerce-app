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
  Center,
} from "native-base";
import Colors from "../color";
import { MaterialIcons, Ionicons, FontAwesome } from "@expo/vector-icons";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import {
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

function RegisterScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const { onRegister, registerError } = useContext(FirebaseContext);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Box flex={1} bg={Colors.white}>
        <ImageBackground
          source={require("../../assets/register-background.png")}
          resizeMode="cover"
          style={{
            flex: 1,
            padding: 25,
          }}
        >
          <VStack space={6} pt="6" my="auto">
            <Center>
              <Heading color={Colors.white}>Sign Up</Heading>
            </Center>
            <Input
              size="md"
              InputLeftElement={
                <FontAwesome name="user" size={20} color={Colors.white} />
              }
              variant="underlined"
              placeholder="Name"
              placeholderTextColor={Colors.white}
              w="100%"
              p={4}
              pl={5}
              mb={1}
              color={Colors.white}
              borderBottomColor={Colors.underline}
              borderBottomWidth={1}
              onChangeText={(text) => setUsername(text)}
            />
            <Input
              size="md"
              InputLeftElement={
                <MaterialIcons name="email" size={20} color={Colors.white} />
              }
              variant="underlined"
              placeholder="Email Address"
              placeholderTextColor={Colors.white}
              w="100%"
              pl={4}
              mb={1}
              onChangeText={(text) => setEmail(text)}
              p={4}
              color={Colors.white}
              borderBottomColor={Colors.underline}
              borderBottomWidth={1}
            />
            <Input
              size="md"
              InputLeftElement={
                <Ionicons name="eye" size={20} color={Colors.white} />
              }
              variant="underlined"
              placeholder="Enter Password"
              placeholderTextColor={Colors.white}
              type="password"
              w="100%"
              p={4}
              pl={4}
              mb={1}
              color={Colors.white}
              onChangeText={(text) => setPassword(text)}
              borderBottomColor={Colors.underline}
              borderBottomWidth={1}
            />

            <Input
              size="md"
              InputLeftElement={
                <Ionicons name="eye" size={20} color={Colors.white} />
              }
              variant="underlined"
              placeholder="Confirm password"
              placeholderTextColor={Colors.white}
              type="password"
              w="100%"
              p={4}
              pl={4}
              color={Colors.white}
              onChangeText={(text) => setRepeatedPassword(text)}
              borderBottomColor={Colors.underline}
              borderBottomWidth={1}
            />
            <View>
              <Text color={Colors.red}>{registerError}</Text>
              <Button
                _pressed={{
                  bg: Colors.main,
                }}
                p={4}
                my={30}
                width="100%"
                rounded={50}
                bg={Colors.main}
                _text={{
                  color: Colors.white,
                  fontWeight: "bold",
                  fontSize: 16,
                }}
                onPress={() =>
                  onRegister(email, password, repeatedPassword, username)
                }
              >
                Sign up
              </Button>
            </View>
          </VStack>
          <Text mx="auto" mt="auto">
            Already have an account?
            <Text> </Text>
            <Text
              color={Colors.main}
              onPress={() => navigation.navigate("Login")}
            >
              Login
            </Text>
          </Text>
        </ImageBackground>
      </Box>
    </TouchableWithoutFeedback>
  );
}

export default RegisterScreen;
