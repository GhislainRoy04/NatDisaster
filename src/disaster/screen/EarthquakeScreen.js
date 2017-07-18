'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class EarthquakeScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Earthquake'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Earthquake</Text>
            </View>
        )
    }
}

export default EarthquakeScreen;