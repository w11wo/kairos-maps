import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator, SafeAreaView } from 'react-navigation'

import HomeScreen from './screens/homeScreen.js'
import ScheduleScreen from './screens/scheduleScreen.js'
import DetailScreen from './screens/detailScreen.js'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Schedule: ScheduleScreen,
  Detail: DetailScreen,
},
{
  initialRouteName: 'Home',
})

export default class App extends React.Component {
  render () {
    return (
      <AppNavigator />
    )
  }
}
