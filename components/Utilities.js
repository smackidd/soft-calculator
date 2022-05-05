import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';
import theme from "../styles/theme.style";

const Utilities = ({ value, handleUtilPress, ...props }) => {


  return (
    <TouchableOpacity {...props} style={styles.button} onPress={() => handleUtilPress(value)}>
      <Neomorph
        style={styles.buttonShadow}
      >
        <View style={styles.utilButton}>
          <Text style={styles.utilText}>{value === "*" ? "x" : value}</Text>
        </View>
      </Neomorph>
    </TouchableOpacity>
  )
}

export default Utilities

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
    // shadowRadius: 6,
    // borderRadius: 12,
    shadowRadius: 7,
    borderRadius: 15,
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
    // backgroundColor: '#0789AE',
    backgroundColor: theme.PRIMARY_BACKGROUND,
    opacity: 0.6
  }
})