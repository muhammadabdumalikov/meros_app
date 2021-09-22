import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/screens/LogoScreen/LogoScreen";
// import Login from "./src/screens/LoginScreen";
// import OnBoarding from "./src/screens/OnBoardingScreen";
import { NavigationContainer } from "@react-navigation/native";
import ShopTabNavigator from "./src/screens/navigation/ShopTabNavigator";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style="dark" />
            <SafeAreaProvider>
                {/* <Home/> */}
                <ShopTabNavigator />
            </SafeAreaProvider>
        </NavigationContainer>
    );
}
