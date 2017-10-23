'use strict';
import React,{Component} from "react";
import {View, Text, ScrollView, Alert} from "react-native";
import {Button} from "react-native-elements";

class MoreInfoCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View>
                <Text>{this.props.}</Text> <Text>{}</Text>
            </View>
        )
    }
}