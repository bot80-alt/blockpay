import React,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignPageScreen = () => {
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate("LOGIN");
    };
    const handleFinish = () => {
        if (selectedOption === 'merchant') {
          navigation.navigate('SIGNUP'); // Navigate to Merchant Signup
        } else if (selectedOption === 'user') {
          navigation.navigate("USERSIGNUP"); // Navigate to User Signup
        }
      };
    const [active, setActive] = useState('');
    const [selectedOption, setSelectedOption] = useState(null);
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
            {/* Merchant Option */}
            <TouchableOpacity
                style={[
                    styles.toggleOption,
                    active === 'merchant' && styles.activeOption,
                ]}
                onPress={() => {
                    setActive('merchant');
                    setSelectedOption('merchant');
                }}
            >
                <Text
                    style={[
                        styles.optionText,
                        active === 'merchant' && styles.activeText,
                    ]}
                >
                    Merchant
                </Text>
            </TouchableOpacity>

            {/* User Option */}
            <TouchableOpacity
                style={[
                    styles.toggleOption,
                    active === 'user' && styles.activeOption,
                ]}
                onPress={() => {
                    setActive('user');
                    setSelectedOption('user');
                }}
            >
                <Text
                    style={[
                        styles.optionText,
                        active === 'user' && styles.activeText,
                    ]}
                >
                    User
                </Text>
            </TouchableOpacity>
        </View>
        <TouchableOpacity
            style={[
                styles.signInButton,
                {
                    borderRadius: 25,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                },
            ]}
            onPress={handleFinish}
        >
            <Text style={styles.signInText}>Sign up →</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.signUpButton, { borderRadius: 25 }]}
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
    toggleContainer: {
        flexDirection: 'row',
        backgroundColor: '#e3f2fd',
        borderRadius: 30,
        overflow: 'hidden',
        elevation: 4,
        marginVertical: 20,
      },
      toggleOption: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      activeOption: {
        backgroundColor: '#0d47a1',
      },
      optionText: {
        color: '#0d47a1',
        fontSize: 16,
        fontWeight: 'bold',
      },
      activeText: {
        color: '#ffffff',
      },
});

export default SignPageScreen;
