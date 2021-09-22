import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryScreen from "./CategoryScreen";

const CategoryStack = createNativeStackNavigator()

export default function CategoryStackScreen() {
    return (
        <>
          <CategoryStack.Navigator screenOptions={{
              headerShown: false
          }}>
              <CategoryStack.Screen name="Category" component={CategoryScreen}/>
          </CategoryStack.Navigator>
        </>
    )
}