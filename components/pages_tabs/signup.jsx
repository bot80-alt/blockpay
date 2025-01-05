import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors]=useState({});

  const handleIdentity=()=>{
    navigation.navigate("IDENTITY");
  }

  /*const validateForm=()=>{
    if(!businessName) errors.businessName="Business Name is required";
    if(!email) errors.email="Email is required";
    if(!mobileNumber) errors.mobileNumber="Mobile Number is required";
    if(!password) errors.password="Password is required";

    setErrors(errors);

    return Object.keys(errors).length===0;
  }*/

  return (
    <View style={styles.container}>
      <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>Business Details</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNum}>2</Text>
          <Text style={styles.stepText}>Verify your Identity</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNum}>3</Text>
          <Text style={styles.stepText}>Crypto Setup</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>1. Business Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />
      {
        errors.businessName?<Text style={styles.errorText}>{errors.businessName}</Text>:null
      }
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
      />
      {
        errors.email?<Text style={styles.errorText}>{errors.email}</Text>:null
      }
      <TextInput
        style={styles.input}
        placeholder="Enter your Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      {
        errors.mobileNumber?<Text style={styles.errorText}>{errors.mobileNumber}</Text>:null
      }
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        {
        errors.password?<Text style={styles.errorText}>{errors.password}</Text>:null
        }
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPassword}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.nextButton}
        onPress={handleIdentity}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
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
    backgroundColor: '#6200EE',
    borderRadius: 50,
    width: 40,
    height: 40,
    textAlign: 'center',
    lineHeight: 40,
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
    color: '#000',
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
    marginBottom: 10,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  showPassword: {
    marginLeft: 10,
    color: '#6200EE',
  },
  nextButton: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText:{
    color:"red",
    marginBottom:10,
  }
});


export default Signup;