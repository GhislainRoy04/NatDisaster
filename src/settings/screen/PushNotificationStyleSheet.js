'use strict';
import {StyleSheet,Platform} from "react-native";

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
    pushContainer:{
        marginTop:25,
        display:'flex',
        flexDirection:'column',
    }

})