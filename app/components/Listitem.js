import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function Listitem({
  name,
  isComplete,
  changeComlete,
  deleteItem
}) {
  return (
    <View style={styles.listitembox}>
      <View style={styles.makerow}>
        <TouchableOpacity onPress={changeComlete}>
          <FontAwesome
            name={isComplete ? "check-circle-o" : "circle-thin"}
            size={20}
            style={styles.checkmargin}
          />
        </TouchableOpacity>
        <Text style={styles.item}>{name}</Text>
      </View>
      <TouchableOpacity onPress={deleteItem}>
        <AntDesign style={styles.close} name="delete" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  listitembox: {
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 10,
    width: width - 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "white"
  },
  makerow: {
    flexDirection: "row",
    alignItems: "center"
  },
  checkmargin: {
    marginRight: 10,
    color: "white"
  },
  item: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  close: {
    color: "gray"
  }
});
