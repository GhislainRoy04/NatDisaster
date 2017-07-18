'use strict';
import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import {MainScreen} from "../../main";
import {SettingsScreen, PushNotificationScreen} from "../../settings";
import * as disaster from "../../disaster";

class Navigation extends Component {
    render() {
        const MainNavigation = StackNavigator({
            MainScreen: {
                screen: MainScreen,
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
                screen: disaster.EarthquakeScreen,
                headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            volcano:{
                screen:disaster.VolcanoScreen,
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }
            },
            avalanche:{screen:disaster.AvalancheScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            coldWave:{screen:disaster.ColdWaveScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            cyclone:{screen:disaster.CycloneScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            drought:{screen:disaster.DroughtScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            epidemic:{screen:disaster.EpidemicScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            fire:{screen:disaster.FireWildFireScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            flashFlood:{screen:disaster.FlashFloodScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            flood:{screen:disaster.FloodScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            heatWave:{screen:disaster.HeatWaveScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            landMud:{screen:disaster.LandMudSlideScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            localStorm:{screen:disaster.LocalStormScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            stormSurge:{screen:disaster.StormSurgeScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
            tsunami:{screen:disaster.TsunamiScreen, headerMode:"float",
                navigationOptions: {
                    headerStyle: {
                        marginTop: 25
                    }
                }},
        });

        return (
            <MainNavigation/>
        )
    }
}

export default (Navigation);