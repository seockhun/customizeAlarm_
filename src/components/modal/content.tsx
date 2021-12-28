import React, { useState } from "react";
import { SafeAreaView, StyleSheet,Text, TouchableOpacity, TextInput, Image, Pressable } from "react-native";
import { COLOR } from "../../styles";
import useModal from "../../utils/hooks/modal/useModal";
import DateTimePicker from '@react-native-community/datetimepicker';
import { Alarm, Bell } from "../../../assets";
import useAlarm from "../../utils/hooks/alarm/useAlarm";

interface DayProps {
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
}

export default function Content() {

    const modal = useModal();
    const alarm = useAlarm();

    const [day, setDay] = useState<DayProps>({
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
        sun: false,
    });

    const {mon, tue, wed, thu, fri, sat, sun} = day;

    const timeChange = (e: any, sel: any) => {
        const cur = sel || alarm.state.alarm.time;
        alarm.setState.setTime(cur);
    }

    const titleChange = (e: any) => {
        alarm.setState.setTitle(e.nativeEvent);
    }

    return(
        <>
            <SafeAreaView style={styles.header}>
                <TouchableOpacity onPress={() => {modal.setState.setInputModal(false)}}>
                    <Text style={styles.cancel}>Cnacel</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>알림 추가</Text>
                <TouchableOpacity onPress={() => {modal.setState.setInputModal(false)}}>
                    <Text style={styles.add}>Add   </Text>
                </TouchableOpacity>
            </SafeAreaView>
            <SafeAreaView style={styles.body}>
                <TextInput 
                    style={styles.title}
                    placeholder="알람 제목"
                    placeholderTextColor={"#b5b5b5"}
                    onChange={titleChange}
                />
                <DateTimePicker 
                    onChange={timeChange}
                    testID="dateTimePicker"
                    mode="time"
                    value={alarm.state.alarm.time}
                    is24Hour={true}
                    display="spinner"
                    textColor="black"
                />
                <SafeAreaView style={styles.dateWrapper}>
                    <TouchableOpacity style={{borderRadius:50, backgroundColor: !mon ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`}} onPress={() => {setDay({...day, mon: !mon})}}>
                        <Text style={{ padding: 10, fontSize: 20,
                            color: !mon ? `${(COLOR.blackColor)}` : `${(COLOR.whiteColor)}`}}>월</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setDay({...day, tue: !tue})}} style={{borderRadius:50, backgroundColor: !tue ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`}}>
                        <Text style={{padding: 10, fontSize: 20,
                            color: !tue ? `${(COLOR.blackColor)}` : `${(COLOR.whiteColor)}`}}>화</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setDay({...day, wed: !wed})}} style={{borderRadius:50, backgroundColor: !wed ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`}}>
                        <Text style={{padding: 10, fontSize: 20,
                            color: !wed ? `${(COLOR.blackColor)}` : `${(COLOR.whiteColor)}`}}>수</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setDay({...day, thu: !thu})}} style={{borderRadius:50, backgroundColor: !thu ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`}}>
                        <Text style={{padding: 10, fontSize: 20,
                            color: !thu ? `${(COLOR.blackColor)}` : `${(COLOR.whiteColor)}`}}>목</Text>
                    </TouchableOpacity >
                    <TouchableOpacity onPress={() => {setDay({...day, fri: !fri})}} style={{borderRadius:50, backgroundColor: !fri ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`}}>
                        <Text style={{padding: 10, fontSize: 20,
                            color: !fri ? `${(COLOR.blackColor)}` : `${(COLOR.whiteColor)}`}}>금</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {setDay({...day, sat: !sat})}} style={{backgroundColor: !sat ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`, borderRadius: 50,}}>
                        <Text style={{padding: 10,fontSize: 20, 
                            color:`${(COLOR.saturday)}`}}>토</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => {setDay({...day, sun: !sun})}} style={{backgroundColor: !sun ? `${(COLOR.whiteColor)}` : `${(COLOR.blackColor)}`, borderRadius: 50}}>
                        <Text style={{padding: 10,fontSize: 20,
                             color: `${(COLOR.sunday)}`}}>일</Text>
                    </TouchableOpacity>
                </SafeAreaView>
                <SafeAreaView style={styles.type}>
                    {
                        !alarm.state.alarm.type ?
                        <>
                            <SafeAreaView style={{flexDirection: "row", alignItems: "center"}}>
                                <TouchableOpacity >
                                    <Image style={{opacity: 0.2,width: 30,height: 30,margin: 10, }} source={Bell} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {alarm.setState.setType(true)}}>
                                    <Image style={{width: 30,height: 30,margin: 10,}} source={Alarm} />
                                </TouchableOpacity>
                            </SafeAreaView>
                            <Text style={{marginTop: 10, color: `${(COLOR.saturday)}`}}>*사용자가 정한 시간에 알림이 전달됩니다*</Text>
                        </>
                        :
                        <>
                            <SafeAreaView style={{flexDirection: "row", alignItems: "center"}}>
                                <TouchableOpacity onPress={() => {alarm.setState.setType(false)}}>
                                    <Image style={{width: 30,height: 30,margin: 10,}} source={Bell} />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Image style={{ opacity: 0.2,width: 30,height: 30,margin: 10,}} source={Alarm} />
                                </TouchableOpacity>
                            </SafeAreaView>
                            <Text style={{marginTop: 10, color: `${(COLOR.saturday)}`}}>*시용자가 정한 시간에 알림이 울리게 됩니다*</Text>
                        </>
                    }
                </SafeAreaView>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        height: "8%",
        borderBottomWidth: 1,
        borderBottomColor: "gray",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    cancel: {
        fontSize: 17,
        paddingLeft: 20,
        color: `${(COLOR.saturday)}`,

    },
    add: {
        fontSize: 17,
        paddingRight: 13,
        color: `${(COLOR.saturday)}`
    },
    headerText: {
        fontSize: 17,
    },
    body: {

    },
    title: {
        width: "70%",
        height: 45,
        borderBottomWidth: 1,
        borderStyle: "solid",
        borderColor: "#707070",
        color: `${(COLOR.blackColor)}`,
        fontSize: 17,
        paddingLeft: 5,
        marginLeft: 25,
        marginTop: 20,
        marginBottom: 20,
    },
    dateWrapper: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-evenly",

    },
    weekendDay: {

    },
    type: {
        flexDirection: "column",
        alignItems: "center",
        marginTop: 10,

    },
    imageType: {
    }
})