import { StatusBar } from 'expo-status-bar'
import React from 'react'
import Expo from "expo"
import { StyleSheet, Text, View, ActivityIndicator, Image } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import AsyncStorage from '@react-native-community/async-storage'
import * as Font from 'expo-font'

const auth = require('../functions/auth')
const styled = require('../styledComponets/styles')

class Configuration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            label: "Carregando...",
            loading: true,
        }
    }

    async componentDidMount() {

        await Font.loadAsync({
            'SF-Pro-Display-Ultralight': require('../assets/fonts/SF-Pro-Display-Ultralight.ttf'),
            'SFProDisplay-Regular': require('../assets/fonts/SFProDisplay-Regular.ttf'),
            'SFProDisplay-Bold': require('../assets/fonts/SFProDisplay-Bold.ttf'),
            'SFProDisplay-Semibold': require('../assets/fonts/SFProDisplay-Semibold.ttf'),
            'SFProDisplay-Medium': require('../assets/fonts/SFProDisplay-Medium.ttf'),
        })
        this.setState({ loading: false });

        const { navigation } = this.props
        let email = await AsyncStorage.getItem('EMAIL')
        let psw = await AsyncStorage.getItem('PSW')

        try {
            navigation.dispatch(
                CommonActions.reset({
                    index: 0,
                    routes: [{ name: await auth.login(email, psw) ? 'Events' : 'Login' }],
                }))
        } catch (error) {
            console.log(error.toString(error));
        }
    }

    render() {
        if (this.state.loading) {
            return <ActivityIndicator />
        }
        return (
            <styled.configContainer>
                <styled.configIcon source={require('../assets/imgs/icon.png')}/>
                <styled.txtLoading>{this.state.label}</styled.txtLoading>
                <StatusBar style='auto' />
            </styled.configContainer>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#733DBE',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default function ({ props, route }) {
    const navigation = useNavigation()

    return <Configuration {...props} navigation={navigation} />
}
