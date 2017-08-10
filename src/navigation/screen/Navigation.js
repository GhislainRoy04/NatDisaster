'use strict';
import React, {Component} from "react";
import {StackNavigator, DrawerNavigator, DrawerItems} from "react-navigation";
import {ScrollView,AsyncStorage,Platform} from "react-native";
import {DashboardScreen} from "../../dashboard";
import {LoginScreen} from "../../login";
import {SettingsScreen, PushNotificationScreen} from "../../settings";
import {DisasterScreen, MainDisasterScreen} from "../../disaster";

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

        const Stack = {
                default: {
                    screen: MainDisasterScreen,
                    headerMode: "float",
                    navigationOptions: {
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                earthquake: {
                    screen: DisasterScreen,
                    headerMode: "float",
                    navigationOptions: {
                        title: "Earthquake",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                volcano: {
                    screen: DisasterScreen,
                    navigationOptions: {
                        title: "Volcano",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                avalanche: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Avalanche",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                coldWave: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Cold Wave",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                cyclone: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Cyclone",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                drought: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Drought",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                epidemic: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Viral Outbreak",
                        headerStyle: {

                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                fire: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Fire / Wild Fire",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                flashFlood: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Flash Flood",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                flood: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Flood",
                        headerStyle: {
                            marginTop: Platform.OS==="android"?25:0
                        }
                    }
                },
                heatWave: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Heat Wave",
                        headerStyle: {
                            marginTop: 25
                        }
                    }
                },
                landMud: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Land Slide",
                        headerStyle: {
                            marginTop: 25
                        }
                    }
                },
                localStorm: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Local Storm",
                        headerStyle: {
                            marginTop: 25
                        }
                    }
                },
                stormSurge: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Storm Surge",
                        headerStyle: {
                            marginTop: 25
                        }
                    }
                },
                tsunami: {
                    screen: DisasterScreen, headerMode: "float",
                    navigationOptions: {
                        title: "Tsunami",
                        headerStyle: {
                            marginTop: 25
                        }
                    }
                },
            login: {
                screen: LoginScreen,
            },
            };

        const Settings = {
            default:{
                screen : SettingsScreen,
                headerMode: 'float',
                navigationOptions:{
                    headerStyle:{
                        marginTop:Platform.OS==="android"?25:0
                    }
                }
            },
            pushnotification: {
                screen: PushNotificationScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: Platform.OS==="android"?25:0
                    }
                }
            }
        };

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
            },
        }, {
            lazyLoad: true,
            headerMode: 'screen',
            contentOptions:{
                style:{
                    marginTop:25
                }
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