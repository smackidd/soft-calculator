import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';

import theme from '../styles/theme.style';
import Button from './Button';
import Equals from './Equals';

const Buttons = ({ setDisplay, display }) => {


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Button value={"C"} setDisplay={setDisplay} display={display} />
        <Button value={"+/-"} setDisplay={setDisplay} display={display} />
        <Button value={"%"} setDisplay={setDisplay} display={display} />
        <Button value={"/"} setDisplay={setDisplay} display={display} />
      </View>
      <View style={styles.row}>
        <Button value={"1"} setDisplay={setDisplay} display={display} />
        <Button value={"2"} setDisplay={setDisplay} display={display} />
        <Button value={"3"} setDisplay={setDisplay} display={display} />
        <Button value={"X"} setDisplay={setDisplay} display={display} />
      </View>
      <View style={styles.row}>
        <Button value={"4"} setDisplay={setDisplay} display={display} />
        <Button value={"5"} setDisplay={setDisplay} display={display} />
        <Button value={"6"} setDisplay={setDisplay} display={display} />
        <Button value={"-"} setDisplay={setDisplay} display={display} />
      </View>
      <View style={styles.row}>
        <Button value={"7"} setDisplay={setDisplay} display={display} />
        <Button value={"8"} setDisplay={setDisplay} display={display} />
        <Button value={"9"} setDisplay={setDisplay} display={display} />
        <Button value={"+"} setDisplay={setDisplay} display={display} />
      </View>
      <View style={styles.row}>
        <Button value={"0"} setDisplay={setDisplay} display={display} />
        <Button value={"."} setDisplay={setDisplay} display={display} />
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