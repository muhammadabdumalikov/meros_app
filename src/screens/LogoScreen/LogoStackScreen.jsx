import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LogoScreen from "./LogoScreen";

const LogoStack = createNativeStackNavigator()

export default function LogoStackScreen() {
    return (
        <>
          <LogoStack.Navigator>
              <LogoStack.Screen name="LogoScreen" component={LogoScreen}/>
          </LogoStack.Navigator>
        </>
    )
}