'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class DroughtScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Drought'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Drought</Text>
            </View>
        )
    }
}

export default (DroughtScreen);