'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class HeatWaveScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Heat Wave'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Heat Wave</Text>
            </View>
        )
    }
}

export default (HeatWaveScreen);