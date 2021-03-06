'use strict';
import React, {Component} from "react";
import {View, Text, ScrollView, Alert} from "react-native";
import {Button, ButtonGroup, Card} from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import {Api} from "../../api";
import styles from "./DisasterCommonStyleSheet";
import AppStyles from "../../common/styling";
import _ from "lodash";

class EarthquakeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            summary: [],
            reports: [],
            moreInfo: [],
            selectedIndex: 0,
            type: props.navigation.state.routeName,
            visible: false
        });
        this.onReportPress = this.onReportPress.bind(this);
        this.onMoreInfo = this.onMoreInfo.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }

    componentWillMount() {
        this.onSummaryPress();
    }

    render() {
        let {selectedIndex, summary, reports, visible} = this.state;
        const buttons = ['Summary','Reports'];
        return (
            <View>
                <Spinner visible={visible} textContent={"Loading...."}/>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />

                <ScrollView style={styles.scrollViewContainer} contentContainerStyle={styles.scrollViewContentContainer}>
                    {reports.map((report, index) =>

                        <Card key={index}>
                            <Text style={styles.reportTitle}>{report.fields.title}</Text>
                            <Button icon={{name: 'expand-more'}} buttonStyle={styles.moreInfoButton} title="More info"
                                    onPress={() => this.onMoreInfo(report.href)}/>
                        </Card>
                    )}

                    {summary.map((report, index) =>

                        <Card key={index}>
                            <Text style={styles.reportTitle}>{report.fields.name} </Text>
                            <Text>Status : <Text style={this.getAlertLevel(report.fields.status)}>{report.fields.status}</Text> </Text>
                            <Button icon={{name: 'expand-more'}} buttonStyle={styles.moreInfoButton} title="More info"
                                    onPress={() => this.onMoreInfo(report.href)}/>
                        </Card>
                    )}
                </ScrollView>
            </View>
        )
    }

    getAlertLevel(status){
        if(status === 'alert'){
            return AppStyles.statusType.alert;
        }

        if(status==='current') {
            return AppStyles.statusType.current;
        }

        return AppStyles.statusType.past;
    }

    onReportPress() {
        this.setState({visible: true});
        Api.getReportsByType(this.state.type).then((res) => {
            this.setState({reports: res.data.data, visible: false});
        });
    }

    onSummaryPress() {
        this.setState({visible: true});
        Api.getDisasterByType(this.state.type).then((res) => {
            this.setState({summary: _.sortBy(res.data.data,'fields.status'), visible: false});
        });
    }

    onMoreInfo(uri) {
        this.setState({visible: true});
        Api.getMoreInfo(uri).then((res) => {
            this.setState({moreInfo: res.data.data[0]});
        }).then(() => {
            let {moreInfo, selectedIndex} = this.state;
            this.setState({visible: false});
            if (selectedIndex === 1) {
                Alert.alert(moreInfo.fields.title, moreInfo.fields.body);
            } else {
                Alert.alert(moreInfo.fields.name, moreInfo.fields.description);
            }
        })
    }

    updateIndex(selectedIndex) {
        this.setState({selectedIndex});

        if (selectedIndex === 0) {
            this.setState({reports: [], moreInfo: []});
            this.onSummaryPress();
        }

        if (selectedIndex === 1) {
            this.setState({summary: [], moreInfo: []});
            this.onReportPress();
        }
    }
}

export default (EarthquakeScreen);