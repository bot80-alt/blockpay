import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App() {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');
  const [latestScannedData, setLatestScannedData] = useState(null);

  React.useEffect(() => {
    requestPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      // Update the state with the latest scanned data
      setLatestScannedData(codes[0].value);
      console.log(codes[0].value);
    },
  });

  if (device == null) {
    return (
      <View>
        <Text>Device Not Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        codeScanner={codeScanner}
        device={device}
        isActive={true}
      />
      {latestScannedData && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Latest Scanned Code:</Text>
          <Text style={styles.resultText}>{latestScannedData}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  resultContainer: {
    position: 'absolute',
    bottom: 40, // Adjust the position to provide space between the camera view and the result container
    left: 20,
    right: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 10,
    borderRadius: 5,
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'white',
  },
  resultText: {
    fontSize: 14,
    color: 'white',
  },
});

export default App;