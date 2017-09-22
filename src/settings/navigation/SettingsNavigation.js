'use strict';
import {Platform} from "react-native";
import {StackNavigator} from "react-navigation";
import SettingsScreen from "../screen/SettingsScreen";
import PushNotificationScreen from "../screen/PushNotificationScreen";

const SettingsNavigation = StackNavigator({
    default: {
        screen: SettingsScreen,
        headerMode: 'float',
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS === "android" ? 25 : 0
            },
            header: null
        }
    },
    pushnotification: {
        screen: PushNotificationScreen,
        headerMode: "float",
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS === "android" ? 25 : 0
            },
            header: null
        }
    }
});

export default (SettingsNavigation);