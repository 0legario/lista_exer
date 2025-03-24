import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from
  'react-native';


export default function App() { 
  const [a, setA] = useState('');
  const [resultado, setResultado] = useState('');

  const area = () => {
    const ab = Math.PI * parseFloat(a)**2;
    setResultado(`A área desse círculo é ${ab.toFixed(2)}m`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcula Área do Círculo</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a medida do raio (m)"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={area}>
          <Text style={styles.buttonText}>Calcular</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>{resultado}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#171717',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ededed',
    marginBottom: 20,
  },
  input: {
    width: '30%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: '80%',
  },
  button: {
    backgroundColor: '#4287f5',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ededed',
  },
});

