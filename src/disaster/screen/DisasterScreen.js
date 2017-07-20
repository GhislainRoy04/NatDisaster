'use strict';
import React,{Component} from "react";
import {View,Text,ScrollView,Alert} from "react-native";
import {Button,ButtonGroup,Card} from "react-native-elements";
import Spinner from "react-native-loading-spinner-overlay";
import {Api} from "../../api";
import styles from "./DisasterCommonStyleSheet";

class EarthquakeScreen extends Component{

    constructor(props){
        super(props);
        this.state=({summary:[],reports:[],moreInfo:[],selectedIndex:0,type:props.navigation.state.routeName,visible:false});
        this.onReportPress=this.onReportPress.bind(this);
        this.onMoreInfo = this.onMoreInfo.bind(this);
        this.updateIndex = this.updateIndex.bind(this);
    }

    componentWillMount(){
        this.onReportPress();
    }

    render(){
        let {selectedIndex,summary,reports,visible} = this.state;
        const buttons = ['Reports','Summary'];
        return(
            <View>
                <Spinner visible={visible} textContent={"Loading...."} />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{height: 50}}
                />

                <ScrollView contentContainerStyle={{marginTop:10,flexDirection:'column',justifyContent:'space-between'}}>
                    {reports.map((report,index)=>

                        <Card key={index}>
                            <Text style={styles.reportTitle}>{report.fields.title}</Text>
                            <Button buttonStyle={styles.moreInfoButton} title="More info" onPress={() => this.onMoreInfo(report.href)}/>
                        </Card>

                    )}

                    {summary.map((report,index)=>

                        <Card key={index}>
                            <Text style={styles.reportTitle}>{report.fields.name}</Text>
                            <Button buttonStyle={styles.moreInfoButton} title="More info" onPress={() => this.onMoreInfo(report.href)}/>
                        </Card>

                    )}
                </ScrollView>
            </View>
        )
    }

    onReportPress(){
        this.setState({visible:true});
        Api.getReportsByType(this.state.type).then((res) => {
            this.setState({reports:res.data.data,visible:false});
        });
    }

    onSummaryPress(){
        this.setState({visible:true});
        Api.getDisasterByType(this.state.type).then((res) => {
            this.setState({summary:res.data.data,visible:false});
        });
    }

    onMoreInfo(uri){
        this.setState({visible:true});
        Api.getMoreInfo(uri).then((res)=>{
            this.setState({moreInfo:res.data.data[0]});
        }).then(() => {
            let {moreInfo,selectedIndex} = this.state;
            this.setState({visible:false});
            if(selectedIndex===0) {
                Alert.alert(moreInfo.fields.title, moreInfo.fields.body);
            }else{
                Alert.alert(moreInfo.fields.name,moreInfo.fields.description);
            }
        })
    }

    updateIndex (selectedIndex) {
        this.setState({selectedIndex});

        if(selectedIndex===0){
            this.setState({summary:[],moreInfo:[]});
            this.onReportPress();
        }

        if(selectedIndex===1){
            this.setState({reports:[],moreInfo:[]});
            this.onSummaryPress();
        }
    }
}

export default (EarthquakeScreen);