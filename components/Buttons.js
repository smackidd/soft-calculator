import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';

import theme from '../styles/theme.style';
import Numbers from './Numbers';
import Utilities from './Utilities';
import Equals from './Equals';

const Buttons = ({ setDisplay, display, handleNumberPress, handleUtilPress }) => {


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Utilities value={"C"} handleUtilPress={handleUtilPress} />
        <Utilities value={"+/-"} handleUtilPress={handleUtilPress} />
        <Utilities value={"%"} handleUtilPress={handleUtilPress} />
        <Utilities value={"/"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers value={"1"} handleNumberPress={handleNumberPress} />
        <Numbers value={"2"} handleNumberPress={handleNumberPress} />
        <Numbers value={"3"} handleNumberPress={handleNumberPress} />
        <Utilities value={"X"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers value={"4"} handleNumberPress={handleNumberPress} />
        <Numbers value={"5"} handleNumberPress={handleNumberPress} />
        <Numbers value={"6"} handleNumberPress={handleNumberPress} />
        <Utilities value={"-"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers value={"7"} handleNumberPress={handleNumberPress} />
        <Numbers value={"8"} handleNumberPress={handleNumberPress} />
        <Numbers value={"9"} handleNumberPress={handleNumberPress} />
        <Utilities value={"+"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers value={"0"} handleNumberPress={handleNumberPress} />
        <Numbers value={"."} handleNumberPress={handleNumberPress} />
        <Equals value={"="} setDisplay={setDisplay} display={display} />
      </View>
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    // backgroundColor: 'yellow'
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white'
  },
  button: {

    margin: 8
  },
  buttonShadow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 5,
    borderRadius: 25,
    backgroundColor: theme.PRIMARY_BACKGROUND,
    width: 71,
    height: 71,
  }

})