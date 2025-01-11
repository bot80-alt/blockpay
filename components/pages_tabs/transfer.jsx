import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";
import {useNavigation} from '@react-navigation/native';

const TransferScreen = () => {
  const navigation=useNavigation();
  const [selectedCoin, setSelectedCoin] = useState("bitcoin");
  const [inrAmount, setInrAmount] = useState("");
  const [cryptoAmount, setCryptoAmount] = useState(0);
  const [cryptoPrices, setCryptoPrices] = useState({});
  const [loading, setLoading] = useState(true);

  const handleTransaction=()=>{
    navigation.navigate("CONFIRMATION");
  }

  // Fetch live crypto prices
  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,binancecoin,dogecoin&vs_currencies=inr"
        );
        setCryptoPrices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching crypto prices: ", error);
      }
    };
    fetchPrices();
  }, []);

  // Recalculate crypto amount
  useEffect(() => {
    if (inrAmount && selectedCoin && cryptoPrices[selectedCoin]) {
      const conversionRate = cryptoPrices[selectedCoin].inr;
      setCryptoAmount((parseFloat(inrAmount) / conversionRate).toFixed(8));
    } else {
      setCryptoAmount(0);
    }
  }, [inrAmount, selectedCoin, cryptoPrices]);

  const coins = [
    { id: "bitcoin", name: "Bitcoin (BTC)", icon: "bitcoin" },
    { id: "ethereum", name: "Ethereum (ETH)", icon: "ethereum" },
    { id: "binancecoin", name: "Binance Coin (BNB)", icon: "binance" },
    { id: "dogecoin", name: "Dogecoin (DOGE)", icon: "dog" },
  ];

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Fetching live crypto prices...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Transfer Crypto</Text>

      {/* Select a Coin */}
      <Text style={styles.subtitle}>Select a Coin</Text>
      <FlatList
        data={coins}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.coinCard,
              selectedCoin === item.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedCoin(item.id)}
          >
            <MaterialCommunityIcons
              name={item.icon}
              size={32}
              color={selectedCoin === item.id ? "#fff" : "#6200ee"}
            />
            <Text
              style={[
                styles.coinText,
                selectedCoin === item.id && styles.selectedCoinText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Amount Input and Conversion */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Enter INR Amount</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={inrAmount}
          onChangeText={(text) => setInrAmount(text)}
          placeholder="Enter amount in INR"
        />
        <View style={styles.conversionRow}>
          <Text style={styles.cryptoLabel}>
            {cryptoAmount} {selectedCoin.toUpperCase()}
          </Text>
          <MaterialCommunityIcons
            name="swap-horizontal-bold"
            size={24}
            color="#6200ee"
          />
        </View>
      </View>

      {/* Pay Now Button */}
      <TouchableOpacity style={styles.payButton} onPress={handleTransaction}>
        <Text style={styles.payButtonText}>Pay Now</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#6200ee",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 20,
  },
  coinCard: {
    flex: 1,
    padding: 15,
    marginHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  selectedCard: {
    backgroundColor: "#6200ee",
    elevation: 6,
    shadowColor: "#6200ee",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },
  coinText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  selectedCoinText: {
    color: "#fff",
    fontWeight: "700",
  },
  inputContainer: {
    marginTop: 20,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 12,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    fontSize: 16,
    marginBottom: 15,
  },
  conversionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cryptoLabel: {
    fontSize: 16,
    color: "#6200ee",
    fontWeight: "600",
  },
  payButton: {
    marginTop: 30,
    backgroundColor: "#6200ee",
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: "center",
  },
  payButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "700",
  },
  loadingText: {
    fontSize: 18,
    color: "#6200ee",
    textAlign: "center",
  },
});

export default TransferScreen;
