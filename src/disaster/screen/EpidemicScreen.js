'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class EpidemicScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Epidemic'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Epidemic</Text>
            </View>
        )
    }
}

export default (EpidemicScreen);