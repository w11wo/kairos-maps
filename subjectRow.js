import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  row: {
    flex: 1,
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
})

export class SubjectRow extends React.Component {
  static propTypes = {
    time: PropTypes.string,
    name: PropTypes.string,
    room: PropTypes.string,
  }

  _onPress = (props) => {
    this.props.onPress(this.props)
  }

  render() {
    return (
      <TouchableOpacity style={styles.row} onPress={this._onPress}>
        <Text style={styles.paragraph}>{this.props.time}</Text>
        <Text style={styles.paragraph}>{this.props.name}</Text>
        <Text style={styles.paragraph}>{this.props.room}</Text>
      </TouchableOpacity>
    )
  }
}
