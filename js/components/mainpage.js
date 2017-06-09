import React, {Component} from 'react';
import {Text, TouchableOpacity, Button, View, ToastAndroid, BackAndroid} from 'react-native';
import WebViewTest from "./webViewTest.js";
import Header from "./header.js";


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
            this.props.navigator.pop();
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
			<View style={{flex: 1}}>
				<Header navigator={this.props.navigator}/>
				<View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
					<TouchableOpacity onPress={() => { this.props.navigator.push({
									component: WebViewTest
								}) }}>
						<Text>打开WebView</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

}