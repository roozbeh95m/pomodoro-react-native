import React from 'react';
import { View, Button, TouchableOpacity, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Buttons extends React.Component {
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress} style={styles.button}>
        <Text style={{textAlign:"center", fontFamily: "Vazir-Bold-FD", fontSize: 16, color: "white" }}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}