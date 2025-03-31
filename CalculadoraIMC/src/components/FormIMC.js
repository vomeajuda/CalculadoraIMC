import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';
import React, { useState } from 'react';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classif, setClassif] = useState('');
    const [pesoMin, setPesoMin] = useState('');
    const [pesoMax, setPesoMax] = useState('');

    const calcularIMC = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            classificarIMC(imcCalculado);
            pesosIdeais(altura);
            setImc(imcCalculado);
        }
    };

    const classificarIMC = (imc) => {
        if (imc < 18.5) setClassif('Abaixo do peso');
        else if (imc >= 18.5 && imc < 24.9) setClassif('Peso normal');
        else if (imc >= 25 && imc < 29.9) setClassif('Sobrepeso');
        else if (imc >= 30 && imc < 34.9) setClassif('Obesidade grau 1');
        else if (imc >= 35 && imc < 39.9) setClassif('Obesidade grau 2');
        else if (imc >= 40) setClassif('Obesidade grau 3');
    }

    const pesosIdeais = () => {
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
            const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);
            setPesoMin(pesoMin);
            setPesoMax(pesoMax);
        }
    }

    return (
        <View style={styles.formContainer}>
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {classif && <Classification classif={classif} />}
            {pesoMin && <IdealWeight pesoMin={pesoMin} pesoMax={pesoMax} />}
        </View>
    );
};

const styles = StyleSheet.create({ 
    formContainer: {
        backgroundColor: 'gray',
        padding: 16,
        borderRadius: 10,
    },
    input: {
        height: 40,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 8,
        borderRadius: 5,
    },
});

export default FormIMC;