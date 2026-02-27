import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import DisplayImage from "@/app/(tabs)/displayImage";

 export default function linha1() {
    return (
        <View style={styles.componentPai}>
            <View style={styles.filho1} >
                <View style={styles.neto1}>
                    <DisplayImage style={styles.overlayImage} />
                </View>
                <View style={styles.neto2}>
                    <View style={styles.bisneto1}>
                        <DisplayImage style={styles.overlayImage} />
                    </View>
                    <View style={styles.bisneto2}>
                        <DisplayImage style={styles.overlayImage} />
                    </View>
                </View>
            </View>
            <View style={styles.filho2}>
                <DisplayImage style={styles.overlayImage} />
            </View>
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
        position: "relative",
    },
    neto1: {
        flex: 0.5,
        backgroundColor: "lime",
        position: "relative",
    },
                bisneto1: {
                flex: 0.5,
                backgroundColor: "teal",
                position: "relative",
    },
                bisneto2: {
                flex: 0.5,
                backgroundColor: "skyblue",
                position: "relative",
            },
    neto2: {
        flex:0.5,
        backgroundColor: "aquamarine",
        position: "relative",
    },
    filho2: {
        flex: 0.5,
        backgroundColor: "salmon",
        position: "relative",
    },
    overlayImage: {
        resizeMode: "contain",
        alignSelf: "center",
    },
});
