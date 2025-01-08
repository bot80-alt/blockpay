import React,{useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const CryptoSetup = ({route}) => {
  const {businessName,email,mobileNumber,password,govtid,idnumber}=route.params;

  const navigation = useNavigation();
  const handleEntry = () => {
      navigation.navigate("ENTRY");
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Avax', value: 'Avax'},
    {label: 'USDT', value: 'USDT'},
    {label: 'LINK', value: 'LINK'},
    {label:'TUSD', value:'TUSD'},
    {label:'BCUT', value:'BCUT'}
  ]);
  return (
    <View style={[styles.container, { marginTop: 40 }]}>
      <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Business Details</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepText}>Verify your Identity</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNum}>3</Text>
          <Text style={styles.stepText}>Crypto Setup</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>3. Crypto Setup</Text>
      <Text>Enter your Crypto Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your crypto wallet address"
        placeholderTextColor="#999"
        editable={true}
        onChangeText={(text) => {}}
      />
      <Text>Add your Preferred Crypto Coins</Text>
      <DropDownPicker
      placeholder="Select your Crypto Coins"
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      onChangeItem={(item) => {
        if (!items.some(i => i.value === item.value)) {
          setItems([...items, item]);
        }
      }}
    />
      <Text>Added Crypto Coins</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Want to Pick Top Coins ? <Text onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')} style={styles.headlink}>Know More →</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.finishButton} onPress={handleEntry}>
        <Text style={styles.finishButtonText}>Finish Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  step: {
    alignItems: 'center',
  },
  stepNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#6C63FF',
    borderRadius: 50,
    padding: 10,
    width:50,
    textAlign: 'center',
    marginBottom: 5,
  },
  stepNum: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#8a2be2',
    borderRadius: 50,
    padding: 10,
    width: 50,
    textAlign: 'center',
  },
  stepText: {
    fontSize: 12,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cryptoIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  cryptoIcon: {
    width: 40,
    height: 40,
  },
  link: {
    color: '#6C63FF',
    textAlign: 'center',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#6C63FF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
  },
  finishButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headlink:{
    color:"blue",
    fontWeight:700,
  }
});

export default CryptoSetup;
