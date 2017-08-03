'use strict';
import {StyleSheet, Dimensions} from "react-native";


export default StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor:'#74d9ff'
    },
    guest: {
        position:'absolute',
        bottom:0
    },
    logo: {
        width: 100,
        height: 100
    },
    headerContainer: {
        marginTop:Dimensions.get('window').height/4,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignContent: 'center',
        justifyContent: 'space-around',
        marginBottom: 30
    },
    headerText: {
        textAlign:'center',
        marginTop: 30,
        color: 'white'
    },
    buttonContainer:{
        marginTop:Dimensions.get('window').height/4,
        height:Dimensions.get('window').height/4,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
    }
});