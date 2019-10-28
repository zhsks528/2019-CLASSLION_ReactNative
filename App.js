import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./app/components/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headercenter}>
        <Header />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headercenter: {
    alignItems: "center",
    borderWidth: 5
  }
});
