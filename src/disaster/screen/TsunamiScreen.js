'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class TsunamiScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Tsunami'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Tsunami</Text>
            </View>
        )
    }
}

export default (TsunamiScreen);