import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AppNavigator from './src/screens/navigator'

export default class App extends React.Component {
  render () {
    return <AppNavigator />
  }
}
