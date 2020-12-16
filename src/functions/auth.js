import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Value } from 'react-native-reanimated';
import { useNavigation, CommonActions } from '@react-navigation/native'
import AsyncStorage from '@react-native-community/async-storage'

export async function login(email, psw, tryLogin, navigation) {

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
			// email: String(email),
			// password: String(psw)
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
			// console.debug(response.token)
			
		})
		.catch(error => {
			if (tryLogin) {
				Alert.alert(
					`Erro de authenticação`,
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
			// console.error(error)
		})
	return sucecssesLogin
}

export async function getEvents() {
	const myRequest = new Request(
	  'https://frontend-test.agendaedu.com/api/events?limit=2;page=50',
	  {
		method: 'GET',
		// mode: 'no-cors',
		headers: {
		  token:
			'3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
		  Accept: 'application/json',
		  'Content-Type': 'application/json'
		}
		// body: JSON.stringify({
		//   token: '3O701JINSMVIRtuuB7fY1SZ37bYIqDoPTs1auRYzHzLzxXXcuxvptQaowASztVJzAnGl6X00MRIZYjOTAN9SDt0rMZ47EfCNrAWB2oadSedsKbGGx2FRE9HnnloCs0sbONRvpqg5YmI7lrZ90RhrKGI',
		// })
	  }
	)
  
	fetch(myRequest)
	  .then(response => {
		if (response.status === 200) {
		  return response.json()
		} else {
		  throw new Error('erro em no servidor.')
		}
	  })
	  .then(response => {
		// console.log(`RESPONSE: ${JSON.stringify(response)} `)
		console.debug(response)
		// ...
	  })
	  .catch(error => {
		console.log(`RESPONSE: ${JSON.stringify(error)} `)
		// console.error(error)
	  })
  }
  

export async function logOut(navigation) {

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
