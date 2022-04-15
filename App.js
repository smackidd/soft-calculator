import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Calculator from './screens/Calculator';

export default function App() {
  return (
    <View style={styles.container}>
      <Calculator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#231B30',
    backgroundColor: '#1F1C24'

  },
});
