import React from "react";
import { Image, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Color from "../../constants/Color";
import CatalogSvg from "../../../assets/images/CatalogSvg/Catalog";
import HomeSvg from "../../../assets/images/HomeSvg/Home";
import BacketSvg from "../../../assets/images/BasketSvg/Basket";
import StarSvg from "../../../assets/images/StarSvg/Star";
import ProfileSvg from "../../../assets/images/ProfileSvg/Profile";
import HomeStackScreen from "../HomeScreen/HomeStackScreen";
import CategoryStackScreen from "../CategoryScreen/CategoryStackScreen";
import BasketStackScreen from "../BasketScreen/BasketStackScreen";
import FavoriteStackScreen from "../FavoriteScreen/FavoriteStackScreen";
import ProfileStackScreen from "../ProfileScreen/ProfileStackScreen";

const Tab = createBottomTabNavigator();

export default function ShopTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="HomeScreen"
                component={HomeStackScreen}
                options={{
                    tabBarIcon: () => <HomeSvg />,
                }}
            />
            <Tab.Screen
                name="CategoryScreen"
                component={CategoryStackScreen}
                options={{ tabBarIcon: () => <CatalogSvg /> }}
            />
            <Tab.Screen
                name="BasketScreen"
                component={BasketStackScreen}
                options={{ tabBarIcon: () => <BacketSvg /> }}
            />
            <Tab.Screen
                name="FavoriteScreen"
                component={FavoriteStackScreen}
                options={{ tabBarIcon: () => <StarSvg /> }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileStackScreen}
                options={{ tabBarIcon: () => <ProfileSvg /> }}
            />
        </Tab.Navigator>
    );
}
