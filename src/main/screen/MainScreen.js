'use strict';
import React, {Component} from "react";
import {ScrollView, View,Text,Dimensions} from "react-native";
import {Button, List, ListItem,Avatar} from "react-native-elements";
import Carousel from "react-native-looped-carousel";
import {Api} from "../../api";
import styles from "./MainStyleSheet";
import * as img from "../images";

class MainScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Disaster",
        //headerRight: <Button title="Settings" raised backgroundColor="blue"
          //                   color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props){
        super(props);
        this.state=({headLine:[],size:{width:Dimensions.get('window').width,height:50}});
    }

    componentWillMount(){
        Api.getHeadline().then((res) => {
            this.setState({headLine:res.data.data});
        });
    }

    _onLayoutDidChange=(e)=>{
        const layout = e.nativeEvent.layout;
        this.setState({ size: {...this.state.size, width: layout.width} });
    };

    render() {
        const list = [
            //{title: "Cold Wave", path: "coldWave"},
            {title: "Drought", avatar:img.drought, path: "drought"},
            {title: "Earthquake", avatar:img.earthquake, path: "earthquake"},
            {title: "Viral Outbreak", avatar:img.viral, path: "epidemic"},
            {title: "Cyclone", avatar:img.tornado, path: "cyclone"},
            {title: "Fire / Wild Fire",avatar:img.fire, path: "fire"},
            //{title: "Flash Flood", path: "flashFlood"},
            {title: "Flood", avatar:img.flood, path: "flood"},
            {title: "Heat Wave", avatar:img.heatwave, path: "heatWave"},
            //{title: "Land / Mud Slide", path: "landMud"},
            //{title: "Severe Local Storm", path: "localStorm"},
            {title: "Avalanche", avatar:img.avalanche, path: "avalanche"},
            //{title: "Storm Surge", path: "stormSurge"},
            {title: "Tsunami", avatar:img.tsunami, path: "tsunami"},
            {title: "Volcano", avatar:img.volcano, path: "volcano"},
        ];
        let {headLine,size} = this.state;

        return (
            <View>
                <View style={{marginBottom:-20}} onLayout={this._onLayoutDidChange}>
                    <Carousel
                    autoplay={headLine.length>0}
                    style={size}
                    delay={5000}>
                        {headLine.length>0 ? headLine.map((report,index)=>
                            <View style={[styles.headLineContainer,size]} key={index}>
                                <Text style={styles.headerLineText}>{report.fields.title}</Text>
                            </View>
                        ):
                        <View style={size}><Text>Loading Headline...</Text></View>
                        }

                    </Carousel>
                </View>
                <ScrollView>
                    <List>
                        {list.map((item, index) => (
                            <ListItem
                                key={index}
                                switchButton
                                avatar={<Avatar rounded source={item.avatar} />}
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