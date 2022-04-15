import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';

import theme from '../styles/theme.style';

const Numbers = ({ value, setDisplay, display }) => {
  const handlePress = () => {
    if (display[0] === 0) {
      setDisplay([])
    }
    setDisplay((prev) => {
      let newDisplay = [...prev]
      newDisplay.push(value);
      return newDisplay
    })
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
      <Neomorph
        style={styles.buttonShadow}
      >
        <Text style={styles.text}>{value}</Text>
      </Neomorph>
    </TouchableOpacity>
  )
}

export default Numbers;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: theme.ACCENT_COLOR
  },
  utilText: {
    fontSize: 20,
    color: theme.SECONDARY_COLOR
  },
  button: {
    margin: 9
  },
  buttonShadow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    shadowRadius: 6,
    borderRadius: 12,
    backgroundColor: theme.PRIMARY_BACKGROUND,
    width: 71,
    height: 71,
  },
  utilButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: "100%",
    borderRadius: 21,
    backgroundColor: theme.PRIMARY_BACKGROUND,
    opacity: 0.6
  }
})