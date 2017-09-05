'use strict';
import {StyleSheet,Platform} from "react-native";
import AppStyles from "../../common/styling";

export default StyleSheet.create({
    container:{
        marginTop:Platform.OS === 'android' ? 25 : 0,
        marginBottom:40,
    },
    title:{
        marginLeft:25,
        fontSize:19,
        fontWeight:'bold'
    },
    settingsContainer:{
        marginTop:25,
        display:'flex',
        flexDirection:'column',
    },
    button:{
        marginBottom:10,
        backgroundColor:AppStyles.defaultButton.backgroundColor,
        borderRadius:AppStyles.defaultButton.borderRadius
    }
});