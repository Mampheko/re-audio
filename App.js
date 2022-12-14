import React from "react";
import { SafeAreaView, StyleSheet, Text, useColorScheme } from "react-native";
import Navigation from "./src/navigation";

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#1D2D44',
  },
});

export default App;