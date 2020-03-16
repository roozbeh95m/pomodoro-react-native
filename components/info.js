import React from 'react';
import { Linking, View, Text } from 'react-native';
import { styles } from '../stylesheet';

export default class Info extends React.Component {
	render() {
	return (
		<View style={styles.infoBox}>
			<Text style={styles.infoText}> اطلاعات بیشتر در مورد تکنیک پومودورو در 
				<Text style={styles.infoText}
      				onPress={() => Linking.openURL('https://en.wikipedia.org/wiki/Pomodoro_Technique')}> اینجا
      			</Text>.
			</Text>
		</View>
	)
	}
}