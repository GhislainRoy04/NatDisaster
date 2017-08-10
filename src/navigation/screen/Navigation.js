'use strict';
import React, {Component} from "react";
import {StackNavigator, DrawerNavigator, DrawerItems} from "react-navigation";
import {ScrollView,AsyncStorage} from "react-native";
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
                name: 'Dashboard',
                screen: DashboardScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            disaster: {
                name: 'Disasters',
                screen: StackNavigator(Stack, {initialRouteName: 'default'}),
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            settings: {
                name:'Settings',
                screen: StackNavigator(Settings,{initialRouteName:'default'}),
                headerMode: "float",
                navigationOptions: {
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
                <ScrollView>
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