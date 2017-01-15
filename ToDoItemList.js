import React, { Component } from 'react'
import { AppRegistry, View,  Text , StyleSheet } from 'react-native'
import { Container, Content, List, ListItem, CheckBox } from 'native-base';

class ToDoItemList extends Component {


  render() {

    return (
      <View>
          <View style={{ flexDirection: 'row', flex : 1 }}>
              <Text>
                Sugar Cubes
              </Text>
             <View style={styles.grace}>
                <CheckBox checked={true}
                onPress={this._onPressButton}
                  />
             </View>
         </View>
         <View style={{ flexDirection: 'row' }}>
            <Text>
              Stuff
           </Text>
           <CheckBox checked={true}
            onPress={this._onPressButton}
           />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>
            Tea
          </Text>
          <CheckBox checked={true}
          onPress={this._onPressButton}
          />
       </View>
     </View>
    )
  }
}

var styles = StyleSheet.create({
  grace : {
    marginRight: 10
  }
});

module.exports = ToDoItemList
