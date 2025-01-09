// import React from 'react';
// import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const App = () => {
//   const navigation = useNavigation();
//   const handleTransaction = () => {
//       navigation.navigate("TRANSACTION");
//   };
//   const handleProfile=()=>{
//     navigation.navigate("PROFILE");
//   };
//   const handleQr=()=>{
//     navigation.navigate("QR");
//   };
//   const handleBalance=()=>{
//     navigation.navigate("BALANCE");
//   };
//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.topcontainer}>
//         <View style={styles.searchContainer}>
//           <TextInput
//             style={styles.searchInput}
//             placeholder="Pay anyone on crypto"
//           />
//           <TouchableOpacity onPress={handleProfile}>
//           <Image source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')} style={styles.TopProfile}/>
//           </TouchableOpacity>
//         </View>
//         <View style={styles.illustrationContainer}>
//           <Image
//             source={require('../../assets/images/homepic 1.png')}
//             style={[styles.illustration, { width: '80%', height: 200 }]}
//           />
//         </View>
//       </View>
//       <View style={[styles.iconContainer, { backgroundColor: '#FFFFFF', marginHorizontal: -20, paddingVertical: 20 }]}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Image source={require('../../assets/images/qr-code.png')} style={styles.icon} />
//           <Text style={[styles.iconText, {color: '#007AFF'}]}>Scan any Crypto QR code</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.walleticonButton}  onPress={handleBalance}>
//           <Image source={require('../../assets/images/wallet.png')} style={styles.icon}/>
//           <Text style={[styles.iconText, {color: '#007AFF'}]}>Check Balance</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={styles.BottomCountainer}>
      
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>People</Text>
//         <View style={styles.profileContainer}>
//           {Array(4).fill().map((_, index) => (
//             <Image
//               key={index}
//               source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
//               style={styles.profileIcon}
//             />
//           ))}
//         </View>
//       </View>
//       <View style={styles.sectionContainer}>
//         <Text style={styles.sectionTitle}>Business</Text>
//         <View style={styles.profileContainer}>
//           {Array(8).fill().map((_, index) => (
//             <Image
//               key={index}
//               source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
//               style={styles.profileIcon}
//             />
//           ))}
//         </View>
//       </View>
//       <Text style={styles.manage}>Manage Your Money</Text>
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleTransaction}>
//         <Image source={require('../../assets/images/history.png')} style={styles.historybutton}/>
//           <Text style={styles.historybuttonText}>See Transaction History</Text>
//           <Image source={require('../../assets/images/right-arrow.png')} style={styles.historybutton}/>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')}>
//         <Image source={require('../../assets/images/location.png')} style={styles.cryptobutton}/>
//           <Text style={styles.cryptobuttonText}>Check Live Crypto Prices</Text>
//           <Image source={require('../../assets/images/right-arrow.png')} style={styles.cryptobutton}/>
//         </TouchableOpacity>
//         </View>
      
//       </View>
      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   TopProfile:{
//     width: 40,
//     height: 40,
//     borderRadius:50,
//   },
//   topcontainer: {
//     paddingTop: 25,
//     backgroundColor: '#007AFF',
//     borderBottomLeftRadius: 45,
//     borderBottomRightRadius: 45,
//   },
//   BottomCountainer:{
//     backgroundColor: '#007AFF',
//     borderTopLeftRadius: 45,
//     borderTopRightRadius: 45,
//   },

//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     alignSelf: 'center',
//     gap: 10,
//   },
//   searchInput: {
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     width: '80%',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//   },
//   illustrationContainer: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   illustration: {
//     width: 200,
//     height: 200,
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   iconButton: {
//     alignItems: 'center',
//   },
//   icon: {
//     width: 50,
//     height: 50,
//   },
//   iconText: {
//     color: '#fff',
//     marginTop: 10,
//     textAlign: 'center',
//   },
//   sectionContainer: {
//     marginVertical: 20,
//     paddingHorizontal: 10,
//   },
//   sectionTitle: {
//     paddingLeft: 10,
//     color: '#fff',
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   profileContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//   },
//   profileIcon: {
//     width: 50,
//     height: 50,
//     margin: 10,
//     borderRadius:50,
//   },
//   buttonContainer: {
//     paddingHorizontal: 10,
//     marginVertical: 20,
//   },
//   manage: {
//     fontSize: 18,
//     color: '#fff',
//     paddingLeft: 10,
//   },
//   button: {
//     flexDirection: 'row',
//     // justifyContent:'space-evenly',
//     gap: 90,
//     backgroundColor: '#fff',
//     borderRadius: 25,
//     paddingVertical: 15,
//     alignItems: 'center',
//     marginVertical: 10,
//   },
//   historybuttonText: {
//     color: '#007AFF',
//   },
//   historybutton:{
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//     alignItems:'left',
//     // paddingRight: 10,
//   },
//   cryptobutton:{
//     color: '#007AFF',
//     width: 20,
//     height: 20,
//     marginLeft: 10,
//     alignItems:'left',
//     fontSize: 16,

//   },
//   cryptobuttonText: {
//     color: '#007AFF',
//   },
// });

// export default App;
import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
  const handleTransaction = () => navigation.navigate("TRANSACTION");
  const handleProfile = () => navigation.navigate("PROFILE");
  const handleQr = () => navigation.navigate("QR");
  const handleBalance = () => navigation.navigate("BALANCE");

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Top Section with Search and Profile */}
      <View style={styles.topContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pay anyone on crypto"
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={handleProfile}>
            <Image
              source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/homepic 1.png')}
            style={styles.illustration}
          />
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleQr}>
          <Image source={require('../../assets/images/qr-code.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Scan Crypto QR Code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleBalance}>
          <Image source={require('../../assets/images/wallet.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Check Balance</Text>
        </TouchableOpacity>
      </View>

      {/* People and Business Sections */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>People</Text>
        <View style={styles.profileIconsContainer}>
          {Array(4)
            .fill()
            .map((_, index) => (
              <Image
                key={index}
                source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
                style={styles.profileIcon}
              />
            ))}
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Business</Text>
        <View style={styles.profileIconsContainer}>
          {Array(8)
            .fill()
            .map((_, index) => (
              <Image
                key={index}
                source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
                style={styles.profileIcon}
              />
            ))}
        </View>
      </View>

      {/* Manage Your Money Section */}
      <View style={styles.manageMoneyContainer}>
        <Text style={styles.manageMoneyTitle}>Manage Your Money</Text>
        <TouchableOpacity style={styles.manageButton} onPress={handleTransaction}>
          <Image source={require('../../assets/images/history.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>See Transaction History</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')}
        >
          <Image source={require('../../assets/images/location.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Check Live Crypto Prices</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  illustration: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    width: '45%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  profileIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  manageMoneyContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  manageMoneyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  buttonText: {
    flex: 1,
    marginHorizontal: 10,
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
