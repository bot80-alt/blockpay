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
            {/* <View style={styles.card}>
            <Text style={styles.cardTitle}>Total Balance</Text>
                <Text style={styles.cardBalance}>$101</Text>
                <Text style={styles.cardAddress}>0x1F9F2E12BEf50100B3dcCA23BE4035e4F07860d7</Text>
            // {/* 9fd3fc */}
            // {/* 2a46fd */}
            {/* </View> */}
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
          <Text style={styles.cardHolderName}>Madhan Raj</Text>
        </View>
      </View>
    </ScrollView>
    );
};
const styles = StyleSheet.create({
    // card: {
    //     backgroundColor: "#9fd3fc",
    //     height:225,
    //     padding: 20,
    //     margin: 20,
    //     borderRadius: 10,
    // },
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
        padding: 10,
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
    // card: {
    //         backgroundColor: "#9fd3fc",
    //         margin: 20,
    //         padding: 20,
    //         borderRadius: 12,
    //         height: 225,
    //       },
    //       cardTitle: {
    //         fontSize: 18,
    //         left: 110,
    //         color: "#333",
    //         fontWeight: "600",
    //       },
    //       cardBalance: {
    //         fontSize: 48,
    //         top: 25,
    //         left: 110,
    //         color: "#4159fa",
    //         fontWeight: "bold",
    //         marginVertical: 10,
    //       },
    //       cardAddress: {
    //         fontSize: 14,
    //         color: "#4159fa",
    //         marginTop: 65,
    //         opacity: 0.8,
    //       },
    // cardbalance:{
    //     top: 25,
    //     fontSize: 50,
    //     fontWeight: 'bold',
    //     color: '#4159fa',
    // },
    // cardaddres:{
    //     top: 25,
    //     fontSize: 15,
    //     color: '#4159fa',
    // },

});
export default Checkbalance;
// import React from "react";
// import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const Checkbalance = () => {
//   const navigation = useNavigation();

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Top Header */}
//       <View style={styles.topContainer}>
//         <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
//           <Image source={require('../../assets/images/left-arrow.png')} style={styles.backIcon} />
//         </TouchableOpacity>
//         <Text style={styles.topContainerText}>Balance</Text>
//       </View>

//       {/* Balance Card */}
//       <View style={styles.card}>
//         <Text style={styles.cardTitle}>Total Balance</Text>
//         <Text style={styles.cardBalance}>$101</Text>
//         <Text selectable style={styles.cardAddress}>
//           0x1F9F2E12BEf50100B3dcCA23BE4035e4F07860d7
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     backgroundColor: "#F4F4F6",
//   },
//   topContainer: {
//     height: 125,
//     backgroundColor: "#4159fa",
//     borderBottomLeftRadius: 50,
//     borderBottomRightRadius: 50,
//     justifyContent: "center",
//   },
//   backButton: {
//     position: "absolute",
//     top: 45,
//     left: 20,
//   },
//   backIcon: {
//     width: 30,
//     height: 30,
//   },
//   topContainerText: {
//     fontSize: 24,
//     color: "#fff",
//     fontWeight: "600",
//     alignSelf: "center",
//   },
//   card: {
//     backgroundColor: "#9fd3fc",
//     margin: 20,
//     padding: 20,
//     borderRadius: 12,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   cardTitle: {
//     fontSize: 18,
//     color: "#333",
//     fontWeight: "600",
//   },
//   cardBalance: {
//     fontSize: 48,
//     color: "#4159fa",
//     fontWeight: "bold",
//     marginVertical: 10,
//   },
//   cardAddress: {
//     fontSize: 14,
//     color: "#4159fa",
//     marginTop: 10,
//     opacity: 0.8,
//   },
// });

// export default Checkbalance;
