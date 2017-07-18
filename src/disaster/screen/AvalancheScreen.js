'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class AvalancheScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Avalanche'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Avalanche</Text>
            </View>
        )
    }
}

export default (AvalancheScreen);