import React, { Component } from 'react';
import { Alert } from 'react-native'
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

export async function login(email, psw, tryLogin, navigation) {
	global.callLoginTest = true

	let sucecssesLogin = false

	const request = new Request('https://frontend-test.agendaedu.com/api/login', {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			email: email,
			password: psw,
		})
	})

	await fetch(request)
		.then(response => {
			if (response.status === 200) {
				sucecssesLogin = true
				return response.json()
			} else {
				throw new Error('Server Error')
			}
		})
		.then(response => {
			global.callLoginTest = true
			AsyncStorage.setItem('EMAIL', `${email}`)
			AsyncStorage.setItem('PSW', `${psw}`)
			AsyncStorage.setItem('AUTH_TOKEN', `${response.token}`)

			sucecssesLogin = true

			try {
				navigation.dispatch(
					CommonActions.reset({
						index: 0,
						routes: [{ name: 'Events' }]
					})
				)

			} catch (error) {
				console.log(error.toString(error));
			}

		})
		.catch(error => {
			global.callLoginTest = true
			if (tryLogin) {
				Alert.alert(
					`Erro de autenticação`,
					`Credenciais incorretas.`,
					[
						{
							text: `Entendi`,
							onPress: () => { },
						},
					],
					{ cancelable: false }
				)
			}

			sucecssesLogin = false
		})
	return sucecssesLogin
}

export async function logOut(navigation) {
	global.logOut = true

	AsyncStorage.setItem('EMAIL', `null`)
	AsyncStorage.setItem('PSW', `null`)
	AsyncStorage.setItem('AUTH_TOKEN', `null`)

	try {
		navigation.dispatch(
			CommonActions.reset({
				index: 0,
				routes: [{ name: 'Login' }]
			})
		)

	} catch (error) {
		console.log(error.toString(error));
	}
}
