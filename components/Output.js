import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { floor } from "mathjs"
import theme from "../styles/theme.style"

const Output = ({ display, ...props }) => {

  return (
    <View style={styles.container}>
      <Text {...props} testID={"Output"} style={(display.length <= 10) ? styles.text : styles.textSmall}>{display === "." ? "0" + display : floor(display, 10)}</Text>
    </View>
  )
}

export default Output

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: '30%',
    width: '100%',
    padding: 16,
    paddingBottom: 36
  },
  text: {
    fontSize: 54,
    color: "#99AEBA"
  },
  textSmall: {
    fontSize: 36,
    color: "#99AEBA"
  },
})