import React, {Component} from 'react';
import {Navigator} from 'react-native';
import Tabbar from "./Tabbar"
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import appActions from '../actions/application';

class App extends Component {

	constructor() {
		super();
	}

	render() {
		return (
				<Navigator
					initialRoute={{component: Tabbar}}
					renderScene={(route, navigator) => {
						return <route.component navigator={navigator} {...route.args} {...this.props}/>
						}
				}/>
		)
	}

}

export default connect((state) => {
	return {
		tabbar: state.tabbar,
		test: state.test
	}
}, (dispatch) => {
	return {
		appActions: bindActionCreators(appActions, dispatch)
	}
})(App)