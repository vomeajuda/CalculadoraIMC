import { View, TextInput, Button, StyleSheet } from 'react-native';
import Result from './Result';
import Classification from './Classification';
import IdealWeight from './IdealWeight';
import React, { useState } from 'react';

const FormIMC = () => { //inicia a função anonima do formulário
    //cria os estados para peso, altura, IMC, classificação e pesos ideais
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classif, setClassif] = useState('');
    const [pesoMin, setPesoMin] = useState('');
    const [pesoMax, setPesoMax] = useState('');

    const calcularIMC = () => { //função anonima para calcular o IMC
        if (!isNaN(peso) && !isNaN(altura) && parseFloat(peso) > 0 && parseFloat(altura) > 0) { //verifica se os valores de peso e altura são válidos
            const alturaMetros = parseFloat(altura) / 100; //transforma a altura em metros
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2); //calcula o IMC
            classificarIMC(imcCalculado); //chama a função para classificar o IMC
            pesosIdeais(altura); //chama a função para calcular os pesos ideais
            setImc(imcCalculado); //atualiza o estado do IMC
        } else {
            alert('Por favor, insira valores válidos para peso e altura.');
        }
    };

    const classificarIMC = (imc) => { //classifica o IMC atualizando o estado da classificação
        if (imc < 18.5) setClassif('Abaixo do peso');
        else if (imc >= 18.5 && imc < 24.9) setClassif('Peso normal');
        else if (imc >= 25 && imc < 29.9) setClassif('Sobrepeso');
        else if (imc >= 30 && imc < 34.9) setClassif('Obesidade grau 1');
        else if (imc >= 35 && imc < 39.9) setClassif('Obesidade grau 2');
        else if (imc >= 40) setClassif('Obesidade grau 3');
    }

    const pesosIdeais = () => { //calcula os pesos ideais com base na altura e atualiza os estados de peso mínimo e máximo
        if (peso && altura) {
            const alturaMetros = parseFloat(altura) / 100;
            const pesoMin = (18.5 * alturaMetros * alturaMetros).toFixed(2);
            const pesoMax = (24.9 * alturaMetros * alturaMetros).toFixed(2);
            setPesoMin(pesoMin);
            setPesoMax(pesoMax);
        }
    }

    return (
        <View style={styles.formContainer}> {/* container do formulário */}
            {/* campo de entrada para peso */}
            <TextInput
                style={styles.input}
                placeholder="Peso (kg)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />
            {/* campo de entrada para altura */} 
            <TextInput
                style={styles.input}
                placeholder="Altura (cm)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
            <Button title="Calcular IMC" onPress={calcularIMC} /> {/* botão para calcular o IMC */}
            {imc && <Result imc={imc} />} {/* exibe o resultado do IMC */}
            {classif && <Classification classif={classif} />} {/* exibe a classificação do IMC */}
            {pesoMin && <IdealWeight pesoMin={pesoMin} pesoMax={pesoMax} />} {/* exibe os pesos ideais */}
        </View>
    );
};

const styles = StyleSheet.create({ //estilos do formulário
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

export default FormIMC; //exporta o componente FormIMC