'use strict';
import {Platform} from "react-native";
import SettingsScreen from "../screen/SettingsScreen";
import PushNotificationScreen from "../screen/PushNotificationScreen";

const SettingsNavigation={
    default:{
        screen : SettingsScreen,
        headerMode: 'float',
        navigationOptions:{
            headerStyle:{
                marginTop:Platform.OS==="android"?25:0
            }
        }
    },
    pushnotification: {
        screen: PushNotificationScreen,
        headerMode: "float",
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    }
};

export default (SettingsNavigation);