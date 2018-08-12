import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

import { SubjectRow } from '../subjectRow.js'
import { getCurrentDayAndDate } from '../DateAPI.js'
import { getSchedule } from '../DatabaseAPI.js'

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
  header: {
    alignItems: 'center',
    marginBottom: 10,
  },
  date: {
    fontWeight: '300',
    fontSize: 22,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: '300',
  },
})

export default class ScheduleScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.label}`,
    headerStyle: {
      backgroundColor: '#FF6',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: '400',
    },
  })

  navigateToDetail = (props) => {
    this.props.navigation.navigate('Detail', {
      props: props,
    })
  }

  render() {
    var label = this.props.navigation.getParam('label')
    var dayAndToday = getCurrentDayAndDate()
    // change to dayAndToday[0] and dayAndToday[1]
    var day = dayAndToday[0]
    var today = dayAndToday[1]
    var db = getSchedule()
    var labeldb = db[label]
    var daydb
    var subjects
    try {
      daydb = labeldb[day]
      subjects = Object.keys(daydb)
    }
    catch(error) {
      daydb = null
      subjects = null
    }
    var i
    var rows = []

    if (daydb == null || subjects == null) {
      rows.push(<Text style={styles.paragraph} key={0}>Schedule Not Available.</Text>)
    } else {
      for (i = 0; i<subjects.length; i++) {
        rows.push(<SubjectRow key={i} time={daydb[subjects[i]].Start} name={subjects[i]} room={daydb[subjects[i]].Room} day={day} label={label} onPress={this.navigateToDetail}/>)
      }
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.date}>{today}</Text>
        </View>
        <ScrollView>
          {rows}
        </ScrollView>
      </SafeAreaView>
    )
  }
}
