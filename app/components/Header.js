import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>MyTodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
    marginTop: 25,
    marginBottom: 25
  },
  headertext: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white"
  }
});
