import React from "react";
import { Text, StyleSheet } from "react-native";

const Classification = ({ imc }) => { //classifica o imc
    const getClassification = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        else if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        else if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        else if (imc >= 30 && imc < 34.9) return 'Obesidade grau 1';
        else if (imc >= 35 && imc < 39.9) return 'Obesidade grau 2';
        else if (imc >= 40) return 'Obesidade grau 3';
        return '';
    };

    const classif = getClassification(imc); //chama a função getClassification e armazena a classificação em classif

    return ( //retorna o texto com a classificação
        <Text style={styles.resultText}>Sua classificação é: {classif}</Text>
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

export default Classification;