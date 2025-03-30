import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ imc }) => {
    return (
        <Text style={styles.resultText}>Seu IMC é: {imc}</Text>
    );
};

const styles = StyleSheet.create({
    result: {
        marginTop: 20,
        fontSize: 24,
        textAlign: "center",
        color: "#333",
    },
});

export default Result;