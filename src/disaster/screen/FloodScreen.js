'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class FloodScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Flood'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Flood</Text>
            </View>
        )
    }
}

export default (FloodScreen);