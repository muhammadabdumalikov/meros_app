import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./ProfileScreen";

const ProfileStack = createNativeStackNavigator();

export default function ProfileStackScreen() {
    return (
        <>
            <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
                <ProfileStack.Screen name="Profile" component={ProfileScreen} />
            </ProfileStack.Navigator>
        </>
    );
}
