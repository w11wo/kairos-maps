import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  buttonBox: {
    flexGrow: 1,
    backgroundColor: '#FFFFE0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 0.5,
    borderColor: '#000',
    marginLeft: 7,
    marginRight: 7,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "200",
    color: '#000',
  },
})

export class ClassButton extends React.Component {
  static propTypes = {
    label: PropTypes.string,
  }

  _onPress = () => {
    this.props.onPress(this.props.label)
  }

  render() {
    return (
      <TouchableOpacity style={styles.buttonBox} onPress={this._onPress}>
        <Text style={styles.buttonText}>{this.props.label}</Text>
      </TouchableOpacity>
    )
  }
}
