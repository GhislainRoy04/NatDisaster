'use strict';
import React,{Component} from "react";
import {Text,View,Linking} from "react-native";
import {Button,ButtonGroup} from "react-native-elements";
import {Api} from "../../api";

class ColdWaveScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Cold Wave'
    });

    constructor(props){
        super(props);
        this.state=({summary:[],reports:[],selectedIndex:-1});

        this.onReportPress=this.onReportPress.bind(this);
        this.moreInfo = this.onReportPress.bind(this);
        this.updateIndex = this.updateIndex.bind(this);


    }

    render(){
        let {selectedIndex} = this.state;
        const buttons = ['Reports','Summary'];
        return(
            <View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />

                {this.state.reports.map((report,index)=>

                <View key={index}>
                    <Text>{report.fields.title}</Text>
                    <Button small title="More info" onPress={() => {
                        Linking.openURL(report.href).catch('Error occurred trying to open link.');
                    }}/>
                </View>

                )}
            </View>
        )
    }

    onReportPress(){
        Api.getDisasterByType('coldWave').then((res) => {
            this.setState({reports:res.data.data});
        });
    }

    onSummaryPress(){

    }

    moreInfo(uri){
        this.setState({selectedUri:uri});
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex});

        if(selectedIndex===0){
            this.setState({summary:[]});
            this.onReportPress();
        }

        if(selectedIndex===1){
            this.setState({reports:[]});
            this.onSummaryPress();
        }
    }
}

export default (ColdWaveScreen);