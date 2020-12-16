import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './src/screens/navigator'

// const auth = require('./src/functions/auth')

export default class App extends React.Component {
  render () {
    return <AppNavigator />
  }
}

function isLoged () {
  const request = new Request('https://frontend-test.agendaedu.com/api/login', {
    method: 'POST',
    // mode: 'no-cors',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'student@ae.com',
      password: '123456'
    })
  })

  fetch(request)
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

function getEvents () {
  const myRequest = new Request(
    'https://frontend-test.agendaedu.com/api/events?limit=3;page=34',
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
