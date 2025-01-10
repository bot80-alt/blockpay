import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useRoute} from '@react-navigation/native';

const QRCodeGenerator = () => {
    const route = useRoute();
    const { businessName,
      email,
      mobileNumber,
      password,
      govtid,
      idnumber,
      walletAddress,
      value} = route.params;
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{businessName}</Text>
      <Text style={styles.username}>Email: {email}</Text>
      <Text style={styles.wallet}>Wallet Address: {walletAddress}</Text>
      <Text style={styles.upi}>UPI ID: {idnumber}</Text>

      <View style={styles.qrCodeContainer}>
        <QRCode
          value={walletAddress}
          size={200}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          
          qrRef.toDataURL((data) => {
            
            const byteString = atob(data.split(',')[1]);
            const mimeString = data.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
              ia[i] = byteString.charCodeAt(i);
            }
            const blob = new Blob([ab], { type: mimeString });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = 'qrcode.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
          });
        }}
      >
        <Text style={styles.buttonText}>Download QR Code</Text>
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
    marginTop: 20,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default QRCodeGenerator;
