'use strict';
import React,{Component} from "react";
import {View,Text} from "react-native";
import {Slider} from "react-native-elements";
import styles from "./PushNotificationStyleSheet";

class PushNotificationScreen extends Component{
    constructor(props){
        super(props);
        this.state={magnitudeVal:0};
        this.onChangeMagnitude=this.onChangeMagnitude.bind(this);
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>Push Notification</Text>
                <View style={styles.pushContainer}>
                    <Text>Only receive notification on earthquake with magnitude higher than set value.</Text>
                    <Slider value={this.state.magnitudeVal}
                            onValueChange={(value)=>this.onChangeMagnitude(value)}
                            step={0.5}
                            minimumValue={0}
                            maximumValue={10}/>
                    <Text>Magnitude Value: {this.state.magnitudeVal}</Text>
                </View>
            </View>
        )
    }

    onChangeMagnitude(magnitudeVal){
        this.setState({magnitudeVal});
    }
}

export default  PushNotificationScreen;