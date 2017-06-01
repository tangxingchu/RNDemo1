import React, {Component} from 'react';
import {Text, TouchableOpacity, Button, View, ToastAndroid, BackAndroid} from 'react-native';
import City from "./city.js";

export default class Header extends Component {
	
	constructor() {
		super();
	}
	
	render() {
		return (
			<View style={{height: 40, backgroundColor: '#841584'}}>
				<View style={{flex: 1, flexDirection: 'row', justifyContent:'flex-start'}}>
					<View style={{padding: 2}}>
						<Button
						  title="返回"
						  onPress={() => {}}
						  color="#ccc"
						  accessibilityLabel="Learn more about this purple button"
						/>
					</View>
					<View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}><Text style={{fontSize: 24}}>这是标题</Text></View>
					<View style={{padding: 2}}>
						<Button
						  title="+"
						  onPress={() => {this.props.navigator.push({
								component: City
							})}}
						  color="#ccc"
						  accessibilityLabel="Learn more about this purple button"
						/>		
					</View>
				</View>		
			</View>
		)
	}

}