import SignPageScreen from '@/components/pages_tabs/sign_page';
import Signup from '@/components/pages_tabs/signup';
import Login from '@/components/pages_tabs/login';
import BlockPayStep2 from '@/components/pages_tabs/identity';
import CryptoSetup from '@/components/pages_tabs/cryptosetup';
import Homepage from '@/components/pages_tabs/homepage';
import ProfilePage from '@/components/pages_tabs/profile';
import PaymentPage from '@/components/pages_tabs/qrpage';
import TransactionHistory from '@/components/pages_tabs/transaction_history';
import TransferScreen from '@/components/pages_tabs/transfer';
import TransactionScreen from '@/components/pages_tabs/confirmation';
import QrPage from '@/components/pages_tabs/qrpage';

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';
import {Link} from 'expo-router';


const Stack = createNativeStackNavigator();

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name={"HOME"} component={SignPageScreen} options={{headerShown:false}}/>
        <Stack.Screen name={"SIGNUP"} component={Signup} />
        <Stack.Screen name={"LOGIN"} component={Login}/>
        <Stack.Screen name={"IDENTITY"} component={BlockPayStep2}/>
        <Stack.Screen name={"CRYPTO"} component={CryptoSetup}/>
        <Stack.Screen name={"ENTRY"} component={Homepage}/>
        <Stack.Screen name={"PROFILE"} component={PaymentPage}/>
        <Stack.Screen name={"TRANSACTION"} component={TransactionHistory}/>
        <Stack.Screen name={"QR"} component={QrPage}/>

      </Stack.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
  }
});

