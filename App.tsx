import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import Header from "./src/components/public/header";
import store from './src/modules/redux/store';
import Main from './src/components/main';
import { COLOR } from './src/styles';
import Signin from './src/components/login/signin';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        {/* <Header /> */}
        <ScrollView contentContainerStyle={{flexGrow : 1, alignItems : 'center'}} style={styles.mainContainer}>
          <Signin />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: `${(COLOR.backColor)}`,
    overflow: "scroll"
  },
  mainContainer: {
    width: "100%",
    marginTop: 30
  }
});
