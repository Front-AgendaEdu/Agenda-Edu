import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const screenHeight = Math.round(Dimensions.get('window').height)
const screenWidth = Math.round(Dimensions.get('window').width)

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

const auth = require('../functions/auth')

class EventDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'student@ae.com',
            psw: '',
            isVisiblePsw: false,
            label: "Login",
            borderColorEmail: '#ABB1B7',
            borderColorPsw: '#ABB1B7',
        }
    }

    async componentDidMount() {

    }

    render() {
        const { navigation, item } = this.props


        return (
            <View style={Styles.container}>
                <ImageBackground source={require('../assets/imgs/image.jpeg')} style={Styles.eventDetailsBackground}>
                    <View style={Styles.containerDetails}>
                        <View style={Styles.headersDetailsView}>
                            <View style={Styles.dateView}>

                                <View style={Styles.txtDayMonthView}>
                                    <Text style={Styles.txtDayMonth}>{item.sendAt.getDate()}</Text>
                                    <Text style={Styles.txtMonth}>{ item.curencyMonth.substring(0, 3).toUpperCase()}</Text>
                                </View>
                                {/* <View style={Styles.txtMonthView}>
                                    <Text style={Styles.txtMonth}>JAN</Text>
                                </View> */}
                            </View>
                            <View style={Styles.eventDetailsTitleView}>
                                <Text style={Styles.eventDetailsTitle}>{item.title}</Text>
                            </View>
                        </View>

                        <View style={Styles.headersClockDetailsView}>
                            <EvilIcons
                                style={Styles.eventDetailsClock}
                                size={widthPercent * 6.5}
                                color="#666666"
                                containerStyle={{ backgroundColor: "#F00" }}
                                name={'clock'}
                            />
                            {/* <Text style={Styles.txtClock}>{`${item.sendAt.getHours() < 10 ? `0${item.sendAt.getHours()}` : item.sendAt.getHours()}:00`}</Text> */}
                            <Text style={Styles.txtClock}>{item.editedTimeSendAt}</Text>

                        </View>

                        <View style={Styles.descriptionView}>
                            <ScrollView>
                                <Text style={Styles.txtEventDescription}>{item.description}</Text>
                            </ScrollView>
                        </View>

                    </View>
                </ImageBackground>
                <StatusBar style='auto' />
            </View >
        )
    }
}

export default function ({ props, route }) {
    const navigation = useNavigation()
    const { item } = route.params

    return <EventDetails {...props} navigation={navigation} item={item} />
}



