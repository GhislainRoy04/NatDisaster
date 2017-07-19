'use strict';
import React,{Component} from "react";
import {Text,View,ScrollView} from "react-native";
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
        this.onMoreInfo = this.onMoreInfo.bind(this);
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
                        <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={() => this.onMoreInfo(report.href)}/>
                    </View>

                    )}

                    {this.state.summary.map((report,index)=>

                        <View  key={index}>
                            <Text>{report.fields.name}</Text>
                            <Button buttonStyle={{width:100,borderRadius:25}} title="More info" onPress={()=>this.onMoreInfo(report.href)}/>
                        </View>

                    )}

                    {this.state.moreInfo&&
                        <View>
                            <Text>{this.state.moreInfo.fields.title}</Text>
                            <Text>{this.state.moreInfo.fields.primary_country.name}</Text>
                            <Text>{this.state.moreInfo.fields.body}</Text>
                        </View>
                    }
                </ScrollView>
            </View>
        )
    }

    onReportPress(){
        Api.getReportsByType('coldWave').then((res) => {
            this.setState({reports:res.data.data});
        });
    }

    onSummaryPress(){
        Api.getDisasterByType('coldWave').then((res) => {
            this.setState({summary:res.data.data});
        });
    }

    onMoreInfo(uri){
        Api.getMoreInfo(uri).then((res)=>{
            console.log(res.data.data[0]);
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

export default (ColdWaveScreen);