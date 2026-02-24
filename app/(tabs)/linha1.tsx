import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

 export default function linha1() {
    return (
        <View style={styles.componentPai}>
            <View style={styles.filho1} >
                <View style={styles.neto1}/>
                    <View style={styles.neto2}/>
            </View>
            <View style={styles.filho2} />
        </View>
    )
}

const styles = StyleSheet.create({
    componentPai: {
        flex: 1,
        flexDirection: "column",
        paddingTop: Constants.statusBarHeight,
    },
    filho1: {
        flex: 0.5,
        flexDirection:"row",
        backgroundColor: "crimson",
    },
    neto1: {
        flex: 0.5,
        backgroundColor: "lime",
    },
    neto2: {
        flex:0.5,
        backgroundColor: "aquamarine"
    },
    filho2: {
        flex: 0.5,
        backgroundColor: "salmon",
    },
});

