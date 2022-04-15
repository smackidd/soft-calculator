import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import theme from "../styles/theme.style"

const Output = ({ display }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{display}</Text>
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
  }
})