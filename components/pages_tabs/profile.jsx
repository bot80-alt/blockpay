import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation=useNavigation();
  const handleTransfer=()=>{
    navigation.navigate("TRANSFER");
  }
  const handlehomepage = () => {
    navigation.navigate("ENTRY");
  };
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topcontainer}>
        <TouchableOpacity onPress={handlehomepage}>
            <Image source={require('../../assets/images/left-arrow.png')} style={styles.topcontainerimg}/>
            </TouchableOpacity>
            <Text style={styles.topcontainertext}>Profile</Text>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://via.placeholder.com/150' }} // Replace with actual image URL
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.profileName}>Madhanraj M</Text>
          <Text style={styles.verifiedText}>Verified Merchant</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Business Name</Text>
        <Text style={styles.infoText}></Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Username</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>UPI ID</Text>
        <Text style={styles.infoText}></Text>
      </View>
      <View style={styles.cryptoContainer}>
        <Text style={styles.label}>Select Crypto Coin to Pay</Text>
        <View style={styles.cryptoIcons}>
          <Image
            source={{ uri: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png' }} // Replace with actual image URL
            style={styles.cryptoIcon}
          />
          <Image
            source={{ uri: 'https://cryptologos.cc/logos/ethereum-eth-logo.png' }} // Replace with actual image URL
            style={styles.cryptoIcon}
          />
          <Image
            source={{ uri: 'https://cryptologos.cc/logos/solana-sol-logo.png' }} // Replace with actual image URL
            style={styles.cryptoIcon}
          />
          <Image
            source={{ uri: 'https://cryptologos.cc/logos/solana-sol-logo.png' }} // Replace with actual image URL
            style={styles.cryptoIcon}
          />
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handleTransfer}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
      </View>
      
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  topcontainer: {
    height: 125,
    borderWidth:5,
    bordertopColor:'#007AFF',
    borderLeftColor:'#9fd3fc',
    borderBottomColor:'#9fd3fc',
    borderRightColor:'#9fd3fc',
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
},
topcontainerimg:{
    top: 45,
    left: 20,
    width: 30,
    height: 30,
    borderRadius:50,
},
topcontainertext:{
    top: 15,
    left: 175,
    fontSize: 20,
    color: '#fff',
},
  header: {
    marginBottom: 20,
  },
  profileText: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  profileDetails: {
    flexDirection: 'column',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  verifiedText: {
    fontSize: 16,
    color: 'green',
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 10,
    // marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#888',
  },
  infoText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cryptoContainer: {
    marginBottom: 20,
    padding: 10,
  },
  cryptoIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  cryptoIcon: {
    width: 50,
    height: 50,
  },
  payButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    paddingHorizontal: 20,
    alignItems: 'center',
    top: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
