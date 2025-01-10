import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Signup = () => {
  const navigation = useNavigation();
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleIdentity = () => {
    navigation.navigate("IDENTITY", { businessName, email, mobileNumber, password});
  };
  const handleLogin=()=>{
    navigation.navigate("LOGIN");
  }

  return (
    <View style={styles.scrollContainer}>
    <View style={styles.container}>
      <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
        <View style={[styles.step,styles.activeStep]}>
          <Text style={styles.activeNumber}>1</Text>
          <Text style={styles.activeText}>Business Details</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>2</Text>
          <Text style={styles.stepText}>Verify your Identity</Text>
        </View>
        <Text style={styles.arrow}>→</Text>
        <View style={styles.step}>
          <Text style={styles.stepNumber}>3</Text>
          <Text style={styles.stepText}>Crypto Setup</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>1. Business Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Business Name *"
        value={businessName}
        onChangeText={setBusinessName}
      />
      {errors.businessName && <Text style={styles.errorText}>{errors.businessName}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Enter your Mobile Number"
        keyboardType="numeric"
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />
      {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.showPassword}>{showPassword ? 'Hide' : 'Show'}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.signupText}>Login</Text>
        </TouchableOpacity>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (!businessName || !email || !mobileNumber || !password) {
            alert('Please fill all the required fields');
          } else {
            handleIdentity();
          }
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
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
    marginTop:20,
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  stepText: {
    fontSize: 12,
    color: '#007AFF',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 5,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },
  showPassword: {
    marginLeft: 10,
    color: '#007AFF',
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 10,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  footerContainer: {
    textAlign:'center',
    flexDirection: 'row',
    justifyContent:'center',
    marginTop: 20,
    marginLeft:10,
  },
  footerText: {
    color: '#555',
    fontSize: 14,
    paddingLeft:10,
  },
  signupText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 800,
  },
});

export default Signup;

