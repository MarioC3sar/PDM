import React from "react";
import { Alert, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import Constants from "expo-constants";
import DisplayImage from "@/app/(tabs)/displayImage";



export default function Linha1() {
    const handlePress = () => {
        console.log("Apertado");
        Alert.alert("Boa noite");
    };
    return (
        <View style={styles.componentPai}>
            <View style={styles.filho1} >

                <View style={styles.neto1}>
                    <DisplayImage style={styles.overlayImage} />
                    <TouchableOpacity style={styles.button} onPress={handlePress}>
                        <Text></Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.neto2}>
                    <View style={styles.bisneto1}>
                        <DisplayImage style={styles.overlayImage} />
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bisneto2}>
                        <DisplayImage style={styles.overlayImage} />
                        <TouchableOpacity style={styles.button} onPress={handlePress}>
                            <Text></Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.filho2}>
                <DisplayImage style={styles.overlayImage} />
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text></Text>
                </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center",
    },
    bisneto1: {
        flex: 0.5,
        backgroundColor: "teal",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
    },
    bisneto2: {
        flex: 0.5,
        backgroundColor: "skyblue",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
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
        justifyContent: "center",
        alignItems: "center",
    },
    overlayImage: {
        resizeMode: "contain",
        alignSelf: "center",
    },
    logo: {
        flex: 1,

    },
    button: {
        alignItems: 'center',

        padding: 10,
        marginTop: 8,
        justifyContent: "center",
        position: "absolute",
        zIndex: 10,
    },
});
