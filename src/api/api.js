'use strict';
import axios from "axios";
import {Alert} from "react-native";

const reportURL = "https://api.reliefweb.int/v1/reports?appname=natdisaster&limit=20&preset=latest";
const disasterURL = "https://api.reliefweb.int/v1/disasters?appname=natdisaster";

export  default ({
    getDisasterByType: function (type) {
        let encodedType = encodeURIComponent(type);
        let requestUrl = `${disasterURL}&query[value]=${encodedType}`;

        return axios.get(requestUrl).then(function (response) {
            return response;
        }).catch(function (error) {
            Alert.alert("Error", `Error occurred during the get. ${error.data.error.message}`);
        });
    },
    getReportsByType:function (type) {
        let encodedType = encodeURIComponent(type);
        let requestUrl = `${reportURL}&query[value]=${encodedType}`;

        return axios.get(requestUrl).then(function (response) {
            return response;
        }).catch(function (error) {
            Alert.alert("Error", `Error occurred during the get. ${error.data.error.message}`);
        });
    },
    getMoreInfo:function(href){
        let encodedHref=encodeURIComponent(href);
        return axios.get(encodedHref).then(function(response){
            return response;
        }).catch(function(error){
            Alert.alert("Error",`Error occurred during the get. ${error.data.error.message}`);
        });
    }
});