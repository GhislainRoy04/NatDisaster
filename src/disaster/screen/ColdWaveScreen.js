'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class ColdWaveScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Cold Wave'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Cold wave</Text>
            </View>
        )
    }
}

export default (ColdWaveScreen);