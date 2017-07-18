'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";

class LandMudSlideScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Land / Mud Slide'
    });

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Text>Land / Mud Slide</Text>
            </View>
        )
    }
}

export default (LandMudSlideScreen);