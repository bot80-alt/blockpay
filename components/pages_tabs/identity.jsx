import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BlockPayStep2 = () => {
  const navigation=useNavigation();
  const handleCrypto=()=>{
    navigation.navigate("CRYPTO");
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BlockPay in 3 Steps</Text>
        <View style={styles.steps}>
          <View style={styles.step}>
            <Text style={styles.stepNum}>1</Text>
            <Text style={styles.stepText}>Business Details</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Verify your Identity</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.step}>
            <Text style={styles.stepNum}>3</Text>
            <Text style={styles.stepText}>Crypto Setup</Text>
          </View>
        </View>
      </View>
      <Text style={styles.title}>2. Verify your Identity</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Name as per GOVT ID"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Aadhar/PAN Card Number"
      />
      <TouchableOpacity style={styles.button} onPress={handleCrypto}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  steps: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8a2be2',
    borderRadius: 50,
    padding: 10,
    width: 50,
    textAlign: 'center',
  },
  stepNum: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#59AFFFFF',
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
  },
  stepText: {
    marginTop: 5,
    fontSize: 12,
    color: '#333',
  },
  arrow: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#333',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#8a2be2',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BlockPayStep2;