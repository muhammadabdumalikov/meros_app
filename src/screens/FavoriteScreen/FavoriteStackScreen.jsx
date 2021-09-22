import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FavoriteScreen from "./FavoriteScreen";

const FavoriteStack = createNativeStackNavigator()

export default function FavoriteStackScreen() {
    return (
        <>
          <FavoriteStack.Navigator>
              <FavoriteStack.Screen name="FavoriteScreen" component={FavoriteScreen}/>
          </FavoriteStack.Navigator>
        </>
    )
}