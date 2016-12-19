import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'



var Title = require("./Title.js")
var ToDoItemList = require("./ToDoItemList.js")

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title>
        </Title>
        <ToDoItemList>
        </ToDoItemList>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('TodoList', () => App)
