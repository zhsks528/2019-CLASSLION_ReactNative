import React from "react";
import { StyleSheet, Text, View, FlatList, AsyncStorage } from "react-native";
import Header from "./app/components/Header";
import Subtitle from "./app/components/Subtitle";
import Input from "./app/components/Input";
import Listitem from "./app/components/Listitem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: []
    };
  }
  componentWillMount() {
    this.getData();
  }

  storeData = () => {
    AsyncStorage.setItem("@todo:state", JSON.stringify(this.state));
  };

  getData = () => {
    AsyncStorage.getItem("@todo:state").then(state => {
      if (state != null) {
        this.setState(JSON.parse(state));
      }
    });
  };

  _makeTodoTitem = ({ item, index }) => {
    return (
      <Listitem
        name={item.title}
        isComplete={item.iscomplete}
        changeComlete={() => {
          const newTodo = [...this.state.todos];
          newTodo[index].iscomplete = !newTodo[index].iscomplete;
          this.setState({ todos: newTodo }, this.storeData);
        }}
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index, 1);
          this.setState({ todos: newTodo }, this.storeData);
        }}
      />
    );
  };

  _changeText = value => {
    this.setState({ inputValue: value });
  };

  _addTodoItem = () => {
    if (this.state.inputValue !== "") {
      const prevTodo = this.state.todos;

      const newTodo = { title: this.state.inputValue, iscomplete: false };

      this.setState({
        inputValue: "",
        todos: prevTodo.concat(newTodo)
      });
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headercenter}>
          <Header />
        </View>
        <View style={styles.subtitleposi}>
          <Subtitle title="해야 할 일" />
          <Input
            value={this.state.inputValue}
            changeText={this._changeText}
            addTodoItem={this._addTodoItem}
          />
        </View>
        <View style={styles.subtitleposi}>
          <Subtitle title="해야 할 일 목록" />

          <FlatList
            data={this.state.todos}
            renderItem={this._makeTodoTitem}
            keyExtractor={(item, index) => {
              return `${index}`;
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2196f3"
  },
  headercenter: {
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "white"
  },
  subtitleposi: {
    padding: 20
  }
});
