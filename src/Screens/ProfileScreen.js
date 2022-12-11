import React, { useContext } from "react";
import { View } from "react-native";
import { Box, Center, Heading, Image, Text } from "native-base";
import Colors from "../color";
import Tabs from "../Components/Profile/Tabs";
import LoginScreen from "./LoginScreen";
import { FirebaseContext } from "../../Services/Firebase/firebase.context";
import { useEffect } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActivityIndicator } from "react-native";
import moment from "moment";

function ProfileScreen() {
  const { user, userDataIsLoading, isAuthenticated } =
    useContext(FirebaseContext);

  return (
    <>
      {userDataIsLoading ? (
        <Box safeAreaTop flex={1}>
          <Center height="full">
            <ActivityIndicator />
          </Center>
        </Box>
      ) : (
        <>
          <Center bg={Colors.main} pt={10} pb={6}>
            <Image
              thumbnail
              source={{
                uri: user.photoURL,
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
              {`Joined ${user.metadata.createdAt}`}
            </Text>
          </Center>
          <Tabs />
        </>
      )}
    </>
  );
}

export default ProfileScreen;
