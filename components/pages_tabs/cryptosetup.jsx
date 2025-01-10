import React,{useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Linking,ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
// import { ScrollView } from 'react-native-gesture-handler';

const CryptoSetup = () => {
  const route=useRoute();
  const {businessName,email,mobileNumber,password,govtid,idnumber}=route.params;

  const navigation = useNavigation();
  const handleEntry = () => {
      navigation.navigate("ENTRY",{
        businessName,
        email,
        mobileNumber,
        password,
        govtid,
        idnumber,
        walletAddress,
        value,
      });
  };
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [walletAddress,setWalletAddress]=useState('');
  const [items, setItems] = useState([
    {label: 'Avax', value: 'Avax'},
    {label: 'USDT', value: 'USDT'},
    {label: 'LINK', value: 'LINK'},
    {label:'TUSD', value:'TUSD'},
    {label:'BCUT', value:'BCUT'}
  ]);
  return (
    <View style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Business Details</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepText}>Verify your Identity</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
        <View style={[styles.step,styles.activeStep]}>
          <Text style={styles.activeNumber}>3</Text>
          <Text style={styles.activeText}>Crypto Setup</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>3. Crypto Setup</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your crypto wallet address"
        placeholderTextColor="#999"
        editable={true}
        onChangeText={setWalletAddress}
      />
      <DropDownPicker
      placeholder="Select your Crypto Coins"
      open={open}
      style={styles.input}
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
      <TouchableOpacity style={styles.finishButton} onPress={() => {
            if (!walletAddress || !value
            ) {
              alert('Please fill in all required fields.');
            } else {
              handleEntry();
            }
          }}>
        <Text style={styles.finishButtonText}>Finish Now</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
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
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    backgroundColor: '#f0f0f0',
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
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  stepText: {
    fontSize: 12,
    color: '#007AFF',
  },
  activeStep: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  activeNumber: {
    color: '#fff',
  },
  activeText: {
    color:'#fff',
  },
  arrow: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
    top: 15
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
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
    color: '#007AFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  finishButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  finishButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  headlink:{
    color:'007AFF',
    fontWeight:700,
  }
});

export default CryptoSetup;
