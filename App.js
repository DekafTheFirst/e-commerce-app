import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import PaymentScreen from "./src/Screens/PaymentScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <PaymentScreen />
    </NativeBaseProvider>
  );
}
