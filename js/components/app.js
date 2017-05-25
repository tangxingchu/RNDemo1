import React, {Component} from 'react';
import {Navigator} from 'react-native';
import MainPage from "./mainpage.js";

export default class App extends Component {

	constructor() {
		super();
	}
	render() {
		return (
				<Navigator
					initialRoute={{component: MainPage}}
					renderScene={(route, navigator) => {
						return <route.component navigator={navigator} {...route.args}/>
						}
				}/>
		)
	}
}