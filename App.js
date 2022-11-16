import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import HomeScreen from "./src/Screens/HomeScreen";
import LoginScreen from "./src/Screens/LoginScreen";
import NotVerifyScreen from "./src/Screens/NotVerifyScreen";
import RegisterScreen from "./src/Screens/RegisterScreen";
export default function App() {
  return (
    <NativeBaseProvider>
      <NotVerifyScreen />
    </NativeBaseProvider>
  );
}
