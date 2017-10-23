'use strict';
import React, {Component} from "react";
import {Text, ScrollView} from "react-native";
import {Card} from "react-native-elements";
import {Api} from "../../api";
import styles from "./DisasterCommonStyleSheet";

class EarthQuakeDisasterScreen extends Component{
    constructor(props){
        super(props);
        this.state = ({
            summary: [],
            type: props.navigation.state.routeName,
            visible: false
        });
        this.onSummaryPress = this.onSummaryPress.bind(this);
    }

    componentWillMount() {
        this.onSummaryPress();
    }

    render() {
        let {summary, visible} = this.state;
        return (
                <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.scrollViewContentContainer}>
                    {summary.map((report, index) =>

                        <Card key={index}>
                            <Text style={styles.reportTitle}>{report.properties.mag} - {report.properties.place} </Text>
                            <Text>Time : <Text style={this.getAlertLevel(report.fields.status)}>{report.properties.time}</Text> </Text>
                        </Card>
                    )}
                </ScrollView>
        )
    }

    onSummaryPress() {
        this.setState({visible: true});
        Api.getEarthQuakeMonthtly().then((res) => {
            this.setState({summary:res.features, visible: false});
        });
    }
}

export default (EarthQuakeDisasterScreen);