import React, {Component} from 'react';
import {Text, TouchableOpacity, WebView, StyleSheet} from 'react-native';

export default class WebViewTest extends Component {

	render() {
		return (
			<WebView
			  automaticallyAdjustContentInsets={false}
			  style={styles.webView}
			  source={{uri: 'http://192.168.0.141:8083//infinitus-web/test.do'}}
			  javaScriptEnabled={true}
			  domStorageEnabled={true}
			  decelerationRate="normal"
			  startInLoadingState={true}
			  onMessage={(event) => {
				alert(event.nativeEvent.data)
			  }}
			/>
		)
	}
	
}

var styles = StyleSheet.create({
  webView: {
    backgroundColor: '#ccc',
    height: 350,
  }
});