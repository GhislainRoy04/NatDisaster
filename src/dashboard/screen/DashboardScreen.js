'use strict';
import React, {Component} from "react";
import {View, Text, Dimensions, Alert, AsyncStorage, ScrollView} from "react-native";
import {Button, Card} from "react-native-elements";
import {Api} from "../../api";
import styles from "./DashboardStyleSheet";

let loggedIn;

class DashboardScreen extends Component {
    static navigationOptions = ({navigation}) => ({
        title: "Dashboard",
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

    render() {
        let {headLine} = this.state;
        return (
            <View style={styles.headLineView}>
                <Card title={headLine.length > 0 ? headLine[0].fields.title : "Latest"}
                      containerStyle={styles.firstNews}>
                    <ScrollView style={styles.scrollViewText}>
                        <Text style={styles.reportTitle}>{headLine.length > 0 && headLine[0].fields.body}</Text>
                    </ScrollView>
                    <Button buttonStyle={{marginBottom: 0}} title="View more"
                            onPress={() => this.onMoreInfo(headLine[0].href)}/>
                </Card>
                <View style={styles.newsRow}>
                    <Card containerStyle={styles.news} onPress={() => this.onMoreInfo(headLine[1].href)}>
                        <Text style={styles.reportTitle}>{headLine.length > 0 && headLine[1].fields.title}</Text>
                    </Card>

                    <Card containerStyle={styles.news} onPress={() => this.onMoreInfo(headLine[2].href)}>
                        <Text style={styles.reportTitle}>{headLine.length > 0 && headLine[2].fields.title}</Text>
                    </Card>

                </View>

                <View style={styles.newsRow}>
                    <Card containerStyle={styles.news} onPress={() => this.onMoreInfo(headLine[3].href)}>
                        <Text style={styles.reportTitle}>{headLine.length > 0 && headLine[3].fields.title}</Text>
                    </Card>

                    <Card containerStyle={styles.news} onPress={() => this.onMoreInfo(headLine[4].href)}>
                        <Text style={styles.reportTitle}>{headLine.length > 0 && headLine[4].fields.title}</Text>
                    </Card>
                </View>
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