import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Content() {
    return(
        <SafeAreaView style={styles.container}>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        backgroundColor: "black",
        marginTop: 70
    }
})