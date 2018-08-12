import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Expo from 'expo'
import { SafeAreaView } from 'react-navigation'

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
  row: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFE0',
    borderWidth: 0.5,
    borderColor: '#000',
    marginTop: 7,
    marginBottom: 7,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  paragraph: {
    fontSize: 25,
    fontWeight: '300',
  },
  details: {
    alignItems: 'center',
  },
  detailsText: {
    fontWeight: '200',
    fontSize: 30,
  },
  singleDetail: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  detailBold: {
    fontWeight: '400',
  }
})

export default class DetailScreen extends React.Component {
  static navigationOptions = {
    title: 'Details',
    headerStyle: {
      backgroundColor: '#FF6',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: '400',
    },
  }

  render() {
    var info = this.props.navigation.getParam('props')
    var Start = info.time
    var Name = info.name
    var Room = info.room
    var day = info.day
    var label = info.label
    var db = getSchedule()
    var subjectdb = db[label][day][Name]
    var End = subjectdb.End
    var Teacher = subjectdb.Teacher

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.paragraph}>{Start}</Text>
          <Text style={styles.paragraph}>{Name}</Text>
          <Text style={styles.paragraph}>{Room}</Text>
        </View>
        <ScrollView>
          <View style={styles.details}>
            <View style={styles.singleDetail}>
              <Text style={[styles.detailsText, styles.detailBold]}>Duration:</Text>
              <Text style={styles.detailsText}>{Start} - {End}</Text>
            </View>
            <View style={styles.singleDetail}>
              <Text style={[styles.detailsText, styles.detailBold]}>Teacher:</Text>
              <Text style={styles.detailsText}>{Teacher}</Text>
            </View>
            <View style={styles.singleDetail}>
              <Text style={[styles.detailsText, styles.detailBold]}>Location:</Text>
              <Text style={styles.detailsText}>{Room}</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
