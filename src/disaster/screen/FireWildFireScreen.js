'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class FireWildFireScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Fire / Wild Fire'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Fire / Wild Fire</Text>
            </View>
        )
    }
}

export default (FireWildFireScreen);