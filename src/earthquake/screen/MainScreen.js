'use strict';
import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {Button} from "react-native-elements";
import styles from "./MainStyleSheet";

class MainScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Disaster",
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                             color="white" onPress={() => navigation.navigate('settings')}/>
    });
    render() {
        return (
            <View>
                <ScrollView>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Cold Wave"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Drought"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="EarthQuake"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Epidemic"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Cyclone"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Fire / Wild Fire"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Flash Flood"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Flood"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Heat Wave"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Land / Mud Slide"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Severe Local Storm"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Avalanche"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Storm Surge"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Tsunami"/>
                    <Button onPress={() => {}} buttonStyle={styles.button} title="Volcano"/>
                </ScrollView>
            </View>
        )
    }
}

export default  MainScreen;