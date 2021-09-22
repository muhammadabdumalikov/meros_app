import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasketScreen from "./BasketScreen";

const BasketStack = createNativeStackNavigator()

export default function BasketStackScreen() {
    return (
        <>
          <BasketStack.Navigator>
              <BasketStack.Screen name="BasketScreen" component={BasketScreen}/>
          </BasketStack.Navigator>
        </>
    )
}