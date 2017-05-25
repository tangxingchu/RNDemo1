import React, {Component} from 'react';
import {Text, TouchableOpacity, Button, View, ToastAndroid, BackAndroid} from 'react-native';
import City from "./city.js";

export default class MainPage extends Component {

	constructor() {
		super();
	}
		
	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

	componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }

	handleBack = () => {
        if (this.props.navigator.getCurrentRoutes().length > 1) {
            this.props.navigator.pop()
            return true;
        } else {
			if (this.lastBackPressed && (this.lastBackPressed + 2000 >= Date.now())) {  
				//最近2秒内按过back键，可以退出应用.
				return false;
			}  
			this.lastBackPressed = Date.now();  
			ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);  
			return true; 
		}
        return false;
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
					<View style={{flex: 1, flexDirection: 'row', justifyContent:'center', alignItems: 'center'}}><Text>这是标题</Text></View>
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