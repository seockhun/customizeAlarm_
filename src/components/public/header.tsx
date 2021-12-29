import React, { useState } from "react";
import { SafeAreaView, Text, Image, StyleSheet, View, TouchableOpacity, Modal} from "react-native";
import { Plus } from "../../../assets";
import { COLOR } from "../../styles";
import useModal from "../../utils/hooks/modal/useModal";
import Content from "../modal/content";

export default function Header(){

    const modal = useModal();

    return(
        <SafeAreaView>
                <SafeAreaView style={styles.container}>
                    <Image style={styles.hiddenPlus} source={Plus} />
                    <Text style={styles.logoText}>MyCal</Text>
                    <TouchableOpacity onPress={() =>{ modal.setState.setInputModal(true)}}>
                        <Image style={styles.plus} source={Plus} />
                    </TouchableOpacity>
                </SafeAreaView>
            <Modal presentationStyle="formSheet" visible={modal.state.modal.inputModalState} animationType="slide" >
                <View style={styles.modal}>
                    <Content />
                </View>
            </Modal>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: `${(COLOR.backColor)}`,
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
    },
    modal: {
        height: "100%",
    }
});