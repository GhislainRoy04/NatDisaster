'use strict';
import React, {Component} from "react";
import {ScrollView, View,Alert} from "react-native";
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
        this.onPressButton = this.onPressButton.bind(this);
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Cold Wave"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Drought"/>
                    <Button onPress={() => {this.props.navigation.navigate('earthquake')}} buttonStyle={styles.button} title="EarthQuake"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Epidemic"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Cyclone"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Fire / Wild Fire"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Flash Flood"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Flood"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Heat Wave"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Land / Mud Slide"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Severe Local Storm"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Avalanche"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Storm Surge"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Tsunami"/>
                    <Button onPress={(event) => this.onPressButton(event)} buttonStyle={styles.button} title="Volcano"/>
                </ScrollView>
            </View>
        )
    }

    onPressButton(event){
      Alert.alert("Button Pressed.",event.value);
    }
}

export default  MainScreen;