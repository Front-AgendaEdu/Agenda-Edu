import React from 'react'
import { StyleSheet, Dimensions, PixelRatio, Platform } from 'react-native'
import * as Font from 'expo-font'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)



export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },

    // ../screens/configuration.js
    txtLoading: {
        fontSize: widthPercent * 7,
        fontFamily: 'SFProDisplay-Bold',
        color: '#333333',
    },

    // ../screens/login.js
    formContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
        width: null,
        height: null,
    },
    btnEntrarContainer: {
        width: '100%',
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },

    containerLoginInput: {

    },
    containerEmail: {

    },
    containerPsw: {
        marginTop: heightPercent * 2,
    },
    labelMain: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: widthPercent * 7.2,
        color: '#333333',
        marginBottom: widthPercent * 8,
    },

    labelEmail: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: widthPercent * 4.2,
        color: '#666666',
        marginBottom: widthPercent * 1.5,
    },
    ViewLoginInput: {
        flexDirection: "row",
    },
    loginInput: {
        width: widthPercent * 87.2,
        height: heightPercent * 9.5,
        borderRadius: widthPercent * 1,
        fontSize: widthPercent * 5,
        fontFamily: 'SFProDisplay-Regular',
        borderColor: '#733DBE',
        borderWidth: 1,
        backgroundColor: '#FFF',
        color: '#333333',
        paddingRight: '14%',
        paddingLeft: '7%',

    },
    EmailInputIcon: {
        position: "absolute",
        right: widthPercent * 3,
        alignSelf: "center"

    },
    btnChangeVisblePsw: {
        position: "absolute",
        right: widthPercent * 3,
        alignSelf: "center",
        width: widthPercent * 10,
        height: widthPercent * 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnEntrar: {
        alignSelf: "center",
        width: '82%',
        height: widthPercent * 15,
        borderRadius: widthPercent * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#733DBE',
        bottom: 0,
        marginBottom: '7%',
    },
    labelBtnEntrar: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: widthPercent * 5,
        color: '#FFFFFF',
    },

    // ../screens/events.js
    homeContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingBottom: heightPercent * 5,
        width: null,
        height: null,
    },
    mainContainer: {
        width: '88%',
        alignItems: "center",
        marginTop: heightPercent * 5,
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: heightPercent * 2,
    },
    headerLine: {
        borderBottomColor: '#C3CBD2',
        borderBottomWidth: 1,
        justifyContent: "flex-start",
    },
    headerLabel: {
        fontFamily: 'SFProDisplay-Semibold',
        fontSize: widthPercent * 4.1,
        color: '#999999',
    },
    eventContainer: {
        width: '100%',
        height: heightPercent * 23,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: widthPercent * 2,
        marginTop: heightPercent * 1.5,
        shadowColor: '#733DBE1A',
        shadowOffset: { width: 8, height: 8 },
        shadowOpacity: 1,
        elevation: widthPercent * 2,
        backgroundColor: '#FFF',
    },
    eventLateralMarker: {
        width: '2.5%',
        height: '100%',
        backgroundColor: '#733DBE',
        borderTopLeftRadius: widthPercent * 2,
        borderBottomLeftRadius: widthPercent * 2,
    },
    eventContent: {
        flex: 1,
        height: '100%',
        backgroundColor: '#FFF',
        borderTopRightRadius: widthPercent * 2,
        borderBottomRightRadius: widthPercent * 2,
        justifyContent: "center"
    },
    imageView: {
        width: '23%',
        backgroundColor: '#FFF',
        marginLeft: widthPercent * 4,
    },
    cardImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain',
        borderRadius: widthPercent * 18,
    },
    eventContentType: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: widthPercent * 4,
        color: '#999999',
        marginTop: widthPercent * -2,
        marginLeft: widthPercent * 3.5,

    },
    eventTitle: {
        fontFamily: 'SFProDisplay-Medium',
        fontSize: widthPercent * 4.5,
        color: '#333333',
        marginTop: widthPercent * 2,
        marginLeft: widthPercent * 3.5,
        width: '80%'
    },
    clockView: {
        flexDirection: "row",
        marginTop: heightPercent * 0.3,
        marginLeft: widthPercent * 2.5,
        alignItems: "center",
        textAlignVertical: "top"
    },
    txtClock: {
        fontFamily: 'SFProDisplay-Regular',
        color: '#666666',
        fontSize: widthPercent * 4.5,
        textAlignVertical: "center",
    },
    eventDateTime: {
        width: widthPercent * 58,
        fontFamily: 'SFProDisplay-Regular',
        color: '#999999',
        fontSize: widthPercent * 3.2,
        marginLeft: heightPercent * 2,
        marginTop: heightPercent * 1,
    },
    lateralMenu: {
        paddingVertical: widthPercent * 5
    },
    btnSair: {
        alignSelf: "center",
        width: '95%',
        height: widthPercent * 15,
        borderRadius: widthPercent * 2,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#733DBE',
        bottom: 0,
        marginBottom: '7%',
    },
    loadView: {
        width: '100%',
        height: '10%',
        position: 'absolute',
        backgroundColor: '#733DBE',
        bottom: 0,
        borderTopLeftRadius: widthPercent * 7,
        borderTopRightRadius: widthPercent * 7,
        justifyContent: "center",
        alignItems: "center",
    },
    txtLoadingEvents: {
        fontFamily: 'SFProDisplay-Bold',
        fontSize: Platform.OS === 'ios' ? widthPercent * 5 : widthPercent * 7 ,
        color: '#FFF',
        marginBottom: Platform.OS === 'ios' ? widthPercent * 1 : 0 
    },
    // ../screens/eventDetails.js
    eventDetailsBackground: {
        flex: 1,
        width: '100%',
        resizeMode: "cover",
        justifyContent: "center"
    },
    containerDetails: {
        width: '100%',
        height: '72%',
        position: 'absolute',
        backgroundColor: '#FFF',
        bottom: 0,
        borderTopLeftRadius: widthPercent * 7,
        borderTopRightRadius: widthPercent * 7,
        paddingHorizontal: widthPercent * 8,
        paddingVertical: widthPercent * 8,
        alignItems: "flex-end",
    },
    headersDetailsView: {
        width: '100%',
        flexDirection: "row",
        alignItems: "center",
    },
    dateView: {
        width: widthPercent * 17,
        height: widthPercent * 17,
        backgroundColor: 'rgba(115, 61, 190, 0.1)',
        borderRadius: widthPercent * 2,
    },
    txtDayMonthView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    txtDayMonth: {
        fontSize: widthPercent * 6,
        color: '#733DBE',
        fontFamily: 'FProDisplay-Bold',
        fontWeight: "bold",
        alignSelf: "auto"
    },
    txtMonthView: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        justifyContent: "flex-start",
    },
    txtMonth: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: widthPercent * 4,
        color: '#733DBE',
    },
    eventDetailsTitleView: {
        width: '90%',
        borderRadius: widthPercent * 2,
        textAlignVertical: "center",
    },
    eventDetailsTitle: {
        fontSize: widthPercent * 6,
        fontFamily: 'SFProDisplay-Bold',
        marginLeft: widthPercent * 4,
    },
    eventDetailsClock: {
       
    },
    headersClockDetailsView: {
        width: '76%',
        marginTop: widthPercent * 2.5,
        flexDirection: "row",
        alignItems: "center",

    },
    descriptionView: {
        width: '100%',
        height: '60%',
        marginTop: widthPercent * 8,
        flexDirection: "row",
    },
    txtEventDescription: {
        fontFamily: 'SFProDisplay-Regular',
        fontSize: widthPercent * 4.7,
        color: '#666666',
        textAlign: "justify"
    },
})
