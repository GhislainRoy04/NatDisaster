'use strict';
import {StyleSheet, Dimensions, Platform} from "react-native";
import AppStyles from "../../common/styling";

export default StyleSheet.create({
    headLineContainer: {
        width: Dimensions.get('window').width,
        backgroundColor: "#faff50",
        justifyContent: 'center',
    },
    headerLineText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: 'bold'
    },
    dashboardOption: {
        marginTop: 5
    },
    item: {
        height: 500,
    },
    firstNews: {
        width: Dimensions.get('window').width - 30,
        height: Dimensions.get('window').height / 2-50
    },
    newsRow: {
        width: Dimensions.get('window').width - 30,
        height: Platform.OS === 'android' ? Dimensions.get('window').height / 4 - 25 : Dimensions.get('window').height / 4,
        display: 'flex',
        flexDirection: 'row'
    },
    headLineView: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: Platform.OS === 'android' ? 3 : 0
    },
    news: {
        width: Dimensions.get('window').width / 2 - 30
    },
    scrollViewText: {
        height: Dimensions.get('window').height / 2 - 200,
        marginBottom: 10
    },
    viewMoreButton: {
        marginBottom: 0,
        backgroundColor: AppStyles.defaultButton.backgroundColor,
        borderRadius: AppStyles.defaultButton.borderRadius,
    }
});