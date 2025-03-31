import React from "react";
import { Text, StyleSheet } from "react-native";

const Result = ({ pesoMin, pesoMax }) => {
    return (
        <>
            <Text style={styles.resultText}>Seu peso minimo é: {pesoMin} kg</Text>
            <Text style={styles.resultText}>Seu peso maximo é: {pesoMax} kg</Text>
        </>
    );
};

const styles = StyleSheet.create({
    resultText: {
        marginTop: 20,
        fontSize: 30,
        textAlign: "center",
        color: "#333",
    },
});

export default Result;