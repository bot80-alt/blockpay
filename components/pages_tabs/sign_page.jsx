import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignPageScreen = () => {
    const navigation = useNavigation();
    const handleSignup = () => {
        navigation.navigate("SIGNUP");
      };
      const handleLogin = () => {
        navigation.navigate("LOGIN");
      };
    return (
        <View style={styles.container}>
            <Text style={[styles.headerText, { fontSize: 24 }]}>
                {`With Blockpay, Crypto is not just a Currency - it's a lifestyle`}
            </Text>
            <Image
                source={require('../../assets/images/rb_2148298985 1.png')}
                style={[styles.image, { width: 300, height: 300 }]}
            />
            <View style={styles.toggleContainer}>
                <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive]}>
                    <Text style={styles.toggleButtonText}>Merchant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.toggleButton}>
                    <Text style={styles.toggleButtonText}>User</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.signInButton}
                onPress={handleSignup}
            >
                <Text style={styles.signInText}>Sign up →</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.signUpButton}
                onPress={handleLogin}
            >
                <Text style={styles.signUpText}>Login →</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    image: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#6A5ACD',
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    signInButton: {
        backgroundColor: '#7B68EE',
        padding: 10,
        borderRadius: 5,
        marginBottom: 10,
        width: '80%',
        alignItems: 'center',
    },
    signInText: {
        color: '#fff',
        fontSize: 16,
    },
    signUpButton: {
        borderColor: '#7B68EE',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    signUpText: {
        color: '#7B68EE',
        fontSize: 16,
    },
    toggleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#f2f2f2',
        marginVertical: 10,
        overflow: 'hidden',
    },
    toggleButton: {
        width: '50%',
        padding: 10,
        textAlign: 'center',
        borderRadius: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    toggleButtonActive: {
        backgroundColor: '#6A5ACD',
        color: '#fff',
        transition: 'all 0.3s ease-in-out',
    },
    toggleButtonInactive: {
        backgroundColor: '#fff',
        color: '#6A5ACD',
        transition: 'all 0.3s ease-in-out',
    },
});

export default SignPageScreen;
