import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';
import theme from "../styles/theme.style";

const Equals = ({ value, handleUtilPress, ...props }) => {
  return (
    <TouchableOpacity {...props} style={styles.button} onPress={() => handleUtilPress(value)}>
      <Neomorph
        style={styles.buttonShadow}
      >
        <Text style={styles.text}>{value}</Text>
      </Neomorph>
    </TouchableOpacity>
  )
}

export default Equals;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    color: theme.SECONDARY_COLOR
  },
  button: {

    margin: 8
  },
  buttonShadow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 7,
    borderRadius: 15,
    backgroundColor: theme.PRIMARY_BACKGROUND,
    width: 158,
    height: 71,
  }
})