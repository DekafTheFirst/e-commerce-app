import React, { useContext } from "react";
import { Center, Heading, Image, Text, View } from "native-base";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import LoginScreen from "./LoginScreen";
import { AuthenticationContext } from "../../Services/Firebase/authentication.context";
function ProfileScreen() {
  const { isAuthenticated, user } = useContext(AuthenticationContext);
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: "https://icons.veryicon.com/png/o/healthcate-medical/medical-icon-multi-color/user-206.png",
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {user.displayName}
        </Heading>
        <Text italic fontSize={12} color={Colors.white}>
          Joined Dec 12 2022
        </Text>
      </Center>
      <Tabs />
    </>
  );
}

export default ProfileScreen;
