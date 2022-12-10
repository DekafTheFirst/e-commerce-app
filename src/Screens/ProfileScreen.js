import React, { useContext } from "react";
import { Center, Heading, Image, Text, View } from "native-base";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import LoginScreen from "./LoginScreen";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
function ProfileScreen() {
  const { isAuthenticated, user } = useContext(FirebaseContext);
  return (
    <>
      <Center bg={Colors.main} pt={10} pb={6}>
        <Image
          source={{
            uri: user.data.photoURL,
          }}
          alt="profile"
          w={24}
          h={24}
          resizeMode="cover"
          rounded="100%"
        />
        <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
          {user.displayName}
        </Heading>
        <Text italic fontSize={12} color={Colors.white}>
          {`Joined ${new Date(Number(user.metadata.createdAt)).toISOString()}`}
        </Text>
      </Center>
      <Tabs />
    </>
  );
}

export default ProfileScreen;
