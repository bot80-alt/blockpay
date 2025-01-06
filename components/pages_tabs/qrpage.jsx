import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/profile-pic.jpg' }} // Replace with actual profile picture URL
          style={styles.profilePic}
        />
        <Text style={styles.name}>Madhanraj M</Text>
      </View>
      <Text style={styles.info}>Username: {generateUsername('Madhanraj')}</Text>
      <Text style={styles.info}>Wallet Address: XXXXXXX</Text>
      <Text style={styles.info}>UPI ID: {generateUpiId(walletAddress)}</Text>
      
      <View style={styles.qrContainer}>
        <Text style={styles.scanText}>Scan to pay with blockpay</Text>
        <QRCode
          value={walletAddress}
          size={200}
          backgroundColor="white"
          color="black"
        />
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.buttonText}>Download QR Code</Text>
      </TouchableOpacity>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Open Scanner</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Share QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 16,
    marginVertical: 5,
  },
  scanText: {
    marginVertical: 20,
    fontSize: 16,
  },
  downloadButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  bottomButton: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  bottomButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default PaymentPage;
