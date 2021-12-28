import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Header from "./src/components/public/header";
import store from './src/modules/redux/store';
import { COLOR } from './src/styles';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
          <Header />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${(COLOR.backColor)}`,
  },
});
