import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";

const HomeStack = createNativeStackNavigator()

export default function HomeStackScreen() {
    return (
        <>
          <HomeStack.Navigator screenOptions={{headerShown: false}}>
              <HomeStack.Screen name="Home" component={HomeScreen}/>
          </HomeStack.Navigator>
        </>
    )
}