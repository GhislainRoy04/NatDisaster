'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class VolcanoScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Volcano'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Volcano</Text>
            </View>
        )
    }
}

export default (VolcanoScreen);