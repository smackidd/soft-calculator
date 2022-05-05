import { SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { evaluate, parse, compile } from 'mathjs';
import Output from '../components/Output';
import Buttons from '../components/Buttons';

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [runningTotal, setRunningTotal] = useState("");
  const [expression, setExpression] = useState(null);
  const [newNumber, setNewNumber] = useState(false);
  const [prevNumber, setPrevNumber] = useState(null);



  const updateDisplay = (newRunningTotal) => {
    setRunningTotal(newRunningTotal);
    setDisplay(evaluate(newRunningTotal).toString());
    setNewNumber(true);
  }

  const findPreviousOperatorIndex = (string) => {
    const operators = ["+", "-", "*", "/"]
    let highestIndex = 0;
    for (let i = 0; i < operators.length; i++) {
      const index = string.lastIndexOf(operators[i]);
      if (index > highestIndex) highestIndex = index;
    }
    return highestIndex + 1;
  }

  const firstUtilPress = (value) => {
    let newRunningTotal = runningTotal + display;
    if (value === "=") {
      setPrevNumber(display);
      updateDisplay(newRunningTotal);
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      setPrevNumber(display);
      updateDisplay(newRunningTotal);
      setExpression(value);
      setRunningTotal(newRunningTotal + value);
    }
  }

  const secondUtilPress = (value) => {
    if (value === "=") {
      // for multiple taps of the same expression
      const newRunningTotal = runningTotal + expression + prevNumber;
      updateDisplay(newRunningTotal);
    } else {
      // for changing previous expression to new expression
      let newRunningTotal = runningTotal;
      if (isNaN(parseInt(runningTotal[runningTotal.length - 1]))) { newRunningTotal = runningTotal.slice(0, runningTotal.length - 1) };
      console.log("expression", expression, "newRunningTotal", newRunningTotal);
      updateDisplay(newRunningTotal);
      setRunningTotal(newRunningTotal + value);
      if (value !== "=") setExpression(value);
    }
  }

  const handleNumberPress = (value) => {
    if (display === "0" || newNumber === true) {
      if (!isNaN(parseInt(runningTotal[runningTotal.length - 1]))) {
        setRunningTotal((prev) => {
          const newRunningTotal = prev.slice(0, findPreviousOperatorIndex(prev));
          return newRunningTotal;
        })
      }
      setDisplay("")
    }
    if (display.length <= 15) {
      setDisplay((prev) => {
        if (prev.includes(".") && value === ".") return prev
        else return prev + value;
      })
    }
    setNewNumber(false);
  }

  const handleUtilPress = (value) => {
    if (value === "C") {
      if (display === "0") setRunningTotal("")
      else setDisplay("0");
    } else if (value === "+/-") {
      setDisplay(evaluate(display + "*-1"));
    } else if (value === "%") {
      setDisplay(evaluate(display + "/100"));
    } else if (newNumber === true) {
      // ready for new number but another utility has been pressed.
      secondUtilPress(value);
    } else {
      firstUtilPress(value);
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