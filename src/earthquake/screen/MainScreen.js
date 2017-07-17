'use strict';
import React,{Component} from "react";
import {ScrollView,Text} from "react-native";
import {Button} from "react-native-elements";
import style from "./MainStyleSheet";

class MainScreen extends Component{
    static navigationOptions = ({navigation})=> ({
        title:"Disaster",
        headerRight:<Button title="Settings" raised backgroundColor="blue"
                            color="white" onPress={()=>navigation.navigate('settings')} />
    });
    render(){
        return(
            <ScrollView>
                <Button onPress={()=>{}} buttonStyle={style.button} title="Cold Wave" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Drought" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="EarthQuake" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Epidemic" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Cyclone" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Fire / Wild Fire" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Flash Flood" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Flood" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Heat Wave" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Land / Mud Slide" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Severe Local Storm" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Avalanche" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Storm Surge" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Tsunami" />
                <Button onPress={()=>{}} buttonStyle={style.button} title="Volcano"/>
            </ScrollView>
        )
    }
}

export default  MainScreen;