import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import MainPage from "./mainpage";

export default class Tabbar extends Component {

	constructor() {
		super();
	}

	render() {
		let {tabbar, appActions} = this.props;
		return (
			<TabNavigator>
                    <TabNavigator.Item
                        selected={tabbar.tabname === '首页'}
                        title="首页"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../images/ic_home_normal.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../images/ic_home_checked.png")} />}
                        onPress={() => {appActions.changeTab('首页')} }>
                        <MainPage/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={tabbar.tabname === '消息'}
                        title="消息"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../images/ic_message_normal.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../images/ic_message_checked.png")} />}
                        onPress={ () => {appActions.changeTab('消息')} }>
                        <View><Text>消息</Text></View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={tabbar.tabname === '联系人'}
                        title="联系人"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image style={styles.icon} source={require("../../images/ic_contacts_normal.png")} />}
                        renderSelectedIcon={() => <Image style={styles.icon} source={require("../../images/ic_contacts_checked.png")} />}
                        onPress={ () => {appActions.changeTab('联系人')} }>
                        <View><Text>联系人</Text></View>
                    </TabNavigator.Item>
			</TabNavigator>
		)
	}

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    tabText: {
        color: "#999999",
        fontSize: 13
    },
    selectedTabText: {
        color: "#000000",
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});