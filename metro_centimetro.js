import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from
  'react-native';


export default function App() { 
  const [a, setA] = useState('');
  const [resultado, setResultado] = useState('');

  const conversao = () => {
    const ab = parseFloat(a)*100;
    setResultado(`${parseFloat(a)}m são ${ab}cm`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calcula Metros para Centímetros</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a medida em metros"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={conversao}>
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

