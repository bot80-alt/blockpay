import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const transactions = [
  { id: '1', category: 'Shopping', date: '15 Mar 2019, 8:20 PM', amount: '0.01 BTC', icon: '🛒' },
  { id: '2', category: 'Medicine', date: '13 Mar 2019, 12:10 AM', amount: '0.01 BTC', icon: '💊' },
  { id: '3', category: 'Sport', date: '10 Mar 2019, 6:50 PM', amount: '0.01 BTC', icon: '🏋️' },
  { id: '4', category: 'Shopping', date: '5 Mar 2019, 7:20 PM', amount: '0.01 BTC', icon: '🛒' },
  { id: '5', category: 'Travel', date: '3 Mar 2019, 5:50 PM', amount: '0.01 BTC', icon: '✈️' },
  { id: '6', category: 'Sport', date: '10 Feb 2019, 5:20 PM', amount: '0.01 BTC', icon: '🏋️' },
];

const TransactionItem = ({ category, date, amount, icon }) => (
  <View style={styles.item}>
    <Text style={styles.icon}>{icon}</Text>
    <View style={styles.details}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.date}>{date}</Text>
    </View>
    <Text style={styles.amount}>{amount}</Text>
  </View>
);

const TransactionHistory = () => {
    const navigation = useNavigation();
    return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Your Daily Transactions</Text>
        <Text style={styles.headerAmount}>₹ 250 | 0.01 BTC</Text>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search" placeholderTextColor="#888" />
      <FlatList
        data={transactions}
        renderItem={({ item }) => <TransactionItem {...item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    backgroundColor: '#4A90E2',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerAmount: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  searchBar: {
    backgroundColor: '#333',
    color: '#FFF',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  list: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#2A2A2A',
    borderRadius: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  category: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    color: '#888',
    fontSize: 14,
  },
  amount: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TransactionHistory;
