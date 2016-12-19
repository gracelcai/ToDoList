import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'



var Title = require("./Title.js")
var ToDoItemList = require("./ToDoItemList.js")

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Title style={styles.title}>
        </Title>
        <ToDoItemList>
        </ToDoItemList>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  title : {
    flex: 0,

    height: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffff00',
   paddingTop: 20,
marginTop: 0,
//    justifyContent: 'center',
    alignItems: 'center',
  },
})

AppRegistry.registerComponent('TodoList', () => App)
