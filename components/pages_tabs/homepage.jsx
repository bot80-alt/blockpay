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
  const handleBalance=()=>{
    navigation.navigate("BALANCE");
  };
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.topContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Pay anyone on crypto"
            placeholderTextColor="#999"
          />
          <TouchableOpacity onPress={handleProfile}>
            <Image
              source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        {/* Illustration */}
        <View style={styles.illustrationContainer}>
          <Image
            source={require('../../assets/images/homepic 1.png')}
            style={styles.illustration}
          />
        </View>
      </View>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleQr}>
          <Image source={require('../../assets/images/qr-code.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Scan any Crypto QR code</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleBalance}>
          <Image source={require('../../assets/images/wallet.png')} style={styles.actionIcon} />
          <Text style={styles.actionText}>Check Balance</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>People</Text>
        <View style={styles.profileIconsContainer}>
          {Array(4)
            .fill()
            .map((_, index) => (
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
        <View style={styles.profileIconsContainer}>
          {Array(8)
            .fill()
            .map((_, index) => (
              <Image
                key={index}
                source={require('../../assets/images/facebook-profile-picture-affects-chances-of-gettin_fr3n.1200.webp')}
                style={styles.profileIcon}
              />
            ))}
        </View>
      </View>

      {/* Manage Your Money Section */}
      <View style={styles.manageMoneyContainer}>
        <Text style={styles.manageMoneyTitle}>Manage Your Money</Text>
        <TouchableOpacity style={styles.manageButton} onPress={handleTransaction}>
          <Image source={require('../../assets/images/history.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>See Transaction History</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.manageButton}
          onPress={() => Linking.openURL('https://coinmarketcap.com/trending-cryptocurrencies/')}
        >
          <Image source={require('../../assets/images/location.png')} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Check Live Crypto Prices</Text>
          <Image source={require('../../assets/images/right-arrow.png')} style={styles.buttonIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    backgroundColor: '#007AFF',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 20,
    padding: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  illustrationContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  illustration: {
    width: '100%',
    height: 180,
    resizeMode: 'contain',
  },
  quickActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  actionButton: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  actionIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },
  actionText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  sectionContainer: {
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  profileIconsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 10,
  },
  manageMoneyContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  manageMoneyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007AFF',
  },
  manageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonIcon: {
    width: 24,
    height: 24,
  },
  buttonText: {
    flex: 1,
    marginHorizontal: 10,
    color: '#007AFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;
