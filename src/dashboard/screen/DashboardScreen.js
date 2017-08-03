'use strict';
import React, {Component} from "react";
import {ScrollView, View, TouchableOpacity, Text, Dimensions, Alert,AsyncStorage} from "react-native";
import {List, ListItem, Avatar,Button} from "react-native-elements";
import Carousel from "react-native-looped-carousel";
import Spinner from "react-native-loading-spinner-overlay";
import {Api} from "../../api";
import styles from "./DashboardStyleSheet";
import * as img from "../images";

let loggedIn;

class DashboardScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Dashboard",
        headerLeft:null,
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                           color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props) {
        super(props);
        this.state = ({headLine: [], size: {width: Dimensions.get('window').width, height: 50}, visible: false});
        this.onMoreInfo = this.onMoreInfo.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem('fb_token').then((res)=>{
            if(!res){
                loggedIn=false;
                this.props.navigation.navigate('login');
            }else{
                this.setState({visible: true});
                loggedIn = true;
                Api.getHeadline().then((res) => {
                    this.setState({headLine: res.data.data, visible: false});
                });
            }
        });
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({size: {...this.state.size, width: layout.width}});
    };

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
        let {headLine, size, visible} = this.state;
            return (
                <View>

                    <Spinner visible={visible} textContent={"Loading...."}/>
                    <View style={{marginBottom: -20}} onLayout={this._onLayoutDidChange}>
                        <Carousel
                            autoplay
                            style={size}
                            delay={5000}>
                            {headLine.length > 0 ? headLine.map((report, index) =>
                                    <TouchableOpacity onPress={() => this.onMoreInfo(report.href)}
                                                      style={[styles.headLineContainer, size]} key={index}>
                                        <Text style={styles.headerLineText}>{report.fields.title}</Text>
                                    </TouchableOpacity>
                                ) :
                                <View style={size}><Text> </Text></View>
                            }

                        </Carousel>
                    </View>
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

    onMoreInfo(uri) {
        this.setState({visible: true});
        Api.getMoreInfo(uri).then((res) => {
            this.setState({moreInfo: res.data.data[0]});
        }).then(() => {
            let {moreInfo} = this.state;
            this.setState({visible: false});
            Alert.alert(moreInfo.fields.title, moreInfo.fields.body);
        })
    }
}

export default (DashboardScreen);