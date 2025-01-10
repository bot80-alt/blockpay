import { View,Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import {Link, Stack} from "expo-router";
import { useCameraPermissions } from "expo-camera"


export default function ScanQRPage() {

    const [permisson, requestPermission] = useCameraPermissions();
    const isPermissionGranted = Boolean(permisson?.granted);
  return (
    <SafeAreaView style = {styles.container}>
        <Stack.Screen options={{ title: "Overview", headerShown: false}}/>
        <Text style = {styles.title}>Scan QR Code</Text>
        <View style = {{ gap:20}}>
            <Pressable onPress={requestPermission} style = {styles.button}>
                <Text style = {styles.buttonText}>Request Permission</Text>
            </Pressable>
            <Link href = {"./qrscanner"} asChild>
                <Pressable disabled = {!isPermissionGranted}>
                    <Text style ={[
                        styles.buttonText,
                        {opacity: !isPermissionGranted ? 0.5 : 1}
                    ]}>Scan Code</Text>
                </Pressable>
            </Link>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    justifyContent: 'space-around',
    paddingVertical: 80
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 20
  },
  button: {
    backgroundColor: '#4159fa',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

// export default function ScanQRPage();