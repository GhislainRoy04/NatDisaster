'use strict';
import React, {Component} from "react";
import {ScrollView, View} from "react-native";
import {Button, List, ListItem} from "react-native-elements";

class MainScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Disaster",
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                             color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props) {
        super(props);
    }

    render() {
        const list = [
            {title: "Cold Wave", path: "coldWave"},
            {title: "Drought", path: "drought"},
            {title: "Earthquake", path: "earthquake"},
            {title: "Viral Outbreak", path: "epidemic"},
            {title: "Cyclone", path: "cyclone"},
            {title: "Fire / Wild Fire", path: "fire"},
            {title: "Flash Flood", path: "flashFlood"},
            {title: "Flood", path: "flood"},
            {title: "Heat Wave", path: "heatWave"},
            {title: "Land / Mud Slide", path: "landMud"},
            //{title: "Severe Local Storm", path: "localStorm"},
            {title: "Avalanche", path: "avalanche"},
            //{title: "Storm Surge", path: "stormSurge"},
            {title: "Tsunami", path: "tsunami"},
            {title: "Volcano", path: "volcano"},
        ];

        return (
            <View>
                <ScrollView>
                    <List>
                        {list.map((item, index) => (
                            <ListItem
                                key={index}
                                switchButton
                                title={item.title}
                                onPress={() => this.props.navigation.navigate(item.path)}
                            />
                        ))}
                    </List>
                </ScrollView>
            </View>
        )
    }
}

export default  (MainScreen);