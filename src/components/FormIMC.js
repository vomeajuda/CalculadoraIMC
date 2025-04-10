import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';
import React, { useState } from 'react';

const FormIMC = () => {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);

    const substituirVirgulaPorPonto = (texto) => {
        return texto.replace(/,/g, '.');
    };

    const pesoCorrigido = substituirVirgulaPorPonto(peso);
    const alturaCorrigida = substituirVirgulaPorPonto(altura);

    const calcularIMC = () => {
        if (!isNaN(pesoCorrigido) && !isNaN(alturaCorrigida) && parseFloat(pesoCorrigido) > 0 && parseFloat(alturaCorrigida) > 0) {
            const alturaMetros = parseFloat(alturaCorrigida) / 100;
            const imcCalculado = (parseFloat(pesoCorrigido) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        } else {
            alert('Por favor, insira valores válidos para peso e altura.');
        }
    };

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
            <Button color="green" title="Calcular IMC" onPress={calcularIMC} />
            {imc && <Result imc={imc} />}
            {imc && <Classification imc={imc} />}
            {imc && <IdealWeight alturaCorrigida={alturaCorrigida} />}
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