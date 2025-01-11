import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";

// Replace with your RouteScan API key
const API_KEY = "YourApiKeyToken";

const CheckBalance = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBalance = async () => {
    if (!walletAddress) return;

    setLoading(true);
    try {
      const response = await axios.get(
        `https://api.routescan.io/v2/network/testnet/avalanche/evm/1/etherscan/api?module=account&action=balance&address=${walletAddress}&tag=latest&apikey=${API_KEY}`
      );

      // Log the full API response for debugging
      console.log("API Response:", response.data);

      // Check if the response contains the result key
      if (response.data && response.data.result) {
        const balanceInWei = response.data.result;

        // Log the balance to check the format
        console.log("Balance in Wei:", balanceInWei);

        if (balanceInWei && !isNaN(balanceInWei)) {
          // If balance is in Wei, convert to AVAX (1e18 = 1 AVAX)
          const balanceInAVAX = parseFloat(balanceInWei) / 1e18; // Convert from Wei to AVAX
          setBalance(balanceInAVAX.toFixed(6)); // Display balance with 6 decimal places
        } else {
          setBalance("Invalid balance format");
        }
      } else {
        // If there's no 'result' in the response, display error
        setBalance("Error: Balance not found or invalid address");
      }
    } catch (error) {
      console.error("Error fetching balance:", error);
      setBalance("Error fetching balance");
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Wallet Balance</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Wallet Address"
        value={walletAddress}
        onChangeText={setWalletAddress}
      />
      <TouchableOpacity style={styles.button} onPress={fetchBalance} disabled={loading}>
        <Text style={styles.buttonText}>{loading ? "Fetching..." : "Get Balance"}</Text>
      </TouchableOpacity>
      {balance !== null && (
        <Text style={styles.balanceText}>Balance: {balance} AVAX</Text>
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
  balanceText: {
    fontSize: 20,
    color: "#333",
    marginTop: 10,
    textAlign: "center",
  },
});

export default CheckBalance;
