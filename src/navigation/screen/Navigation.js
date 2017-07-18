'use strict';
import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import {MainScreen} from "../../main";
import {SettingsScreen, PushNotificationScreen} from "../../settings";
import {EarthquakeScreen} from "../../disaster";

class Navigation extends Component {
    render() {
        const MainNavigation = StackNavigator({
            MainScreen: {
                screen: MainScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            settings: {
                screen: SettingsScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            pushnotification: {
                screen: PushNotificationScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            earthquake: {
                screen: EarthquakeScreen,
                headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            }
        });

        return (
            <MainNavigation/>
        )
    }
}

export default Navigation;