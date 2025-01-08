import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransferScreen = () => {
  const navigation=useNavigation();
  const [amountInINR, setAmountInINR] = useState('100');
  const [amountInBTC, setAmountInBTC] = useState('0.01');

  const handleNumberPress = (number) => {
    setAmountInINR((prev) => prev + number);
    // Update amountInBTC based on conversion rate
    const conversionRate = 0.0001; // Example conversion rate
    setAmountInBTC((parseFloat(amountInINR + number) * conversionRate).toFixed(2));
  };

  const handlePayNow = () => {
    navigation.navigate("CONFIRMATION");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transfer</Text>
      <Text style={styles.recipient}>To: Madhan84 | Coin: BTC</Text>
      <Text style={styles.label}>Enter Amount in INR</Text>
      <TextInput
        style={styles.input}
        value={`₹ ${amountInINR}`}
        editable={false}
      />
      <Text style={styles.label}>Amount in Crypto</Text>
      <Text style={styles.cryptoAmount}>{amountInBTC} BTC</Text>
      <View style={styles.keypad}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((number) => (
          <TouchableOpacity
            key={number}
            style={styles.key}
            onPress={() => handleNumberPress(number.toString())}
          >
            <Text style={styles.keyText}>{number}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
        <Text style={styles.payButtonText}>Pay now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  recipient: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 14,
    marginVertical: 10,
  },
  input: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  cryptoAmount: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  key: {
    width: '30%',
    padding: 20,
    margin: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 10,
  },
  keyText: {
    fontSize: 24,
  },
  payButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default TransferScreen;
