'use strict';
import React, {Component} from "react";
import {ScrollView, View,Dimensions} from "react-native";
import {List, ListItem, Avatar,Button} from "react-native-elements";
import * as img from "../images";

class DashboardScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Disasters",
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                             color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props) {
        super(props);
        this.state = ({headLine: [], size: {width: Dimensions.get('window').width, height: 50}, visible: false});
    }


    render() {
        const list = [
            //{title: "Cold Wave", path: "coldWave"},
            {title: "Drought", avatar: img.drought, path: "drought"},
            {title: "Earthquake", avatar: img.earthquake, path: "earthquake"},
            {title: "Viral Outbreak", avatar: img.viral, path: "epidemic"},
            {title: "Cyclone", avatar: img.tornado, path: "cyclone"},
            {title: "Fire / Wild Fire", avatar: img.fire, path: "fire"},
            //{title: "Flash Flood", path: "flashFlood"},
            {title: "Flood", avatar: img.flood, path: "flood"},
            {title: "Heat Wave", avatar: img.heatwave, path: "heatWave"},
            //{title: "Land / Mud Slide", path: "landMud"},
            //{title: "Severe Local Storm", path: "localStorm"},
            {title: "Avalanche", avatar: img.avalanche, path: "avalanche"},
            //{title: "Storm Surge", path: "stormSurge"},
            {title: "Tsunami", avatar: img.tsunami, path: "tsunami"},
            {title: "Volcano", avatar: img.volcano, path: "volcano"},
        ];
        return (
            <View>
                <ScrollView>
                    <List>
                        {list.map((item, index) => (
                            <ListItem
                                key={index}
                                switchButton
                                avatar={<Avatar rounded source={item.avatar}/>}
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

export default (DashboardScreen);