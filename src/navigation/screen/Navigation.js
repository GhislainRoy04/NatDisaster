'use strict';
import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import {DashboardScreen} from "../../dashboard";
import {LoginScreen} from "../../login";
import {SettingsScreen, PushNotificationScreen} from "../../settings";
import {DisasterScreen} from "../../disaster";

class Navigation extends Component {
    render() {
        const MainNavigation = StackNavigator({
            login: {
                screen: LoginScreen,
            },
            dashboard: {
                screen: DashboardScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            settings: {
                screen: SettingsScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            pushnotification: {
                screen: PushNotificationScreen,
                headerMode: "float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            earthquake: {
                screen: DisasterScreen,
                headerMode: "float",
                navigationOptions: {
                    title: "Earthquake",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            volcano: {
                screen: DisasterScreen,
                navigationOptions: {
                    title: "Volcano",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            avalanche: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Avalanche",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            coldWave: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Cold Wave",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            cyclone: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Cyclone",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            drought: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Drought",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            epidemic: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Viral Outbreak",
                    headerStyle: {

                        marginTop: 25
                    }
                }
            },
            fire: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Fire / Wild Fire",
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            flashFlood: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Flash Flood",
                    headerStyle: {

                        marginTop: 25
                    }
                }
            },
            flood: {
                screen: DisasterScreen, headerMode: "float",
                navigationOptions: {
                    title: "Flood",
                    headerStyle: {
                        marginTop: 25
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
        }, {
            lazyLoad: true,
            headerMode:'screen'
        });

        return (
            <MainNavigation/>
        )
    }
}

export default (Navigation);