import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/Screens/LoginScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
import OrderScreen from "./src/Screens/OrderScreen";
import BottomNav from "./src/Components/Navigation/BottomNav";

import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";
import { AuthenticationContextProvider } from "./Services/Firebase/authentiation.context";
import AccountNav from "./src/Components/Navigation/AccountNav";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthenticationContextProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <StatusBar hidden={false} />

          <Stack.Navigator
            initialRouteName="Bottom"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Order" component={OrderScreen} />
            <Stack.Screen name="Bottom" component={BottomNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </AuthenticationContextProvider>
  );
}
