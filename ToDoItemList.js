import React, { Component } from 'react'
import { AppRegistry, View,  Text , StyleSheet } from 'react-native'
import { Container, Content, List, ListItem, CheckBox } from 'native-base';

class ToDoItemList extends Component {


  render() {

    return (
      <View>
      <View style={{ flexDirection: 'row' }}>
        <Text>
          Tofu and Ginger
        </Text>
        <CheckBox checked={true}
        onPress={this._onPressButton}
        />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text>
          Tofu and Ginger
        </Text>
        <CheckBox checked={true}
        onPress={this._onPressButton}
        />
      </View>
      </View>
    )
  }
}


module.exports = ToDoItemList
