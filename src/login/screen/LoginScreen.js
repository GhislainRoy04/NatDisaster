'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";
import {Button} from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import {Api} from "../../api";
import styles from "./LoginStyleSheet";

class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.onLoginPress=this.onLoginPress.bind(this);
    }

    render(){
        return(
            <View>
                <Button title="Login With Facebook" onPress={()=> this.onLoginPress()} />

                <Text>Continue as guest</Text>
            </View>
        )
    }

    onLoginPress(){
        Api.facebookLogin();
    }
}

export default (LoginScreen);