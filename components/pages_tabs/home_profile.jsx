import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { useRoute, useNavigation } from '@react-navigation/native';
import { captureRef } from 'react-native-view-shot';
import Share from 'react-native-share';

const QRCodeGenerator = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const qrCodeRef = useRef(); // Ref for the QR Code

  const {
    businessName,
    email,
    upiID = businessName.concat(Math.random().toString(12).slice(10)),
    walletAddress,
  } = route.params;

  const handleShareQRCode = async () => {
    try {
      const uri = await captureRef(qrCodeRef.current, {
        format: 'png',
        quality: 1.0,
      });

      await Share.open({
        title: 'Share QR Code',
        message: 'Here is your QR Code',
        url: uri,
      });
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to share QR Code');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>BusinessName : {businessName}</Text>
      <Text style={styles.username}>Email : {email}</Text>
      <Text style={styles.wallet}>Wallet Address : {walletAddress}</Text>
      <Text style={styles.upi}>UPI ID : {upiID}</Text>

      <View style={styles.qrCodeContainer} ref={qrCodeRef}>
        <QRCode value={walletAddress} size={200} />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleShareQRCode}>
        <Text style={styles.buttonText}>Share QR Code</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    marginTop: 10,
    fontSize: 18,
  },
  wallet: {
    marginTop: 5,
    fontSize: 16,
  },
  upi: {
    marginTop: 5,
    fontSize: 16,
  },
  qrCodeContainer: {
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginTop: 100,
  },
  buttonText: {
    color: 'white',
  },
});

export default QRCodeGenerator;
