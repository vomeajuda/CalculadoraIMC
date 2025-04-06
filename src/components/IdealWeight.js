import React from "react";
import { Text, StyleSheet } from "react-native";

const IdealWeight = ({ alturaCorrigida }) => { //calcula o peso ideal com base na altura
    const getIdealWeight = (alturaCorrigida) => {
        if (alturaCorrigida) {
            const alturaMetros = parseFloat(alturaCorrigida) / 100;
            const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
            const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);
            return { pesoMin, pesoMax };
        }
        return { pesoMin: null, pesoMax: null };
    };

    const { pesoMin, pesoMax } = getIdealWeight(alturaCorrigida); //chama a função getIdealWeight e armazena os valores em pesoMin e pesoMax

    return ( //retorna o texto com o peso ideal
        <>
            <Text style={styles.resultText}>Seu peso minimo é: {pesoMin} kg</Text>
            <Text style={styles.resultText}>Seu peso maximo é: {pesoMax} kg</Text>
        </>
    );
};

const styles = StyleSheet.create({ //estilo da mensagem
    resultText: {
        marginTop: 20,
        fontSize: 30,
        textAlign: "center",
        color: "white",
    },
});

export default IdealWeight; //exporta o componente Result