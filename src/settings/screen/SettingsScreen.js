'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native"
import {Button} from "react-native-elements";
import styles from "./SettingStyleSheet";

class SettingsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Settings</Text>
                <View>
                    <Button title="Push Notification Settings" onPress={()=>this.props.navigation.navigate('pushnotification')} />
                </View>
            </View>
        )
    }
}

export default SettingsScreen;