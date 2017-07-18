'use strict';
import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {Button} from "react-native-elements";
import styles from "./MainStyleSheet";
import {Api} from "../../api";

class MainScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Disaster",
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                             color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props){
        super(props);
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Button onPress={() => this.props.navigation.navigate('coldWave')} buttonStyle={styles.button} title="Cold Wave"/>
                    <Button onPress={() => this.props.navigation.navigate('drought')} buttonStyle={styles.button} title="Drought"/>
                    <Button onPress={() => this.props.navigation.navigate('earthquake')} buttonStyle={styles.button} title="EarthQuake"/>
                    <Button onPress={() => this.props.navigation.navigate('epidemic')} buttonStyle={styles.button} title="Epidemic"/>
                    <Button onPress={() => this.props.navigation.navigate('cyclone')} buttonStyle={styles.button} title="Cyclone"/>
                    <Button onPress={() => this.props.navigation.navigate('fire')} buttonStyle={styles.button} title="Fire / Wild Fire"/>
                    <Button onPress={() => this.props.navigation.navigate('flashFlood')} buttonStyle={styles.button} title="Flash Flood"/>
                    <Button onPress={() => this.props.navigation.navigate('flood')} buttonStyle={styles.button} title="Flood"/>
                    <Button onPress={() => this.props.navigation.navigate('heatWave')} buttonStyle={styles.button} title="Heat Wave"/>
                    <Button onPress={() => this.props.navigation.navigate('landMud')} buttonStyle={styles.button} title="Land / Mud Slide"/>
                    <Button onPress={() => this.props.navigation.navigate('localStorm')} buttonStyle={styles.button} title="Severe Local Storm"/>
                    <Button onPress={() => this.props.navigation.navigate('avalanche')} buttonStyle={styles.button} title="Avalanche"/>
                    <Button onPress={() => this.props.navigation.navigate('stormSurge')} buttonStyle={styles.button} title="Storm Surge"/>
                    <Button onPress={() => this.props.navigation.navigate('tsunami')} buttonStyle={styles.button} title="Tsunami"/>
                    <Button onPress={() => this.props.navigation.navigate('volcano')} buttonStyle={styles.button} title="Volcano"/>
                </ScrollView>
            </View>
        )
    }
}

export default  (MainScreen);