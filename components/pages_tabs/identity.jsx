// import React, {useState} from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation, useRoute } from '@react-navigation/native';

// const BlockPayStep2 = ({route}) => {
//   const {businessName, email, mobileNumber, password}=route.params;
//   const navigation = useNavigation();

//   const [govtid, setGovtid] = useState('');
//   const [idnumber, setIdnumber] = useState('');

//   const handleCrypto = () => {
//     navigation.navigate("CRYPTO",{businessName,email,mobileNumber,password,govtid,idnumber});
//   };

//   return (
//     <View style={[styles.container, { marginTop: 40 }]}>
//       <View style={[styles.header, { marginTop: 20 }]}>
//         <Text style={styles.headerText}>BlockPay in 3 Steps - {businessName}</Text>
//         <View style={[styles.steps, { marginTop: 20 }]}>
//           <View style={styles.step}>
//             <Text style={styles.stepNum}>1</Text>
//             <Text style={styles.stepText}>Business Details</Text>
//           </View>
//           <Text style={styles.arrow}>→</Text>
//           <View style={styles.step}>
//             <Text style={styles.stepNumber}>2</Text>
//             <Text style={styles.stepText}>Verify your Identity</Text>
//           </View>
//           <Text style={styles.arrow}>→</Text>
//           <View style={styles.step}>
//             <Text style={styles.stepNum}>3</Text>
//             <Text style={styles.stepText}>Crypto Setup</Text>
//           </View>
//         </View>
//       </View>
//       <Text style={[styles.title, { marginTop: 30 }]}>2. Verify your Identity</Text>
//       <TextInput
//         style={[styles.input, { marginTop: 20 }]}
//         placeholder="Enter your Name as per GOVT ID *"
//         onChangeText={setGovtid}
//         value={govtid}
//         required
//       />
//       <TextInput
//         style={[styles.input, { marginTop: 20 }]}
//         placeholder="Enter your Aadhar/PAN Card Number *"
//         maxLength={12} // Adjust for Aadhar or PAN specifics
//         value={idnumber}
//         onChangeText={setIdnumber}
//         required
//       />
//       <TouchableOpacity 
//         style={[styles.button, {
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
//           if (!govtid || !idnumber) {
//             alert('Please fill all the required fields');
//           } else {
//             handleCrypto();
//           }
//         }}
//       >
//         <Text style={styles.buttonText}>Next</Text>
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
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   headerText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   steps: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   step: {
//     alignItems: 'center',
//   },
//   stepNumber: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#fff',
//     backgroundColor: '#8a2be2',
//     borderRadius: 50,
//     padding: 10,
//     width: 50,
//     textAlign: 'center',
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
//     color: '#333',
//   },
//   arrow: {
//     fontSize: 24,
//     marginHorizontal: 10,
//     color: '#333',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#8a2be2',
//     borderRadius: 5,
//     padding: 15,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default BlockPayStep2;
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const BlockPayStep2 = () => {
  const route = useRoute();
  const { businessName, email, mobileNumber, password } = route.params;
  const navigation = useNavigation();

  const [govtid, setGovtid] = useState('');
  const [idnumber, setIdnumber] = useState('');

  const handleCrypto = () => {
    navigation.navigate('CRYPTO', {
      businessName,
      email,
      mobileNumber,
      password,
      govtid,
      idnumber,
    });
  };

  return (
    <ScrollView style={styles.scrollContainer}>
    <View style={styles.container}>
    <Text style={styles.header}>BlockPay in 3 Steps</Text>
      <View style={styles.stepsContainer}>
                <View style={[styles.step]}>
                  <Text style={styles.stepNumber}>1</Text>
                  <Text style={styles.stepText}>Business Details</Text>
                </View>
                <View style={[styles.step,styles.activeStep]}>
                  <Text style={styles.activeNumber}>2</Text>
                  <Text style={styles.activeText}>Verify Identity</Text>
                </View>
                <View style={styles.step}>
                  <Text style={styles.stepNumber}>3</Text>
                  <Text style={styles.stepText}>Crypto Setup</Text>
                </View>
              </View>
      
      <Text style={styles.subHeader}>2. Verify your Identity</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your Name as per GOVT ID *"
        onChangeText={setGovtid}
        value={govtid}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your Aadhar/PAN Card Number *"
        maxLength={12}
        onChangeText={setIdnumber}
        value={idnumber}
      />

      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (!govtid || !idnumber) {
            alert('Please fill all the required fields');
          } else {
            handleCrypto();
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
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
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
    fontSize: 24,
    marginHorizontal: 10,
    color: '#333',
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
  nextButton: {
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
  nextButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BlockPayStep2;