import React from "react";
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity,  } from "react-native";
import { Plus } from "../../../assets";
import { COLOR } from "../../styles";

export default function Header(){
    return(
        <SafeAreaView style={styles.container}>
            <Image style={styles.hiddenPlus} source={Plus} />
            <Text style={styles.logoText}>MyCal</Text>
            <Image style={styles.plus} source={Plus} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    logoText: {
        color: `${(COLOR.headerText)}`,
        fontSize: 25,
        textShadowColor: `${(COLOR.whiteColor)}`,
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 10,
    },
    hiddenPlus: {
        opacity: 0,
    },
    plus: {
        transform: [{ translateX: -10 }],
        width: 23,
        height: 23,
    }
});