import React from 'react';
import { Picker } from 'react-native';
import { styles } from '../stylesheet';

let list = [];
for (let i = 0; i < 60; i++) {
  list.push(i.toString());
} 

export default class Menu extends React.Component {
  render() {
    return (
      <Picker style={styles.menu} mode="dropdown" onValueChange={this.props.onValueChange} selectedValue={this.props.selected} itemStyle={{fontFamilly:"Vazir-Medium-FD",color:"red"}}>
        {list.map( (num) => {
          return (<Picker.Item label={num} value={num} key={num} itemStyle={{fontFamilly:"Vazir-Medium-FD",color:"red"}}/>);
        })}
        </Picker>
    )
  }
}