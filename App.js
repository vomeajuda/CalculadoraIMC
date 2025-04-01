import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title';
import FormIMC from './src/components/FormIMC';

export default function App() { //função que inicia o app
  return (
    <View style={styles.container}>
      <Title /> {/* titulo do app */}
      <FormIMC /> {/* formulario do app */}
    </View>
  );
}

const styles = StyleSheet.create({ //estilo do app
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'black',
  },
});