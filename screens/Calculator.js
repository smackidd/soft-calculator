import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Output from '../components/Output';
import Buttons from '../components/Buttons';

const Calculator = () => {
  const [display, setDisplay] = useState([0]);
  const [runningTotal, setRunningTotal] = useState(0);
  const [expression, setExpression] = useState(null);
  const [newNumber, setNewNumber] = useState(false);
  const [prevNumber, setPrevNumber] = useState(null);

  const updateDisplay = (value) => {
    if (expression === "+") {
      setDisplay(convertDisplayToNumber() + runningTotal);
    }
  }

  const convertDisplayToNumber = () => {
    console.log("here");
    let stringTotal = "";
    for (let i = 0; i < display.length; i++) {
      stringTotal = stringTotal + display[i];
    }
    console.log(parseFloat(stringTotal));
    return parseFloat(stringTotal);
  }

  const handleNumberPress = (value) => {
    if (display[0] === 0 || newNumber === true) {
      setDisplay([])
    }
    setDisplay((prev) => {
      let newDisplay = [...prev]
      newDisplay.push(value);
      return newDisplay
    })
    setNewNumber(false);
  }

  const handleUtilPress = (value) => {
    if (value === "C") {
      if (display[0] === 0) setRunningTotal(0)
      else setDisplay([0]);
    } else if (value === "+") {
      updateDisplay(value);
      setRunningTotal(runningTotal + convertDisplayToNumber());
      setExpression(value);
      setNewNumber(true);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Output display={display} />
      <Buttons handleNumberPress={(e) => handleNumberPress(e)} handleUtilPress={(e) => handleUtilPress(e)} />
    </SafeAreaView>
  )
}

export default Calculator;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  }
})