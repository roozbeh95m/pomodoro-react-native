import React from 'react';
import { Image } from 'react-native';
import { styles } from '../stylesheet';

export default class Picture extends React.Component {
	render() {
	return (
		<Image
          style={styles.image}
		  source={require('./../icon.png')}
        />
	)
	}
}