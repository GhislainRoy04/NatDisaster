'use strict';
import React,{Component} from "react";
import {AsyncStorage} from "react-native";
import {LoginScreen} from "../login";
import {DashboardScreen} from "../dashboard";

class Main extends Component{
    constructor(props){
        super(props);
        let loggedIn;
        AsyncStorage.getItem('fb_token').then((res)=>loggedIn=res);
        this.state=({loggedIn});
    }
    render(){
        let {loggedIn} = this.state;

        if(loggedIn){
            return <DashboardScreen/>
        }else{
            return <LoginScreen/>
        }
    }
}

export default (Main);