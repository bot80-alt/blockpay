import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserSignup = () => {
  const navigation = useNavigation();
  const [userName, setUserName]=useState('');
  const [email, setEmail] = useState('');
  const [userMobile,setUserMobile]=useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleIdentity = () => {
    navigation.navigate("IDENTITY", { businessName, email, mobileNumber, password});
  };

  return (
    <View style={[styles.container, { alignItems: 'center', justifyContent: 'flex-start', marginTop: 40 }]}>
      <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
        <View style={[styles.step, {marginRight: 20}]}>
          <Text style={styles.stepNumber}>1</Text>
          <Text style={styles.stepText}>User Details</Text>
        </View>
        <View style={[styles.step, {marginRight: 20}]}>
          <Text style={styles.stepNum}>2</Text>
          <Text style={styles.stepText}>Verify your Identity</Text>
        </View>
        <View style={styles.step}>
          <Text style={styles.stepNum}>3</Text>
          <Text style={styles.stepText}>Crypto Setup</Text>
        </View>
      </View>
      <Text style={styles.subHeader}>1. User Details</Text>
      <TextInput
        style={[styles.input, { width: '100%' }]}
        placeholder="Enter your Username"
        value={userName}
        onChangeText={setUserName}
      />
      {errors.businessName && <Text style={styles.errorText}>{errors.businessName}</Text>}
      <TextInput
        style={[styles.input, { width: '100%' }]}
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
      />
      {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      <TextInput
        style={[styles.input, { width: '100%' }]}
        placeholder="Enter your Mobile Number"
        keyboardType="numeric"
        value={userMobile}
        onChangeText={setUserMobile}
      />
      {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
      <View style={[styles.passwordContainer, { width: '80%' }]}>
        <TextInput
          style={[styles.input, { width: '100%' }]}
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
      <TouchableOpacity
        style={[styles.nextButton, {
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 25,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5
        }]}
        onPress={() => {
          if (!userName || !email || !userMobile || !password) {
            alert('Please fill all the required fields');
          } else {
            handleIdentity();
          }
        }}
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:20,
    padding:20,
    backgroundColor: '#fff',
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
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default UserSignup;