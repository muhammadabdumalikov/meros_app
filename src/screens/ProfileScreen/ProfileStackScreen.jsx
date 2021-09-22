import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createNativeStackNavigator()

export default function ProfileStackScreen() {
    return (
        <>
          <ProfileStack.Navigator>
              <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen}/>
          </ProfileStack.Navigator>
        </>
    )
}