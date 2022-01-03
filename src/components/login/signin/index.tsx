import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity,Image, Text } from "react-native";
import { Google, Kakao } from "../../../../assets";
import * as Linking from 'expo-linking';

export default function Signin () {

    const INSTAGRAM_LINK = 'https://www.instagram.com/coconut_dailyapp/';

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.login}>sign in</Text>
            <TouchableOpacity style={styles.kakao} onPress={() => {Linking.openURL('http://192.168.43.74:8000/user/auth/kakao')}} >
            {/* <TouchableOpacity style={styles.kakao} onPress={() => {Linking.openURL('http://192.168.43.74:8000/user/auth/kakao')}} > */}
                <Image style={styles.kakaoLogo} source={Kakao}/>
                <Text style={styles.kakaoText}>카카오 계정으로 로그인 하기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.google} onPress={() => {Linking.openURL('http://192.168.43.74:8000/user/auth/google/')}} >
            {/* <TouchableOpacity style={styles.google} onPress={() => {Linking.openURL('http://localhost:8000/user/auth/google')}} > */}
                <Image style={styles.googleLogo} source={Google}/>
                <Text style={styles.googleText}>구글 계정으로 로그인 하기</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
        height: "100%",
    },
    kakao: {
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 7,
        backgroundColor: "#FAE101",
    },
    kakaoLogo: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    login: {
        fontSize: 30,
        fontFamily: "Apple SD Gothic Neo",
        marginBottom: 30
    },
    kakaoText: {
        fontSize: 16,
        paddingLeft: 5
    },
    google:{ 
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        height: 50,
        borderRadius: 7,
        backgroundColor: "#E3E3E3",
        marginTop: 15,
        marginBottom: 80,
    },
    googleLogo: {
        width: 40,
        height: 40,
        marginLeft: 10,
    },
    googleText: {
        fontSize: 16,
        paddingLeft: 5,
        // color: `${(COLOR.whiteColor)}`
    }
})