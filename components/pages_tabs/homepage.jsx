import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TextInput
          style={styles.searchBar}
          placeholder="Pay anyone on crypto"
        />
        <Image
          style={styles.profileIcon}
          source={require('../../assets/images/homepic 1.png')}
        />
      </View>
      <View style={styles.mainActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Scan any Crypto QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Pay Contacts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>Check Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>People</Text>
        <View style={styles.contacts}>
          {Array(6).fill().map((_, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={styles.contactIcon}
                source={{ uri: 'https://example.com/contact-icon.png' }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Business</Text>
        <View style={styles.contacts}>
          {Array(6).fill().map((_, index) => (
            <TouchableOpacity key={index}>
              <Image
                style={styles.contactIcon}
                source={{ uri: 'https://example.com/contact-icon.png' }}
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Text>See Transaction History</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Text>Check Live Crypto Prices</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 8,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: 8,
  },
  mainActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  actionButton: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  section: {
    padding: 16,
  },
  sectionTitle: {
    color: '#FFF',
    fontSize: 18,
    marginBottom: 8,
  },
  contacts: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  contactIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    margin: 8,
  },
  footer: {
    padding: 16,
  },
  footerButton: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 8,
  },
});

export default App;
