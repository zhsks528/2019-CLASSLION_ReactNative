import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./app/components/Header";
import Subtitle from "./app/components/Subtitle";
import Input from "./app/components/Input";
import Listitem from "./app/components/Listitem";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      todos: [
        {
          title: "나는 공부를 하지않아"
        },
        {
          title: "일찍 일어날래"
        }
      ]
    };
  }

  _makeTodoTitem = ({ item, index }) => {
    return <Listitem name={item.title} />;
  };

  _changeText = value => {
    this.setState({ inputValue: value });
  };

  _addTodoItem = () => {
    if (this.state.inputValue !== "") {
      const prevTodo = this.state.todos;

      const newTodo = { title: this.state.inputValue };

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
    backgroundColor: "#fff"
  },
  headercenter: {
    alignItems: "center"
  },
  subtitleposi: {
    marginLeft: 50
  }
});
