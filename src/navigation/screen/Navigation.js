'use strict';
import React, {Component} from "react";
import {StackNavigator, DrawerNavigator, DrawerItems} from "react-navigation";
import {ScrollView,AsyncStorage,Dimensions,TouchableOpacity,Platform} from "react-native";
import {Icon} from "react-native-elements";
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

        const StackRoutes = StackNavigator({
           main:{screen:DrawerRoutes}
        },{
            navigationOptions: ({navigation}) => ({
                headerMode: "float",
                headerStyle: {
                    marginTop: Platform.OS==="android"?23:0,
                },
                title: "NatDisaster",
                headerLeft: <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}><Icon
                    name="menu"/></TouchableOpacity>
            })
        });

            if(token){
                return <StackRoutes/>
            }else{
                return <LoginScreen/>
            }


    }
}

export default (Navigation);