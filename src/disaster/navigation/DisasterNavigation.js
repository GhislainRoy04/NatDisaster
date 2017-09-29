'use strict';
import {Platform} from "react-native";
import {StackNavigator} from "react-navigation";
import MainDisasterScreen from "../screen/MainDisasterScreen";
import DisasterScreen from "../screen/DisasterScreen";
import {LoginScreen} from "../../login";

const DisasterNavigation =StackNavigator({
    default: {
        screen: MainDisasterScreen,
        navigationOptions: {
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    earthquake: {
        screen: DisasterScreen,
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
        screen: DisasterScreen,
        navigationOptions: {
            title: "Avalanche",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    coldWave: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Cold Wave",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    cyclone: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Cyclone",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    drought: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Drought",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    epidemic: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Viral Outbreak",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    fire: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Fire / Wild Fire",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    flashFlood: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Flash Flood",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    flood: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Flood",
            headerStyle: {
                marginTop: Platform.OS==="android"?25:0
            }
        }
    },
    heatWave: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Heat Wave",
            headerStyle: {
                marginTop: 25
            }
        }
    },
    landMud: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Land Slide",
            headerStyle: {
                marginTop: 25
            }
        }
    },
    localStorm: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Local Storm",
            headerStyle: {
                marginTop: 25
            }
        }
    },
    stormSurge: {
        screen: DisasterScreen,
        navigationOptions: {
            title: "Storm Surge",
            headerStyle: {
                marginTop: 25
            }
        }
    },
    tsunami: {
        screen: DisasterScreen,
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
},{
    headerMode:'none'
});

export default (DisasterNavigation);