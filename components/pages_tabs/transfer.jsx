import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,handlehomepage,Image } from 'react-native';
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
  const handlehomepage = () => {
    navigation.navigate("ENTRY");
  };

  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
              <TouchableOpacity onPress={handlehomepage}>
                  <Image source={require('../../assets/images/left-arrow.png')} style={styles.topcontainerimg}/>
                  </TouchableOpacity>
                  <Text style={styles.topcontainertext}>Transfer</Text>
            </View>
      {/* <Text style={styles.header}>Transfer</Text> */}
      <View style={styles.middlecontainer}>
      <Text style={styles.recipient}>To: Madhan84 | Coin: BTC</Text>
      <Text style={styles.label}>Enter Amount in INR</Text>
      <TextInput
        style={styles.input}
        value={`₹ ${amountInINR}`}
        editable={false}
      />
      </View>
      <View style={styles.arrowcontainer}>
      <Image source={require('../../assets/images/up-arrow.png')} style={styles.arrow}/>
      <Image source={require('../../assets/images/down-arrow.png')} style={styles.arrow}/>
      </View>
      
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
        <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
        <Text style={styles.payButtonText}>Pay now</Text>
        <Image source={require('../../assets/images/right-arrow.png')} style={styles.payButtonimg}/>
        
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#f5f5f5',
  },
  topcontainer: {
    height: 125,
    borderWidth:5,
    bordertopColor:'#007AFF',
    borderLeftColor:'#9fd3fc',
    borderBottomColor:'#9fd3fc',
    borderRightColor:'#9fd3fc',
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
},
topcontainerimg:{
    top: 45,
    left: 20,
    width: 30,
    height: 30,
    borderRadius:50,
},
topcontainertext:{
  top: 15,
  left: 175,
  fontSize: 20,
  color: '#fff',
},
middlecontainer:{

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
    left: 125,
    fontSize: 20,
    marginVertical: 10,
    color: '#007bff',
    fontweight: 'bold',
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
    width: 100,
    padding: 20,
    margin: 5,
    backgroundColor: '#e0e0e0',
    alignItems: 'center',
    borderRadius: 10,
    
  },
  keyText: {
    fontSize: 24,
    color: '#007bff',
    fontWeight: 'bold',
  },
  payButton: {
    flexDirection: 'row',
    width: '50%',
    backgroundColor: '#007bff',
    padding: 20,
    margin: 5,
    borderRadius: 10,
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,

  },
  payButtonimg:{
    width: 30,
    height: 30,
    left: 70,
    top: 1,
  },
  arrowcontainer:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  arrow:{
    width: 50,
    height: 50,
  },
});

export default TransferScreen;
