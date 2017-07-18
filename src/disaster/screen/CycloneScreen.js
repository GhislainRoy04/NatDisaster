'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class CycloneScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Cyclone'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Cyclone</Text>
            </View>
        )
    }
}

export default (CycloneScreen);