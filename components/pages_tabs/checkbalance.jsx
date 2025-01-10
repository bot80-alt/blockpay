import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Checkbalance= () => {
    const navigation = useNavigation();
    const handlehomepage = () => {
        navigation.navigate("ENTRY");
    };
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.topcontainer}>
                <Image source={require('../../assets/images/left-arrow.png')} style={styles.topcontainerimg} onProgress={handlehomepage}/>
                <Text style={styles.topcontainertext}>Balance</Text>
            </View>
        <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardLabel}>SAVINGS WALLET</Text>
          <Image source={require('../../assets/images/chip.png')} style={styles.chipIcon} />
        </View>
        <Text style={styles.cardBalance}>$101</Text>
        <Text selectable style={styles.cardAddress}>
          0x1F9F 2E12 BEF5 0100 B3DC CA23 BE40 35E4 F078 60D7
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardHolder}>CARD HOLDER</Text>
          <Text style={styles.cardHolderName}>SHYAM</Text>
        </View>
      </View>
    </ScrollView>
    );
};
const styles = StyleSheet.create({
    topcontainer: {
        height: 125,
        borderWidth:5,
        bordertopColor:'#4159fa',
        borderLeftColor:'#9fd3fc',
        borderBottomColor:'#9fd3fc',
        borderRightColor:'#9fd3fc',
        backgroundColor: '#4159fa',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    topcontainerimg:{
        top: 45,
        left: 20,
        width: 30,
        height: 30,
        borderRadius:50,
    },
    topcontainertext:{
        top: 15,
        left: 175,
        fontSize: 20,
        color: '#fff',
    },
    card: {
        backgroundColor: "#9fd3fc",
        margin: 20,
        padding: 20,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
      },
      cardHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
      },
      cardLabel: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "bold",
      },
      chipIcon: {
        width: 40,
        height: 40,
      },
      cardBalance: {
        fontSize: 40,
        color: "#fff",
        fontWeight: "bold",
        letterSpacing: 1,
        marginBottom: 10,
      },
      cardAddress: {
        fontSize: 16,
        color: "#fff",
        opacity: 0.8,
        letterSpacing: 2,
        marginBottom: 20,
      },
      cardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      cardHolder: {
        fontSize: 12,
        color: "#fff",
        opacity: 0.7,
      },
      cardHolderName: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
      },
});
export default Checkbalance;