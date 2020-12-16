/**

 */

import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar, Button, TouchableOpacity, Dimensions } from 'react-native'

import { NavigationContainer, StackActions, getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// import AsyncStorage from '@react-native-community/async-storage'

import Login from './login'
import Configuration from './configuration'
import Events from './events'
import EventDetails from './eventDetails'


const Stack = createStackNavigator();

class Navigator extends React.Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: '',
            headerShown: false,
            headerStyle: {
              backgroundColor: '#FFF',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              // fontWeight: 'bold',
            },
          }}
        >
          {/* <Stack.Screen name="Configuration" component={Configuration} /> */}
          <Stack.Screen name="Configuration" component={Configuration}
            options={() => ({
              headerShown: false,
            })} />

          <Stack.Screen name="Login" component={Login}
            options={() => ({
              title: 'Login',
              headerShown: false,
              headerTintColor: '#000',
            })}
          />
          <Stack.Screen name="Events" component={Events}
            options={() => ({
              title: 'Eventos',
              headerShown: true,
              headerTintColor: '#000',
              backgroundColor: '#FEFEFE',
              headerTitleStyle: {
                marginLeft: 0,
                fontFamily: 'SFProDisplay-Medium',
              }
            })}
          />
          <Stack.Screen name="EventDetails" component={EventDetails}
            options={() => ({
              title: 'Detalhes do Evento',
              headerShown: true,
              headerTintColor: '#000',
              backgroundColor: '#FEFEFE',
              headerTitleStyle: {
                fontFamily: 'SFProDisplay-Medium',
                marginLeft: 0,
              }
            })}
          />

          {/* <Stack.Screen name="Main" component={Main}
            options={({ route, navigation }) => ({
              // headerTitle: 'Home Page',
              route: { route },
              navigation: { navigation },

            })}
          /> */}

        </Stack.Navigator>
      </NavigationContainer>

    )
  }

}

export default Navigator;


