'use strict';
import {Platform} from "react-native";
import MainDisasterScreen from "../screen/MainDisasterScreen";
import DisasterScreen from "../screen/DisasterScreen";
import {LoginScreen} from "../../login";

const DisasterNavigation ={
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

export default (DisasterNavigation);