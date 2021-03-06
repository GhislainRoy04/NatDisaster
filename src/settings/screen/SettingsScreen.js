'use strict';
import React,{Component} from "react";
import {View,Text,Alert,AsyncStorage} from "react-native"
import {Button} from "react-native-elements";
import styles from "./SettingStyleSheet";

class SettingsScreen extends Component{
    static navigationOptions=()=>({
        title:"Settings"
    });

    constructor(props){
        super(props);
        this.onLogOut=this.onLogOut.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Settings - Work in Progress</Text>
                <View style={styles.settingsContainer}>
                    <Button buttonStyle={styles.button} title="Push Notification Settings"
                            onPress={()=>this.props.navigation.navigate('pushnotification')} />
                    <Button buttonStyle={styles.button} title="Delete Date" onPress={()=>{
                        Alert.alert(
                            'Delete Data',
                            'Are you sure you want to delete the data?',
                            [
                                {text:'No',onPress:()=>{}},
                                {text:'Delete now',onPress:()=>{}},
                            ],
                            {cancelable:false}
                        )}} />

                    <Button buttonStyle={styles.button} title="Log out"
                        onPress={()=>this.onLogOut() }
                    />
                </View>
            </View>
        )
    }

    onLogOut(){
        AsyncStorage.removeItem('fb_token').then(()=>{
            this.props.navigation.navigate('login');
        });
    }
}

export default SettingsScreen;