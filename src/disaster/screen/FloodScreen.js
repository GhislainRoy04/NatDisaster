'use strict';
import React,{Component} from "react";
import {View,Text,Linking,ScrollView} from "react-native";
import {Button,ButtonGroup} from "react-native-elements";
import {Api} from "../../api";

class FloodScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Flood'
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

                <ScrollView contentContainerStyle={{marginTop:10,alignItems:'center',flexDirection:'column',justifyContent:'space-between'}}>
                    {this.state.reports.map((report,index)=>

                        <View  key={index}>
                            <Text>{report.fields.title}</Text>
                            <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={() => {
                                Linking.openURL(report.href).catch('Error occurred trying to open link.');
                            }}/>
                        </View>

                    )}

                    {this.state.summary.map((report,index)=>

                        <View  key={index}>
                            <Text>{report.fields.name}</Text>
                            <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={() => {
                                Linking.openURL(report.href).catch('Error occurred trying to open link.');
                            }}/>
                        </View>

                    )}
                </ScrollView>
            </View>
        )
    }

    onReportPress(){
        Api.getReportsByType('flood').then((res) => {
            this.setState({reports:res.data.data});
        });
    }

    onSummaryPress(){
        Api.getDisasterByType('flood').then((res) => {
            this.setState({summary:res.data.data});
        });
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

export default (FloodScreen);