import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
    const handleTransaction = () => {
        navigation.navigate("TRANSACTION");
    };
  const handleProfile=()=>{
    navigation.navigate("PROFILE");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pay anyone on crypto"
        />
        <Image source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')} style={styles.TopProfile}/>
      </View>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/homepic 1.png')}
          style={[styles.illustration, { width: '80%', height: 200 }]}
        />
      </View>
      <View style={[styles.iconContainer, { backgroundColor: '#FFFFFF', marginHorizontal: -20, paddingVertical: 20 }]}>
        <TouchableOpacity style={styles.QRiconButton}>
          <Image source={require('../../assets/images/qr-code.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#4159fa'}]}>Scan any Crypto QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookiconButton}>
          <Image source={require('../../assets/images/contact-book.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#4159fa'}]}>Pay Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.walleticonButton}>
          <Image source={require('../../assets/images/wallet.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#1E336DFF'}]}>Check Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>People</Text>
        <View style={styles.profileContainer}>
          {Array(4).fill().map((_, index) => (
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
        <View style={styles.profileContainer}>
          {Array(8).fill().map((_, index) => (
            <Image
              key={index}
              source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
              style={styles.profileIcon}
            />
          ))}
        </View>
      </View>
      <Text style={styles.manage}>Manage Your Money</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleTransaction}>
          <Text style={styles.buttonText}>See Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')}>
          <Text style={styles.buttonText}>Check Live Crypto Prices</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4159fa',
  },
  TopProfile:{
    width: 40,
    height: 40,

    borderRadius:50,
  },
  searchContainer: {
    padding: 10,
    width: '60%',
    // alignSelf: 'center',
    flexDirection: 'row',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  illustration: {
    width: 200,
    height: 200,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  iconButton: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconText: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  sectionTitle: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  profileIcon: {
    width: 50,
    height: 50,
    margin: 10,
    borderRadius:50,
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  manage: {
    fontSize: 18,
    color: '#fff',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#4159fa',
    fontSize: 16,
  },
});

export default App;
