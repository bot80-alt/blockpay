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
  };
  const handleQr=()=>{
    navigation.navigate("QR");
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.topcontainer}>
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
      </View>
      <View style={[styles.iconContainer, { backgroundColor: '#FFFFFF', marginHorizontal: -20, paddingVertical: 20 }]}>
        <TouchableOpacity style={styles.iconButton}>
          <Image source={require('../../assets/images/qr-code.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#4159fa'}]}>Scan any Crypto QR code</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.bookiconButton}>
          <Image source={require('../../assets/images/contact-book.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#4159fa'}]}>Pay Contacts</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.walleticonButton}>
          <Image source={require('../../assets/images/wallet.png')} style={styles.icon} />
          <Text style={[styles.iconText, {color: '#4159fa'}]}>Check Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.BottomCountainer}>
      
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
        <Image source={require('../../assets/images/history.png')} style={styles.historybutton}/>
          <Text style={styles.historybuttonText}>See Transaction History</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.historybutton}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')}>
        <Image source={require('../../assets/images/location.png')} style={styles.cryptobutton}/>
          <Text style={styles.cryptobuttonText}>Check Live Crypto Prices</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.cryptobutton}/>
        </TouchableOpacity>
        </View>
      
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  TopProfile:{
    width: 40,
    height: 40,
    borderRadius:50,
  },
  topcontainer: {
    paddingTop: 25,
    backgroundColor: '#4159fa',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  BottomCountainer:{
    backgroundColor: '#4159fa',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    gap: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    width: '80%',
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
    flexDirection: 'row',
    // justifyContent:'space-evenly',
    gap: 90,
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 10,
  },
  historybuttonText: {
    color: '#4159fa',
  },
  historybutton:{
    width: 20,
    height: 20,
    marginLeft: 10,
    alignItems:'left',
    // paddingRight: 10,
  },
  cryptobutton:{
    color: '#4159fa',
    width: 20,
    height: 20,
    marginLeft: 10,
    alignItems:'left',
    fontSize: 16,

  },
  cryptobuttonText: {
    color: '#4159fa',
  },
});

export default App;
