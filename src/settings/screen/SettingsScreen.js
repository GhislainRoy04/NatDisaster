'use strict';
import React,{Component} from "react";
import {View,Text,Alert} from "react-native"
import {Button} from "react-native-elements";
import styles from "./SettingStyleSheet";

class SettingsScreen extends Component{

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Settings - Work in Progress</Text>
                <View style={styles.settingsContainer}>
                    <Button buttonStyle={styles.button} title="Push Notification Settings"
                            onPress={()=>this.props.navigation.navigate('pushnotification')} />
                    <Button title="Delete Date" onPress={()=>{
                        Alert.alert(
                            'Delete Data',
                            'Are you sure you want to delete the data?',
                            [
                                {text:'No',onPress:()=>{}},
                                {text:'Delete now',onPress:()=>{}},
                            ],
                            {cancelable:false}
                        )}} />
                </View>
            </View>
        )
    }
}

export default SettingsScreen;