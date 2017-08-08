'use strict';
import React, {Component} from "react";
import {ScrollView, View, TouchableOpacity, Text, Dimensions, Alert, AsyncStorage} from "react-native";
import {List, ListItem, Avatar, Button} from "react-native-elements";
import Carousel from "react-native-looped-carousel";
import Spinner from "react-native-loading-spinner-overlay";
import {Api} from "../../api";
import styles from "./DashboardStyleSheet";

let loggedIn;

class DashboardScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Dashboard",
        headerLeft: null,
        headerRight: <Button title="Settings" raised backgroundColor="blue"
                             color="white" onPress={() => navigation.navigate('settings')}/>
    });

    constructor(props) {
        super(props);
        this.state = ({headLine: [], size: {width: Dimensions.get('window').width, height: 50}, visible: false});
        this.onMoreInfo = this.onMoreInfo.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem('fb_token').then((res) => {
            if (!res) {
                loggedIn = false;
                this.props.navigation.navigate('login');
            } else {
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

                <ScrollView style={styles.dashboardOption}>
                    <List wrapperStyle={styles.item}>
                        <ListItem
                            switchButton
                            avatar={<Avatar rounded/>}
                            title="Disasters"
                            onPress={() => this.props.navigation.navigate('disaster')}
                        />
                        <ListItem
                            switchButton
                            avatar={<Avatar rounded/>}
                            title="Jobs"
                            onPress={()=>{}}
                        />
                        <ListItem
                            switchButton
                            avatar={<Avatar rounded/>}
                            title="Training"
                            onPress={()=>{}}
                        />
                        <ListItem
                            switchButton
                            avatar={<Avatar rounded/>}
                            title="Countries"
                            onPress={()=>{}}
                        />
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