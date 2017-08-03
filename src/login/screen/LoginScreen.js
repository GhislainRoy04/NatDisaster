'use strict';
import React, {Component} from "react";
import {View, Alert, AsyncStorage, Image} from "react-native";
import {Button, Text, SocialIcon} from "react-native-elements";
import {Api} from "../../api";
import styles from "./LoginStyleSheet";

class LoginScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        header: null,
    });

    constructor(props) {
        super(props);
        this.onFacebookLogin = this.onFacebookLogin.bind(this);
        this.onGuestLogin = this.onGuestLogin.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem('fb_token').then(res => {
            if (res) {
                this.props.navigation.navigate('dashboard');
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image style={styles.logo} source={require('../../../NatDisaster.png')}/>
                    <Text h2 style={styles.headerText}>NatDisaster</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <SocialIcon button type="facebook" title="Sign In With Facebook"
                                onPress={() => this.onFacebookLogin()}/>
                    <Button title="Continue as guest" onPress={()=>this.onGuestLogin()}/>
                </View>
            </View>
        )
    }

    onFacebookLogin() {
        Api.facebookLogin().then(res => {
            if (res.trim().length > 0) {
                AsyncStorage.setItem('fb_token', res);
                this.props.navigation.navigate("dashboard");
            } else {
                Alert.alert("Login Failed", "Login has been aborted or login failed.");
            }
        });
    }

    onGuestLogin(){
        AsyncStorage.setItem('fb_token','guest').then(()=>{
            this.props.navigation.navigate('dashboard');
        });
    }
}

export default (LoginScreen);