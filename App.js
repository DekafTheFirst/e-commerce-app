import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import PaymentScreen from "./src/Screens/PaymentScreen";
import PlaceOrderScreen from "./src/Screens/PlaceOrderScreen";

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen />
    </NativeBaseProvider>
  );
}
