'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class LocalStormScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Severe Local Storm'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Severe Local Storm</Text>
            </View>
        )
    }
}

export default (LocalStormScreen);