import SignPageScreen from '@/components/pages_tabs/sign_page';
import SignPage from '@/components/pages_tabs/sign_page';
import Signup from '@/components/pages_tabs/signup';
import { Stack } from 'expo-router';

import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ScrollView, SafeAreaView } from 'react-native';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <SignPageScreen />
      </ScrollView>
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