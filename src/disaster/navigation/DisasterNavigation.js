'use strict';
import {Platform} from "react-native";
import {StackNavigator} from "react-navigation";
import MainDisasterScreen from "../screen/MainDisasterScreen";
import DisasterScreen from "../screen/DisasterScreen";
import {LoginScreen} from "../../login";

const DisasterNavigation =StackNavigator({
    default: {
        screen: MainDisasterScreen,
        headerMode: "float",
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    earthquake: {
        screen: DisasterScreen,
        headerMode: "float",
        navigationOptions: {
            title: "Earthquake",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    volcano: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Volcano",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    avalanche: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Avalanche",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    coldWave: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Cold Wave",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    cyclone: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Cyclone",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    drought: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Drought",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    epidemic: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Viral Outbreak",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    fire: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Fire / Wild Fire",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    flashFlood: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Flash Flood",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    flood: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Flood",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            },header:null
        }
    },
    heatWave: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Heat Wave",
            headerStyle: {
                marginTop: 25
            },header:null
        }
    },
    landMud: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Land Slide",
            headerStyle: {
                marginTop: 25
            },header:null
        }
    },
    localStorm: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Local Storm",
            headerStyle: {
                marginTop: 25
            },header:null
        }
    },
    stormSurge: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Storm Surge",
            headerStyle: {
                marginTop: 25
            },header:null
        }
    },
    tsunami: {
        screen: DisasterScreen, headerMode: "float",
        navigationOptions: {
            title: "Tsunami",
            headerStyle: {
                marginTop: 25
            },header:null
        }
    },
    login: {
        screen: LoginScreen,
    },
});

export default (DisasterNavigation);