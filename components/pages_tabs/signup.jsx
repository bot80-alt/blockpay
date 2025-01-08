// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const Signup = () => {
//   const navigation = useNavigation();
//   const [businessName, setBusinessName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const handleIdentity = () => {
//     navigation.navigate("IDENTITY", { businessName, email, mobileNumber, password});
//   };

//   return (
//     <View style={[styles.container, { alignItems: 'center', justifyContent: 'flex-start', marginTop: 40 }]}>
//       <Text style={styles.header}>BlockPay in 3 Steps</Text>
//       <View style={styles.stepsContainer}>
//         <View style={[styles.step, {marginRight: 20}]}>
//           <Text style={styles.stepNumber}>1</Text>
//           <Text style={styles.stepText}>Business Details</Text>
//         </View>
//         <View style={[styles.step, {marginRight: 20}]}>
//           <Text style={styles.stepNum}>2</Text>
//           <Text style={styles.stepText}>Verify your Identity</Text>
//         </View>
//         <View style={styles.step}>
//           <Text style={styles.stepNum}>3</Text>
//           <Text style={styles.stepText}>Crypto Setup</Text>
//         </View>
//       </View>
//       <Text style={styles.subHeader}>1. Business Details</Text>
//       <TextInput
//         style={[styles.input, { width: '100%' }]}
//         placeholder="Enter your Business Name *"
//         value={businessName}
//         onChangeText={setBusinessName}
//       />
//       {errors.businessName && <Text style={styles.errorText}>{errors.businessName}</Text>}
//       <TextInput
//         style={[styles.input, { width: '100%' }]}
//         placeholder="Enter your Email Address"
//         value={email}
//         onChangeText={setEmail}
//       />
//       {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
//       <TextInput
//         style={[styles.input, { width: '100%' }]}
//         placeholder="Enter your Mobile Number"
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />
//       {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}
//       <View style={[styles.passwordContainer, { width: '80%' }]}>
//         <TextInput
//           style={[styles.input, { width: '100%' }]}
//           placeholder="Enter your Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry={!showPassword}
//         />
//         {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
//         <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
//           <Text style={styles.showPassword}>{showPassword ? 'Hide' : 'Show'}</Text>
//         </TouchableOpacity>
//       </View>
//       <TouchableOpacity
//         style={[styles.nextButton, {
//           position: 'absolute',
//           bottom: 20,
//           left: 20,
//           right: 20,
//           borderRadius: 25,
//           shadowColor: '#000',
//           shadowOffset: {
//             width: 0,
//             height: 2,
//           },
//           shadowOpacity: 0.25,
//           shadowRadius: 3.84,
//           elevation: 5
//         }]}
//         onPress={() => {
//           if (!businessName || !email || !mobileNumber || !password) {
//             alert('Please fill all the required fields');
//           } else {
//             handleIdentity();
//           }
//         }}
//       >
//         <Text style={styles.nextButtonText}>Next</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#fff',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   stepsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   step: {
//     alignItems: 'center',
//   },
//   stepNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#6200EE',
//     borderRadius: 50,
//     width: 40,
//     height: 40,
//     textAlign: 'center',
//     lineHeight: 40,
//   },
//   stepNum: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#59AFFFFF',
//     borderRadius: 50,
//     width: 40,
//     height: 40,
//     textAlign: 'center',
//     lineHeight: 40,
//   },
//   stepText: {
//     marginTop: 5,
//     fontSize: 12,
//     color: '#000',
//   },
//   subHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//   },
//   passwordContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   showPassword: {
//     marginLeft: 10,
//     color: '#6200EE',
//   },
//   nextButton: {
//     backgroundColor: '#6200EE',
//     borderRadius: 5,
//     padding: 15,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   nextButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   errorText: {
//     color: 'red',
//     marginBottom: 10,
//   },
// });

// export default Signup;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
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
    navigation.navigate("IDENTITY", { businessName, email, mobileNumber, password });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.header}>BlockPay in 3 Easy Steps</Text>

        <View style={styles.stepsContainer}>
          <View style={[styles.step, styles.activeStep]}>
            <Text style={styles.activeNumber}>1</Text>
            <Text style={styles.activeText}>Business Details</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>2</Text>
            <Text style={styles.stepText}>Verify Identity</Text>
          </View>
          <Text style={styles.arrow}>→</Text>
          <View style={styles.step}>
            <Text style={styles.stepNumber}>3</Text>
            <Text style={styles.stepText}>Crypto Setup</Text>
          </View>
        </View>

        <Text style={styles.subHeader}>Step 1: Business Details</Text>

        <TextInput
          style={styles.input}
          placeholder="Business Name *"
          value={businessName}
          onChangeText={setBusinessName}
        />
        {errors.businessName && <Text style={styles.errorText}>{errors.businessName}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Email Address *"
          value={email}
          onChangeText={setEmail}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Mobile Number *"
          value={mobileNumber}
          onChangeText={setMobileNumber}
        />
        {errors.mobileNumber && <Text style={styles.errorText}>{errors.mobileNumber}</Text>}

        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.Passwordinput}
            placeholder="Password *"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.showPassword}>{showPassword ? 'Hide' : 'Show'}</Text>
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => {
            if (!businessName || !email || !mobileNumber || !password) {
              alert('Please fill in all required fields.');
            } else {
              handleIdentity();
            }
          }}
        >
          <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#f9f9f9',
    // paddingVertical: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    // marginHorizontal: 15,
    // paddingVertical: 30,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  activeNumber: {
    color: '#fff',
  },
  activeText: {
    color:'#fff',
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
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  stepText: {
    fontSize: 12,
    color: '#007AFF',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
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
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  Passwordinput: {
    flex: 1,
    paddingVertical: 10,
    height: 40,
  },
  showPassword: {
    top: 12,
    right: 10,
    color: '#007AFF',
    fontSize: 14,
  },
  nextButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 5,
  },
});

export default Signup;
