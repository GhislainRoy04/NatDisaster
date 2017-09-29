'use strict';
import {Platform} from "react-native";
import {StackNavigator} from "react-navigation";
import SettingsScreen from "../screen/SettingsScreen";
import PushNotificationScreen from "../screen/PushNotificationScreen";

const SettingsNavigation = StackNavigator({
    default: {
        screen: SettingsScreen,
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS === "android" ? 25 : 0
            }
        }
    },
    pushnotification: {
        screen: PushNotificationScreen,
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS === "android" ? 25 : 0
            }
        }
    }
},{
    headerMode:'none'
});

export default (SettingsNavigation);