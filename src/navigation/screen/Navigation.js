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
                screen: Stack,
                header: false,
                navigationOptions: {
                    drawerLabel:"Disasters",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            settings: {
                screen: Settings,
                headerMode: "none",
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
            drawerWidth:200,
            contentOptions:{
                style:{
                    marginTop:25,
                    backgroundColor:'#00a8de',
                },
                activeBackgroundColor:"#007ea6",
                activeTintColor:"#fff"
            },
            contentComponent: props =>
                <ScrollView contentContainerStyle={{backgroundColor:"#00a8de",height:Dimensions.get('window').height-78}}>
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
                    backgroundColor:"#000050"
                },
                headerTintColor:"#f7f7f7",
                title: "NatDisaster",
                headerLeft: <TouchableOpacity style={{marginLeft: 10}} onPress={() => navigation.navigate('DrawerOpen')}><Icon
                    name="menu" color="#fff"/></TouchableOpacity>
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