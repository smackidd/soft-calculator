import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Output from '../components/Output';
import Buttons from '../components/Buttons';

const Calculator = () => {
  const [display, setDisplay] = useState([0]);

  return (
    <SafeAreaView style={styles.container}>
      <Output display={display} />
      <Buttons setDisplay={setDisplay} display={display} />
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