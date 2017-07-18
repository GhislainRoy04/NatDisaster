'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class StormSurgeScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Storm Surge'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Storm Surge</Text>
            </View>
        )
    }
}

export default (StormSurgeScreen);