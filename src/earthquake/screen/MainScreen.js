'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";
import {Button} from "react-native-elements";

class MainScreen extends Component{
    static navigationOptions = ({navigation})=> ({
        title:"Disaster",
        headerRight:<Button title="Settings" raised backgroundColor="blue"
                            color="white" onPress={()=>navigation.navigate('settings')} />
    });
    render(){
        return(
            <View>
                <Button onPress={()=>{}} title="Cold Wave" />
                <Button onPress={()=>{}} title="Drought" />
                <Button onPress={()=>{}} title="EarthQuake" />
                <Button onPress={()=>{}} title="Epidemic" />
                <Button onPress={()=>{}} title="Cyclone" />
                <Button onPress={()=>{}} title="Fire / Wild Fire" />
                <Button onPress={()=>{}} title="Flash Flood" />
                <Button onPress={()=>{}} title="Flood" />
                <Button onPress={()=>{}} title="Heat Wave" />
                <Button onPress={()=>{}} title="Land / Mud Slide" />
                <Button onPress={()=>{}} title="Severe Local Storm" />
                <Button onPress={()=>{}} title="Avalanche" />
                <Button onPress={()=>{}} title="Storm Surge" />
                <Button onPress={()=>{}} title="Tsunami" />
                <Button onPress={()=>{}} title="Volcano"/>
            </View>
        )
    }
}

export default  MainScreen;