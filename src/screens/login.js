import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, TextInput, Dimensions, KeyboardAvoidingView, TouchableOpacity, Keyboard, TouchableWithoutFeedback, Platform} from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import Styles from '../styles/styles'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const screenHeight = Math.round(Dimensions.get('window').height)
const screenWidth = Math.round(Dimensions.get('window').width)

const widthPercent = (screenWidth / 100)
const heightPercent = (screenHeight / 100)

const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
);

const auth = require('../functions/auth')

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // email: 'student@ae.com',
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
            // <View style={Styles.container}>
            <DismissKeyboard>
                <KeyboardAvoidingView style={Styles.container} behavior="padding" enabled={Platform.OS === 'ios' ? true : false} >

                    <View style={Styles.formContainer}>
                        <View style={Styles.containerLoginInput}>
                            <Text style={Styles.labelMain}>
                                Faça seu login 🔑
                            </Text>

                            <Text style={Styles.labelEmail}>
                                Email ou usuário
                            </Text>

                            <View style={Styles.ViewLoginInput}>
                                <TextInput
                                    style={[Styles.loginInput, { borderColor: this.state.borderColorEmail }]}
                                    value={this.state.email}
                                    onFocus={() => { this.setState({ borderColorEmail: '#733DBE' }) }}
                                    onBlur={() => { this.setState({ borderColorEmail: '#ABB1B7' }) }}
                                    autoCapitalize={'none'}
                                    onChangeText={value => { this.setState({ email: value }) }}
                                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                                    underlineColorAndroid='transparent'
                                    keyboardType={'email-address'}

                                />
                                <MaterialCommunityIcons
                                    style={Styles.EmailInputIcon}
                                    name={'email-outline'}
                                    size={widthPercent * 8}
                                    color={'#AAAAAA'}
                                />
                            </View>
                        </View>

                        <View style={Styles.containerPsw}>

                            <Text style={Styles.labelEmail}>
                                Senha
                        </Text>

                            <View style={Styles.ViewLoginInput}>
                                <TextInput
                                    style={[Styles.loginInput, { borderColor: this.state.borderColorPsw }]}
                                    value={this.state.psw}
                                    // placeholder={'E-mail'}
                                    onFocus={() => { this.setState({ borderColorPsw: '#733DBE' }) }}
                                    onBlur={() => { this.setState({ borderColorPsw: '#ABB1B7' }) }}
                                    autoCapitalize={'none'}
                                    onChangeText={value => { this.setState({ psw: value }) }}
                                    placeholderTextColor={'rgba(0, 0, 0, 0.5)'}
                                    underlineColorAndroid='transparent'
                                    // keyboardType={''}
                                    secureTextEntry={!this.state.isVisiblePsw}

                                />
                                <TouchableOpacity
                                    style={Styles.btnChangeVisblePsw}
                                    onPress={() => { this.setState({ isVisiblePsw: !this.state.isVisiblePsw }) }}
                                >
                                    <MaterialCommunityIcons
                                        name={this.state.isVisiblePsw == true ? 'eye-off' : 'eye'}
                                        size={widthPercent * 8}
                                        color={'#AAAAAA'}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>


                        {/* <TouchableOpacity
                        style={Styles.btnEntrar}
                        onPress={() => { this.setState({ isVisiblePsw: !this.state.isVisiblePsw }) }}
                    >
                        <Text style={Styles.labelBtnEntrar}>Entrar</Text>
                    </TouchableOpacity>
                    <StatusBar style='auto' /> */}
                    </View >


                    <View style={Styles.btnEntrarContainer}>
                        <TouchableOpacity
                            style={Styles.btnEntrar}
                            onPress={() => { auth.login(this.state.email, this.state.psw, true, navigation) }}
                            testID={'entryButton'}

                        >
                            <Text style={Styles.labelBtnEntrar} testID={'textButton'}>Entrar</Text>
                        </TouchableOpacity>
                        <StatusBar style='auto' />
                    </View>

                </KeyboardAvoidingView>
            </DismissKeyboard>
            //// </View >
        )
    }
}

export default function ({ props, route }) {
    const navigation = useNavigation()

    return <Login {...props} navigation={navigation} />
}



