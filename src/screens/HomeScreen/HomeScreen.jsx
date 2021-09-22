import React from "react";
import {
    View,
    FlatList,
    TextInput,
    Text,
    Pressable,
    Image,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { styles } from "./styles";

export default function HomeScreen() {
    return (
        <>
            <View style={styles.container}>
                <View>
                    <Pressable>
                        <Image
                            source={require("../../../assets/images/Drawer.png")}
                            width={30}
                            height={30}
                        />
                    </Pressable>
                </View>
                <Text>Ok</Text>
            </View>
        </>
    );
}
