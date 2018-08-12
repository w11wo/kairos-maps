import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { ClassButton } from '../classButton.js'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 30,
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 7,
    marginBottom: 7,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  footer: {
    alignItems: 'center',
  },
  footerText: {
    fontWeight: '100',
  }
})

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to Kairos Maps!',
    headerStyle: {
      backgroundColor: '#FF6',
    },
    headerTitleStyle: {
      fontWeight: '400',
    },
  }

  navigateToSchedule = (label) => {
    this.props.navigation.navigate('Schedule', {
      label: label,
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.column}>
          <View style={styles.row}>
            <ClassButton label="7A" onPress={this.navigateToSchedule}/>
            <ClassButton label="7B" onPress={this.navigateToSchedule}/>
            <ClassButton label="7C" onPress={this.navigateToSchedule}/>
          </View>
          <View style={styles.row}>
            <ClassButton label="8A" onPress={this.navigateToSchedule}/>
            <ClassButton label="8B" onPress={this.navigateToSchedule}/>
            <ClassButton label="8C" onPress={this.navigateToSchedule}/>
          </View>
          <View style={styles.row}>
            <ClassButton label="9A" onPress={this.navigateToSchedule}/>
            <ClassButton label="9B" onPress={this.navigateToSchedule}/>
            <ClassButton label="9C" onPress={this.navigateToSchedule}/>
          </View>
          <View style={styles.row}>
            <ClassButton label="10A" onPress={this.navigateToSchedule}/>
            <ClassButton label="10B" onPress={this.navigateToSchedule}/>
            <ClassButton label="10C" onPress={this.navigateToSchedule}/>
          </View>
          <View style={styles.row}>
            <ClassButton label="JC1" onPress={this.navigateToSchedule}/>
            <ClassButton label="JC2" onPress={this.navigateToSchedule}/>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>© @wilsonwongso_</Text>
        </View>
      </SafeAreaView>
    )
  }
}
