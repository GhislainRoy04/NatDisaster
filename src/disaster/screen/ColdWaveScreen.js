'use strict';
import React,{Component} from "react";
import {Text,View,Linking} from "react-native";
import {Button} from "react-native-elements";
import {Api} from "../../api";

class ColdWaveScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Cold Wave'
    });

    constructor(props){
        super(props);
        this.state=({pastEvent:[],currentEvent:[],alert:[],reports:[]});
        this.onReportPress=this.onReportPress.bind(this);
        this.moreInfo = this.onReportPress.bind(this);
    }

    render(){
        return(
            <View>
                <Text>Cold wave</Text>
                <Button title="Reports" onPress={()=>{this.onReportPress()}} />

                {this.state.reports.map((report,index)=>

                <View key={index}>
                    <Text>{report.fields.title}</Text>
                    <Button title="More info" onPress={() => {
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

    moreInfo(uri){
        this.setState({selectedUri:uri});
    }
}

export default (ColdWaveScreen);