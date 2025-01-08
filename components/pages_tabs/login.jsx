import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEntry = () => {
    navigation.navigate("ENTRY");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subHeader}>Login into Blockpay Account</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email Address"
        value={email}
        onChangeText={setEmail}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
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
          if (!email || !password) {
            alert('Please fill all the required fields');
          } else {
            handleEntry();
          }
        }}
      >
        <Text style={styles.nextButtonText}>Login →</Text>
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
});

export default Login;
