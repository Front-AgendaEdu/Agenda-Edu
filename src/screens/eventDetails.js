import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View, Dimensions, ImageBackground, ScrollView } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const screenHeight = Math.round(Dimensions.get('window').height)
const screenWidth = Math.round(Dimensions.get('window').width)

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

const auth = require('../functions/auth')
const styled = require('../styledComponets/styles')

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
            <styled.Container>
                <styled.eventDetailsBackground source={{uri: item.image}}>
                    <styled.containerDetails>
                        <styled.headersDetailsView>
                            <styled.dateView>
                                <styled.txtDayMonthView>
                                    <styled.txtDayMonth>{item.sendAt.getDate()}</styled.txtDayMonth>
                                    <styled.txtMonth>{item.curencyMonth.substring(0, 3).toUpperCase()}</styled.txtMonth>
                                </styled.txtDayMonthView>
                            </styled.dateView>
                            <styled.eventDetailsTitleView>
                                <styled.eventDetailsTitle>{item.title}</styled.eventDetailsTitle>
                            </styled.eventDetailsTitleView>
                        </styled.headersDetailsView>

                        <styled.headersClockDetailsView>
                            <EvilIcons
                                size={widthPercent * 6.5}
                                color="#666666"
                                name={'clock'}
                            />
                            <styled.txtClock>{item.editedTimeSendAt}</styled.txtClock>

                        </styled.headersClockDetailsView>

                        <styled.descriptionView>
                            <ScrollView>
                                <styled.txtEventDescription>{item.description}</styled.txtEventDescription>
                            </ScrollView>
                        </styled.descriptionView>

                    </styled.containerDetails>
                </styled.eventDetailsBackground>
                <StatusBar style='auto' />
            </styled.Container >
        )
    }
}

export default function ({ props, route }) {
    const navigation = useNavigation()
    const { item } = route.params

    return <EventDetails {...props} navigation={navigation} item={item} />
}



