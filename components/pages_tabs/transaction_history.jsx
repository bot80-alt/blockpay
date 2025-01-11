import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import axios from "axios";

// Replace with your RouteScan API key
const API_KEY = "YourApiKeyToken";
const NETWORK_ID = "43113"; // Avalanche Fuji Testnet

const TransactionPage = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTransactions = async () => {
    if (!walletAddress) return;
    setLoading(true);
    try {
      const url = `https://api.routescan.io/v2/network/testnet/avalanche/${NETWORK_ID}/etherscan/api?module=account&action=txlist&address=${walletAddress}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${API_KEY}`;
      const response = await axios.get(url);
      setTransactions(response.data.result);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
  };

  const renderTransaction = ({ item }) => {
    return (
      <View style={styles.transactionItem}>
        <Text style={styles.transactionText}>
          <Text style={styles.bold}>Transaction Hash:</Text> {item.hash}
        </Text>
        <Text style={styles.transactionText}>
          <Text style={styles.bold}>Block Number:</Text> {item.blockNumber}
        </Text>
        <Text style={styles.transactionText}>
          <Text style={styles.bold}>Value:</Text> {item.value} AVAX
        </Text>
        <Text style={styles.transactionText}>
          <Text style={styles.bold}>Date:</Text> {new Date(item.timeStamp * 1000).toLocaleString()}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Transactions (Avalanche Fuji Testnet)</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <TouchableOpacity style={styles.button} onPress={fetchTransactions}>
        <Text style={styles.buttonText}>Get Transactions</Text>
      </TouchableOpacity>
      {loading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : (
        <FlatList
          data={transactions}
          renderItem={renderTransaction}
          keyExtractor={(item) => item.hash}
          contentContainerStyle={styles.transactionList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
    margin:20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#6200ee",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
  },
  transactionList: {
    paddingBottom: 20,
  },
  transactionItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  transactionText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  bold: {
    fontWeight: "bold",
    color: "#6200ee",
  },
  loadingText: {
    fontSize: 18,
    color: "#6200ee",
    textAlign: "center",
    marginTop: 20,
  },
});

export default TransactionPage;
