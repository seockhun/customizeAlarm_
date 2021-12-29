import { useState } from "react";
import { SafeAreaView, StyleSheet ,Text, Image } from "react-native";
import { Bell } from "../../../assets";
import { COLOR } from "../../styles";

interface MainProps{
    title: string;
    time: string;
    mon: false;
    tue: false;
    wed: false;
    thu: false;
    fri: false;
    sat: false;
    sun: false;
    imgSrc: string;
}

export default function Main() {

    const [data, setData] = useState<MainProps>({
        title: "기상 알림",
        time: "07:30 A.M",
        mon: false,
        tue: false, 
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
        imgSrc: "",
    })

    return(
        <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.left}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.time}>{data.time}</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.right}>
                <SafeAreaView style={styles.day}>
                    {
                        !data.mon ? 
                            <Text style={{fontSize: 18, fontWeight: "300", opacity: 0.2, paddingLeft: 5}}>월</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5}}>월</Text>
                    }
                    {
                        !data.tue ? 
                            <Text style={{fontSize: 18, fontWeight: "300", opacity: 0.2, paddingLeft: 5}}>화</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5}}>화</Text>
                    }
                    {
                        !data.wed ? 
                            <Text style={{fontSize: 18, fontWeight: "300", opacity: 0.2, paddingLeft: 5}}>수</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5}}>수</Text>
                    }
                    {
                        !data.thu ? 
                            <Text style={{fontSize: 18, fontWeight: "300", opacity: 0.2, paddingLeft: 5}}>목</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5}}>목</Text>
                    }
                    {
                        !data.fri ? 
                            <Text style={{fontSize: 18, fontWeight: "300", opacity: 0.2, paddingLeft: 5}}>금</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5}}>금</Text>
                    }
                    {
                        !data.sat ? 
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5, opacity: 0.3, color: `${(COLOR.saturday)}`}}>토</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5, color: `${(COLOR.saturday)}`}}>토</Text>
                    }
                    {
                        !data.sun ? 
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5, opacity: 0.3, color: `${(COLOR.sunday)}`}}>일</Text>
                            :
                            <Text style={{fontSize: 18, fontWeight: "300", paddingLeft: 5, color: `${(COLOR.sunday)}`}}>일</Text>
                    }
                </SafeAreaView>
                <Image style={styles.type} source={Bell} />
            </SafeAreaView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D5D5D5",
        width: "80%",
        flexDirection: "row",
        height:130,
        borderRadius: 20,
        justifyContent: "space-evenly",
        marginTop: 20
    },
    left: {
        justifyContent: "space-evenly"
    },  
    title: {
        fontSize: 20,
        fontWeight: "300"
    },
    time: {
        fontSize: 25,
        color: `${(COLOR.morningColor)}`
    },
    right: {    
        justifyContent: "center",
        alignItems: "flex-end"
    },
    day: {
        flexDirection: "row"
    },
    type: {
        width: 15,
        height: 15,
        marginBottom: -40,
        marginTop: 30,
        marginRight: -15
    }
})