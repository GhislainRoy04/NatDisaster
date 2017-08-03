'use strict';
import React, {Component} from "react";
import {AsyncStorage, View} from "react-native";
import {LoginScreen} from "../login";
import {DashboardScreen} from "../dashboard";

let Main=null;

AsyncStorage.getItem('fb_token').then(res =>{
    let token = res;

     Main = () => (
        token.length > 0 ?
            this.props.navigation.navigate('main')

            :
            this.props.navigation.navigate('login')

    );
});

export default (Main);