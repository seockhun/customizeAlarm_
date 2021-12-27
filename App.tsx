import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Header from "./src/components/public/header";
import { COLOR } from './src/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${(COLOR.backColor)}`,
  },
});
