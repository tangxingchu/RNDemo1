import React, {Component} from 'react';
import {Navigator, Text, TouchableOpacity, Image, ListView, View, RefreshControl} from 'react-native';
import { connect } from 'react-redux';

const cities = require('../allcities.json');


export default class App extends Component {
	constructor() {
		super();
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows(cities),
		};
	}

	_renderRow(rowData) {
		return (
			<View style={{flex:1, borderBottomWidth: 1, borderColor: '#ccc'}}>
				<View style={{flex:1,flexDirection:'row', justifyContent:'flex-start'}}>
					<View>
						<Image source={{uri:'ic_launcher'}} style={{width: 72, height: 72}}/>
					</View>
					<View style={{alignItems: 'center', flex: 1, flexDirection:'row'}}><Text>{rowData.Name}</Text></View>
				</View>
				<View style={{flex:1,flexDirection:'row', justifyContent:'flex-start'}}><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text><Text>{rowData.Name}</Text></View>
			</View>
		);
	}
	
	_renderRefreshControl() {
		let {refreshing, tintColor, title, colors, progressBackgroundColor} = this.state;
		return (
			<RefreshControl
				refreshing={false}
				tintColor={tintColor}
				title={title}
				colors={colors}
				progressBackgroundColor={progressBackgroundColor}
			  />	
		)
	}

	render() {
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this._renderRow}
				refreshControl = {this._renderRefreshControl()}>	
			</ListView>
		)
	}
}

App.propTypes = {
    value: React.PropTypes.string.isRequired
};

/*
const mapStateToProps = state => {
	
}

export const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps)(TodoList);

*/