'use strict';
import {StyleSheet} from "react-native";
import AppStyles from "../../common/styling";

export default StyleSheet.create({
    reportContainer:{
        marginLeft:5,
        marginRight:5,
        borderWidth:1,
        borderColor:'black',
        marginBottom:5
    },
    reportTitle:{
        fontSize:16,
        fontWeight:'bold'
    },
    moreInfoButton:{
        marginLeft:0,
        marginRight:0,
        borderRadius:AppStyles.defaultButton.borderRadius,
        marginBottom:10,
        marginTop:10,
        backgroundColor: AppStyles.defaultButton.backgroundColor
    },
    scrollViewContentContainer:{
        marginTop: 10,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    scrollViewContainer:{
        marginBottom:80
    }
});