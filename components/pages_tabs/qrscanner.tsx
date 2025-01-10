import { CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { useRef,useEffect } from "react";

import{
  Linking,
  Platform,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  AppState,
} from "react-native";

export default function QRCamera() {
  
  const qrLock = useRef(false);
  const appstate = useRef(AppState.currentState);
  
  useEffect(() => {
    const subscription = AppState.addEventListener("change", (nextState) => {
      if (nextState === "active" && appstate.current === "inactive") {
        qrLock.current = false;
      }
      appstate.current = nextState;
    });
    return () => subscription.remove();
  }, []);

  return(
    <SafeAreaView style={styles.abs}>
      <Stack.Screen options={{title: "QR Scanner", headerShown: false}}/>
      {Platform.OS === "android" ? <StatusBar hidden /> : null}
      <CameraView
      style={styles.abs}
      facing = "back"
      onBarcodeScanned = {({data}) => {
        setTimeout( async() => {
          await Linking.openURL(data);
        }, 500);
      }}
      />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  abs: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
