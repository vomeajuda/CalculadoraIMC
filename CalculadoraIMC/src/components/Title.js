import { Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Title = () => {
    return (
        <Text style={styles.title}>Calculadora de IMC</Text>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 24,
        color: '#FFFFFF',
    },
});

export default Title;