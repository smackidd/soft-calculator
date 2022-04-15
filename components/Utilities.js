import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';
import theme from "../styles/theme.style";

const Utilities = ({ value, setDisplay, display, setRunningTotal }) => {
  const convertDisplayToNumber = () => {
    let placeholder = 1;
    let total = 0;
    for (let i = display.length; i > 0; i--) {
      total = total + (parseInt(display[i - 1]) * placeholder);
      placeholder = placeholder * 10;
    }
    console.log(total);
    return total;
  }

  const handlePress = () => {
    if (value === "C") {
      setDisplay([0]);
    } else if (value === "+") {
      setRunningTotal(convertDisplayToNumber);
    }
  }

  return (
    <TouchableOpacity style={styles.button} onPress={() => handlePress()}>
      <Neomorph
        style={styles.buttonShadow}
      >
        <View style={styles.utilButton}>
          <Text style={styles.utilText}>{value}</Text>
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
    // backgroundColor: '#0789AE',
    backgroundColor: theme.PRIMARY_BACKGROUND,
    opacity: 0.6
  }
})