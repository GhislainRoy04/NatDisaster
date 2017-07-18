'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class FlashFloodScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Flash Flood'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Flash Flood</Text>
            </View>
        )
    }
}

export default (FlashFloodScreen);