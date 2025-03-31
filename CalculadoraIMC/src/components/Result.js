import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ imc }) => {
    return (
        <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    resultText: {
        marginTop: 20,
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
});

export default Result;