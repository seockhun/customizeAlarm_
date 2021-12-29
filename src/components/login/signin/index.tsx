import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { COLOR } from "../../../styles";

interface SignupProps {
    id: string;
    password: string;
}

export default function Signin () {

    const [data, setData] = useState<SignupProps>({
        id: "",
        password: "",
    });

    const idChange = (e: any) => {
        setData({
            ...data,
            id: e.nativeEvent
        });
    };

    const pwChange = (e: any) => {
        setData({
            ...data,
            password: e.nativeEvent
        });
    };

    return(
        <SafeAreaView style={styles.container}>
            <TextInput placeholder="id" onChange={idChange} style={styles.input} />
            <TextInput placeholder="password" onChange={pwChange} style={styles.input} />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.text}>sign in</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: 'center',
        alignItems: "center",
        height: "90%"
    },
    input: {
        width: "80%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        height: 50,
        paddingLeft: 10,
        marginTop: 20
    },
    button: {
        marginTop: 40,
        width: "80%",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        backgroundColor: `${(COLOR.blackColor)}`,
        borderRadius: 7
    },
    text: {
        color: `${(COLOR.whiteColor)}`,
        fontSize: 17,

    }
})