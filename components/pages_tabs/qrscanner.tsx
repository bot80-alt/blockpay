import { CameraView } from "expo-camera";
import { Stack } from "expo-router";
import { useRef, useEffect, useState } from "react";
import { Linking, Platform, SafeAreaView, StyleSheet, StatusBar, AppState, Alert, Dimensions, View, Text } from "react-native";

export default function QRCamera() {
  const qrLock = useRef(false);
  const appstate = useRef(AppState.currentState);
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  const screenWidth = Dimensions.get('window').width;
  const scannerBoxSize = 250;

  // Request camera permission
  useEffect(() => {
    const requestCameraPermission = async () => {
      const { status } = await CameraView.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

    requestCameraPermission();

    const subscription = AppState.addEventListener("change", (nextState) => {
      if (nextState === "active" && appstate.current === "inactive") {
        qrLock.current = false;
      }
      appstate.current = nextState;
    });
    return () => subscription.remove();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    if (scanned) return;

    setScanned(true);
    setTimeout(async () => {
      await Linking.openURL(data);
    }, 500);
  };

  if (hasPermission === null) {
    return (
      <SafeAreaView style={styles.centered}>
        <StatusBar hidden={Platform.OS === "android"} />
        <Stack.Screen options={{ title: "QR Scanner", headerShown: false }} />
        <Text style={styles.infoText}>Requesting for camera permission...</Text>
      </SafeAreaView>
    );
  }

  if (hasPermission === false) {
    return (
      <SafeAreaView style={styles.centered}>
        <StatusBar hidden={Platform.OS === "android"} />
        <Stack.Screen options={{ title: "QR Scanner", headerShown: false }} />
        <Text style={styles.infoText}>
          Camera access denied. Please enable it in your settings.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.abs}>
      <Stack.Screen options={{ title: "QR Scanner", headerShown: false }} />
      {Platform.OS === "android" ? <StatusBar hidden /> : null}

      <CameraView
        style={styles.abs}
        facing="back"
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        {/* Overlay */}
        <SafeAreaView style={styles.overlay}>
          {/* QR scanner box */}
          <View style={[styles.scannerBox, { width: scannerBoxSize, height: scannerBoxSize }]} />

          {/* Bottom Text */}
          <Text style={styles.overlayText}>Align QR Code within the box</Text>
        </SafeAreaView>
      </CameraView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  abs: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  infoText: {
    color: "#fff",
    fontSize: 16,
    paddingHorizontal: 20,
    textAlign: "center",
  },
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  scannerBox: {
    borderWidth: 3,
    borderColor: "#00FF00",
    borderRadius: 10,
  },
  overlayText: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});
