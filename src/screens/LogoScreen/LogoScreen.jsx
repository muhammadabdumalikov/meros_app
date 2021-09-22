import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    SafeAreaView,
    Image,
    Dimensions,
    Pressable,
} from "react-native";
import { styles } from "./styles";
import LogoSvg from "./LogoSvg";
import { ActivityIndicator } from "react-native"

const { width, height } = Dimensions.get("window");

export default function LogoScreen() {
    return (
        <>
            <View style={styles.container}>
                <LogoSvg/>
                <ActivityIndicator color="#32386B" size="large" />
            </View>
        </>
    );
}
