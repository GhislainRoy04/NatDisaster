'use strict';
import {StyleSheet,Dimensions,Platform} from "react-native";

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
    },
    dashboardOption:{
        marginTop:20
    },
    item:{
        height:500,
    },
    firstNews:{
        width:Dimensions.get('window').width-30,
        height:Dimensions.get('window').height/2
    },
    newsRow:{
        width:Dimensions.get('window').width-30,
        height:Platform.OS==='android' ? Dimensions.get('window').height/4 - 25 : Dimensions.get('window').height/4 ,
        display:'flex',
        flexDirection:'row'
    },
    headLineView:{
        display:'flex',
        flexDirection:'column',
        marginTop: Platform.OS === 'android' ? 25 :0
    },
    news:{
        width:Dimensions.get('window').width/2-30
    }
});