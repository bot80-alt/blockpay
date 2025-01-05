import React from 'react';
import { View, Text, TextInput, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const navigation = useNavigation();
    const handletransactionHistory = () => {
        navigation.navigate("TRANSACTION_HISTORY");
      };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pay anyone on crypto"
        />
      </View>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/homepic 1.png')}
          style={[styles.illustration, { width: '80%', height: 200 }]}
        />
      </View>
      <View style={[styles.iconContainer, { backgroundColor: '#FFFFFF', marginHorizontal: -20, paddingVertical: 20 }]}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/images/qr-code.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#1E3A8A'}]}>Scan any Crypto QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/images/contact-book.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#1E3A8A'}]}>Pay Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/images/wallet.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#1E336DFF'}]}>Check Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>People</Text>
        <View style={styles.profileContainer}>
          {Array(6).fill().map((_, index) => (
            <Image
              key={index}
              source={require('../../assets/images/wallet.png')}
              style={styles.profileIcon}
            />
          ))}
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Business</Text>
        <View style={styles.profileContainer}>
          {Array(6).fill().map((_, index) => (
            <Image
              key={index}
              source={require('../../assets/images/wallet.png')}
              style={styles.profileIcon}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>See Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Check Live Crypto Prices</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A8A',
  },
  searchContainer: {
    padding: 10,
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
  },
  buttonContainer: {
    paddingHorizontal: 10,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
