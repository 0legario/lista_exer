import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from
  'react-native';


export default function App() { 
  const [a, setA] = useState('');
  const [resultado, setResultado] = useState('');

  const cTof = () => {
    const ab = (parseFloat(a) * 1.8) + 32;
    setResultado(`${parseFloat(a)}°F são ${ab.toFixed(2)}°C`);
  };
  const fToc = () => {
    const ab = (parseFloat(a) -32) / 1.8;
    setResultado(`${parseFloat(a)}°C são ${ab.toFixed(2)}°F`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Converte Temperatura</Text>
      <TextInput
        style={styles.input}  
        placeholder="Digite a temperatura"
        keyboardType="numeric"
        value={a}
        onChangeText={(text) => setA(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={fToc}>
          <Text style={styles.buttonText}>Converter para Celcius</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={cTof}>
          <Text style={styles.buttonText}>Calcular para Fahrenheit</Text>
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

