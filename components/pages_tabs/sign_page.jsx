import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Signup } from './signup';

const SignPageScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={[styles.headerText, { fontSize: 24 }]}>
                With Blockpay, Crypto is not just a Currency - it's a lifestyle
            </Text>
            <Image
                source={require('../../assets/images/rb_2148298985 1.png')}
                style={[styles.image, { width: 300, height: 300 }]}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Merchant</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>User</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={styles.signInButton}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.signInText}>Sign up →</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.signUpButton}
                onPress={() => navigation.navigate('Login')}
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
});

export default SignPageScreen;
