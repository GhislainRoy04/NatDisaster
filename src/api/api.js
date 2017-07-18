'use strict';
import axios from "axios";
import {Alert} from "react-native";

const disasterURL = "https://api.reliefweb.int/v1/reports?appname=natdisaster";

export  default ({
    getDisasterByType: function (type) {
        let encodedType = encodeURIComponent(type);
        let requestUrl = `${disasterURL}&query[value]=${encodedType}`;

        axios.get(requestUrl).then(function(response){
            if(response.data.length>0){
                return response.data;
            }else{
                Alert.alert("Error",`Error occurred during the get. ${response.error.message}`);
            }
        },function(response){
            Alert.alert("Error",`Error occurred during the get. ${response.error.message}`);
        });
    }
});