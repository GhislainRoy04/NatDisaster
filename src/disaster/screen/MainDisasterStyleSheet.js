'use strict';
import {StyleSheet,Dimensions} from "react-native";

export default StyleSheet.create({
    headLineContainer:{
        width:Dimensions.get('window').width,
        backgroundColor:"#faff50",
        justifyContent:'center',
    },
    headerLineText:{
        textAlign:'center',
        fontSize:14,
        fontWeight:'bold'
    }
});