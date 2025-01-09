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
            <Text style={styles.headerText}>
                With Blockpay, Crypto is not just a Currency - it's a lifestyle
            </Text>
            <Image
                source={require('../../assets/images/rb_2148298985 1.png')}
                style={styles.image}
            />
            <View style={styles.toggleContainer}>
                <TouchableOpacity style={[styles.toggleButton, styles.toggleButtonActive, {borderRadius: 25}]}>
                    <Text style={[styles.toggleButtonText, {textAlign: 'center', color: 'white'}]}>Merchant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.toggleButton, {borderRadius: 25}]}>
                    <Text style={[styles.toggleButtonText, {textAlign: 'center', color: 'black'}]}>User</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={[styles.signInButton, {
                    borderRadius: 25,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5
                }]}
                onPress={handleSignup}
            >
                <Text style={styles.signInText}>Sign up →</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.signUpButton, {borderRadius: 25}]}
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
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#000',
    },
    image: {
        width: 250,
        height: 250,
        marginBottom: 30,
    },
    toggleContainer: {
        flexDirection: 'row',
        width: '80%',
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
        padding: 5,
        marginBottom: 30,
    },
    toggleButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 25,
        alignItems: 'center',
    },
    toggleButtonActive: {
        backgroundColor: '#007AFF',
    },
    toggleButtonText: {
        color: '#000',
        fontSize: 16,
    },
    toggleButtonTextActive: {
        color: '#fff',
        fontSize: 16,
    },
    signUpButton: {
        backgroundColor: '#007AFF',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 60,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    loginButton: {
        borderWidth: 1,
        borderColor: '#007AFF',
        borderRadius: 25,
        paddingVertical: 15,
        paddingHorizontal: 60,
        alignItems: 'center',
    },
    loginbuttonText: {
        color: '#007AFF',
        fontSize: 16,
    },
    signUpButtonText: {
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
