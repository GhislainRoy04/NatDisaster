'use strict';
import React,{Component} from "react";
import {View,Text,ScrollView} from "react-native";
import {Button,ButtonGroup} from "react-native-elements";
import {Api} from "../../api";
import styles from "./DisasterCommonStyleSheet";

class DroughtScreen extends Component{
    static navigationOptions = ({navigation}) =>({
        title:'Drought'
    });

    constructor(props){
        super(props);
        this.state=({summary:[],reports:[],moreInfo:[],selectedIndex:-1});

        this.onReportPress=this.onReportPress.bind(this);
        this.onMoreInfo = this.onMoreInfo.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }

    render(){
        let {selectedIndex,reports,summary,moreInfo} = this.state;
        const buttons = ['Reports','Summary'];
        return(
            <View>
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />

                <ScrollView contentContainerStyle={{marginTop:10,flexDirection:'column',justifyContent:'space-between'}}>
                    {reports.map((report,index)=>

                        <View style={styles.reportContainer} key={index}>
                            <Text style={styles.reportTitle}>{report.fields.title}</Text>
                            <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={() => this.onMoreInfo(report.href)}/>
                        </View>

                    )}

                    {summary.map((report,index)=>

                        <View style={styles.reportContainer} key={index}>
                            <Text style={styles.reportTitle}>{report.fields.name}</Text>
                            <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={() => this.onMoreInfo(report.href)}/>
                        </View>

                    )}

                    {moreInfo &&
                    <View>
                        <Text>{moreInfo.fields && moreInfo.fields.title}</Text>
                        <Text>{moreInfo.fields && moreInfo.fields.primary_country.name}</Text>
                        <Text>{moreInfo.fields && moreInfo.fields.body}</Text>
                    </View>
                    }
                </ScrollView>
            </View>
        )
    }

    onReportPress(){
        Api.getReportsByType('drought').then((res) => {
            this.setState({reports:res.data.data});
        });
    }

    onSummaryPress(){
        Api.getDisasterByType('drought').then((res) => {
            this.setState({summary:res.data.data});
        });
    }

    onMoreInfo(uri){
        Api.getMoreInfo(uri).then((res)=>{
            this.setState({moreInfo:res.data.data[0]});
        })
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

export default (DroughtScreen);