'use strict';
import React,{Component} from "react";
import {View} from "react-native";
import {Button,Text} from "react-native-elements";
import {Api} from "../../api";
import styles from "./LoginStyleSheet";

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.onLoginPress=this.onLoginPress.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                <Text h2>NatDisaster</Text>
                <Button title="Login With Facebook" onPress={()=> this.onLoginPress()} />
                <Text style={styles.guest} >Continue as guest</Text>
            </View>
        )
    }

    onLoginPress(){
        Api.facebookLogin();
    }
}

export default (LoginScreen);