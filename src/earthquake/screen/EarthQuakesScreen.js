'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";
import {Button} from "react-native-elements";

class EarthQuakesScreen extends Component{
    static navigationOptions = ({navigation})=> ({
        title:"Disaster",
        headerRight:<Button title="Settings" raised backgroundColor="blue"
                            color="white" onPress={()=>navigation.navigate('settings')} />
    });
    render(){
        return(
            <View>
                <Text>Earthquakes.</Text>
            </View>
        )
    }
}

export default  EarthQuakesScreen;