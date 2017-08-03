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
        this.onLoginPress = this.onLoginPress.bind(this);
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
                                onPress={() => this.onLoginPress()}/>
                    <Button title="Continue as guest"/>
                </View>
            </View>
        )
    }

    onLoginPress() {
        Api.facebookLogin().then(res => {
            if (res.trim().length > 0) {
                AsyncStorage.setItem('fb_token', res);
                this.props.navigation.navigate("dashboard");
            } else {
                Alert.alert("Login Failed", "Login has been aborted or login failed.");
            }
        });
    }
}

export default (LoginScreen);