'use strict';
import axios from "axios";
import {Alert,AsyncStorage} from "react-native";
import {Facebook} from "expo";

const appID = "1216068755171883";
const reportURL = "https://api.reliefweb.int/v1/reports?appname=natdisaster&limit=50&preset=latest";
const disasterURL = "https://api.reliefweb.int/v1/disasters?appname=natdisaster&limit=50";
const latestURL = "https://api.reliefweb.int/v1/reports?appname=natdisaster&limit=3&preset=latest";

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
        return axios.get(href).then(function(response){
            return response;
        }).catch(function(error){
            Alert.alert("Error",`Error occurred during the get. ${error.data.error.message}`);
        });
    },
    getHeadline:function(){
        return axios.get(latestURL).then(function(response){
            return response;
        }).catch(function(error){
            Alert.alert("Error",`Error occurred during the get. ${error.data.error.message}`);
        })
    },
    facebookLogin:async function(){
        let fbToken = await AsyncStorage.getItem('fb_token');

        if(fbToken){
            return fbToken;
        }else {
            // Login In
            let {type,token} = await Facebook.logInWithReadPermissionsAsync(appID,{
                permissions:['public_profile']
            });

            if(type==='cancel'){
                return "";
            }

            await AsyncStorage.setItem('fb_token',token);
            return token;
        }

    }
});