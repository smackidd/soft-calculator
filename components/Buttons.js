import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Neomorph } from 'react-native-neomorph-shadows';

import theme from '../styles/theme.style';
import Numbers from './Numbers';
import Utilities from './Utilities';
import Equals from './Equals';

const Buttons = ({ handleNumberPress, handleUtilPress, ...props }) => {


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Utilities {...props} testID={"C.Button"} value={"C"} handleUtilPress={handleUtilPress} />
        <Utilities {...props} testID={"+/-.Button"} value={"+/-"} handleUtilPress={handleUtilPress} />
        <Utilities {...props} testID={"%.Button"} value={"%"} handleUtilPress={handleUtilPress} />
        <Utilities {...props} testID={"/.Button"} value={"/"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers {...props} testID={"7.Button"} value={"7"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"8.Button"} value={"8"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"9.Button"} value={"9"} handleNumberPress={handleNumberPress} />
        <Utilities {...props} testID={"*.Button"} value={"*"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers {...props} testID={"4.Button"} value={"4"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"5.Button"} value={"5"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"6.Button"} value={"6"} handleNumberPress={handleNumberPress} />
        <Utilities {...props} testID={"-.Button"} value={"-"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers {...props} testID={"1.Button"} value={"1"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"2.Button"} value={"2"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"3.Button"} value={"3"} handleNumberPress={handleNumberPress} />
        <Utilities {...props} testID={"+.Button"} value={"+"} handleUtilPress={handleUtilPress} />
      </View>
      <View style={styles.row}>
        <Numbers {...props} testID={"0.Button"} value={"0"} handleNumberPress={handleNumberPress} />
        <Numbers {...props} testID={"..Button"} value={"."} handleNumberPress={handleNumberPress} />
        <Equals {...props} testID={"=.Button"} value={"="} handleUtilPress={handleUtilPress} />
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