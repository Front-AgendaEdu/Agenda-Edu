import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Platform } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
// import StyledComponents from '../styled-componets/styles'
// import {Container ,TextInputLabel} from '../styledComponets/styles'


const screenHeight = Math.round(Dimensions.get('window').height)
const screenWidth = Math.round(Dimensions.get('window').width)

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);


global.isVisiblePsw = false
const auth = require('../functions/auth')
const styled = require('../styledComponets/styles')

export class Login extends React.Component {
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
        const { navigation } = this.props

        return (
            <DismissKeyboard>
                <KeyboardAvoidingView style={Styles.container} behavior="padding" enabled={Platform.OS === 'ios' ? true : false} >
                    <styled.Container>
                        <styled.containerLoginInput>
                            <styled.LoginTitle>
                                Faça seu login 🔑
                            </styled.LoginTitle>

                            <styled.TextInputLabel>
                                Email ou usuário
                            </styled.TextInputLabel>

                            <styled.InputView>
                                <styled.EmailInput
                                    focusColor={this.state.borderColorEmail}
                                    testID={'inputEmail'}
                                    value={this.state.email}
                                    onFocus={() => { this.setState({ borderColorEmail: '#733DBE' }), global.inputEmail = true }}
                                    onBlur={() => { this.setState({ borderColorEmail: '#ABB1B7' }) }}
                                    autoCapitalize={'none'}
                                    onChangeText={value => { this.setState({ email: value }) }}
                                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                                    underlineColorAndroid='transparent'
                                    keyboardType={'email-address'}

                                />
                                <styled.EmailInputIcon
                                    name={'email-outline'}
                                />
                            </styled.InputView>
                        </styled.containerLoginInput>

                        <styled.containerPsw >
                            <styled.TextInputLabel>
                                Senha
                            </styled.TextInputLabel>

                            <styled.InputView>
                                <styled.PswlInput
                                    testID={'inputPassword'}
                                    focusColor={this.state.borderColorPsw}
                                    value={this.state.psw}
                                    onFocus={() => { this.setState({ borderColorPsw: '#733DBE' }), global.inputPassword = true }}
                                    onBlur={() => { this.setState({ borderColorPsw: '#ABB1B7' }) }}
                                    autoCapitalize={'none'}
                                    onChangeText={value => { this.setState({ psw: value }) }}
                                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                                    underlineColorAndroid='transparent'
                                    secureTextEntry={!this.state.isVisiblePsw}
                                />
                                <styled.BtnView
                                    testID={'showPswBtn'}
                                    onPress={() => { this.setState({ isVisiblePsw: !this.state.isVisiblePsw }), global.isVisiblePsw = !this.state.isVisiblePsw }}
                                >
                                    <styled.PswlInputIcon
                                        name={this.state.isVisiblePsw == true ? 'eye-off' : 'eye'}
                                    />
                                </styled.BtnView>
                            </styled.InputView>
                        </styled.containerPsw>
                    </styled.Container>


                    <styled.btnEntrarContainer>
                        <styled.btnEntrar
                            onPress={() => { auth.login(this.state.email, this.state.psw, true, navigation) }}
                            testID={'entryButton'}

                        >
                            <styled.labelBtn>Entrar</styled.labelBtn>
                        </styled.btnEntrar>
                        <StatusBar style='auto' />
                    </styled.btnEntrarContainer>

                </KeyboardAvoidingView>
            </DismissKeyboard>
        )
    }
}

export default function ({ props, route }) {
    const navigation = useNavigation()

    return <Login {...props} navigation={navigation} />
}
