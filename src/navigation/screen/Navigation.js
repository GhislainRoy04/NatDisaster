'use strict';
import React, {Component} from "react";
import {StackNavigator, DrawerNavigator, DrawerItems} from "react-navigation";
import {ScrollView,AsyncStorage,Dimensions} from "react-native";
import {DashboardScreen} from "../../dashboard";
import {LoginScreen} from "../../login";
import {Settings} from "../../settings";
import {Stack} from "../../disaster";

class Navigation extends Component {
    constructor(props){
        super(props);
        this.state={token:null};
    }

    componentWillMount(){
        AsyncStorage.getItem('fb_token').then(res=>{
           this.setState({token:res});
        });
    }
    render() {
        let {token}= this.state;
        const DrawerRoutes = DrawerNavigator({
            dashboard: {
                screen: DashboardScreen,
                headerMode: "float",
                navigationOptions: {
                    drawerLabel:"Dashboard",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            disaster: {
                screen: StackNavigator(Stack, {initialRouteName: 'default'}),
                headerMode: "float",
                navigationOptions: {
                    drawerLabel:"Disasters",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            settings: {
                screen: StackNavigator(Settings,{initialRouteName:'default'}),
                headerMode: "float",
                navigationOptions: {
                    drawerLabel:"Settings",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            }
        }, {
            lazyLoad: true,
            headerMode: 'screen',
            contentOptions:{
                style:{
                    marginTop:25,
                    backgroundColor:'#c0c0c0',
                },
                activeBackgroundColor:"#848484",
                activeTintColor:"#fff"
            },
            contentComponent: props =>
                <ScrollView contentContainerStyle={{backgroundColor:"#c0c0c0",height:Dimensions.get('window').height}}>
                    <DrawerItems {...props} />
                </ScrollView>
        });

            if(token){
                return <DrawerRoutes/>
            }else{
                return <LoginScreen/>
            }


    }
}

export default (Navigation);