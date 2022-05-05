import React from 'react';
import { render, fireEvent } from "@testing-library/react-native";

import Calculator from '../Calculator';
import Buttons from '../../components/Buttons';

describe('Simple Add/Subtract', () => {


  it('should press 1', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    const output = page.getAllByText("1");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 1 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button1);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("2");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 1 = =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button1);
    fireEvent.press(buttonEquals);

    let output = page.getAllByText("2");
    expect(output.length).toBe(2);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("3");
    expect(output.length).toBe(2);
  })

  it('should press 12 + 12 = =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);
    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(buttonEquals);

    let output = page.getAllByText("24");
    expect(output.length).toBe(1);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("36");
    expect(output.length).toBe(1);
  })

  it('should press 8 - 5 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button8);
    fireEvent.press(buttonMinus);
    fireEvent.press(button5);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("3");
    expect(output.length).toBe(2);
  })

  it('should press 12 - 3 = = =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);

    fireEvent.press(button2);
    fireEvent.press(buttonMinus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    let output = page.getAllByText("9");
    expect(output.length).toBe(2);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("6");
    expect(output.length).toBe(2);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("3");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 + 3 = - 2 = =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);

    let output = page.getAllByText("3");
    expect(output.length).toBe(2);

    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("6");
    expect(output.length).toBe(2);

    fireEvent.press(buttonMinus);
    fireEvent.press(button2);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("4");
    expect(output.length).toBe(2);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("2");
    expect(output.length).toBe(2);

  })

  it('should press 8 + 5 - 4 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button8);
    fireEvent.press(buttonPlus);
    fireEvent.press(button5);
    fireEvent.press(buttonMinus);

    let output = page.getAllByText("13");
    expect(output.length).toBe(1);

    fireEvent.press(button4);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("9");
    expect(output.length).toBe(2);
  })

})

describe('Simple Multiply/Divide', () => {
  it('should press 2 * 3 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("6");
    expect(output.length).toBe(2);
  })

  it('should press 6 / 2 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button6);
    fireEvent.press(buttonDivide);
    fireEvent.press(button2);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("3");
    expect(output.length).toBe(2);
  })

  it('should press 127 * 894 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(button7);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button8);
    fireEvent.press(button9);
    fireEvent.press(button4);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("113538");
    expect(output.length).toBe(1);
  })

  it('should press 12 * 6 / 3 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button6);
    fireEvent.press(buttonDivide);

    let output = page.getAllByText("72");
    expect(output.length).toBe(1);

    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("24");
    expect(output.length).toBe(1);
  })

  it('should press 12 * 6 = =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button6);
    fireEvent.press(buttonEquals);

    let output = page.getAllByText("72");
    expect(output.length).toBe(1);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("432");
    expect(output.length).toBe(1);
  })

  it('should press 1 / 2 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonDivide);
    fireEvent.press(button2);

    fireEvent.press(buttonEquals);

    output = page.getAllByText("0.5");
    expect(output.length).toBe(1);
  })
})

describe('Mixed Order of Operations', () => {
  it('should press 1 + 2 * 3 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("7");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 + 2 * 3 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);

    let output = page.getAllByText("3");
    expect(output.length).toBe(2);

    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("9");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 + 2 * 9 / 3 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);

    let output = page.getAllByText("3");
    expect(output.length).toBe(2);

    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button9);
    fireEvent.press(buttonDivide);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("9");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 + 2 * 9 / 3 - 6 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);

    let output = page.getAllByText("3");
    expect(output.length).toBe(2);

    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button9);
    fireEvent.press(buttonDivide);
    fireEvent.press(button3);
    fireEvent.press(buttonMinus);
    fireEvent.press(button6);
    fireEvent.press(buttonEquals);

    output = page.getAllByText("3");
    expect(output.length).toBe(2);
  })

})

describe('Mixed Operations', () => {
  it('should press 1 + 2 + 3 = + 4 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(buttonPlus);
    fireEvent.press(button4);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("10");
    expect(output.length).toBe(1);
  })

  it('should press 1 + 2 + 3 = 4 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(button4);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("7");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 + 3 + * 4 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button4);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("15");
    expect(output.length).toBe(1);
  })

  it('should press 1 + 2 + 3 + = ', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(buttonEquals);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("12");
    expect(output.length).toBe(1);
  })
})

describe('Other Main Utilities', () => {
  it('should press 1 + 2 C 3 + 2 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonC);
    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("6");
    expect(output.length).toBe(2);
  })

  it('should press 1 + 2 C C 3 + 2 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonC);
    fireEvent.press(buttonC);
    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button2);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("5");
    expect(output.length).toBe(2);
  })

  it('should press 55 %', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button5);
    fireEvent.press(button5);
    fireEvent.press(buttonPercent);

    const output = page.getAllByText("0.55");
    expect(output.length).toBe(1);
  })

  it('should press 55 % * 2 * 100 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");


    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button5);
    fireEvent.press(button5);
    fireEvent.press(buttonPercent);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button1);
    fireEvent.press(button0);
    fireEvent.press(button0);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("110");
    expect(output.length).toBe(1);
  })

  it('should press 55 % +/- * 2 * 100 =', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");


    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button5);
    fireEvent.press(button5);
    fireEvent.press(buttonPercent);
    fireEvent.press(buttonPlusMinus);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button2);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button1);
    fireEvent.press(button0);
    fireEvent.press(button0);
    fireEvent.press(buttonEquals);

    const output = page.getAllByText("-110");
    expect(output.length).toBe(1);
  })

  it('should press 1.1. (should not bomb)', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");
    const buttonDecimal = page.getByTestId("..Button");


    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button1);
    fireEvent.press(buttonDecimal);

    const output = page.getAllByText("1.1");
    expect(output.length).toBe(1);
  })

  it('should press .1 ', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");
    const buttonDecimal = page.getByTestId("..Button");


    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(buttonDecimal);

    let output = page.getAllByText("0.");
    expect(output.length).toBe(1);

    fireEvent.press(button1);

    output = page.getAllByText("0.1");
    expect(output.length).toBe(1);
  })

  it('should press .25 + .75 = ', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");
    const buttonDecimal = page.getByTestId("..Button");


    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(buttonDecimal);

    let output = page.getAllByText("0.");
    expect(output.length).toBe(1);

    fireEvent.press(button2);
    fireEvent.press(button5);
    fireEvent.press(buttonPlus);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button7);
    fireEvent.press(button5);
    fireEvent.press(buttonEquals);


    output = page.getAllByText("1");
    expect(output.length).toBe(2);
  })

})

describe('Output', () => {
  it('should press 12345678901234567', () => {
    const page = render(<Calculator />);

    const button1 = page.getByTestId("1.Button");
    const button2 = page.getByTestId("2.Button");
    const button3 = page.getByTestId("3.Button");
    const button4 = page.getByTestId("4.Button");
    const button5 = page.getByTestId("5.Button");
    const button6 = page.getByTestId("6.Button");
    const button7 = page.getByTestId("7.Button");
    const button8 = page.getByTestId("8.Button");
    const button9 = page.getByTestId("9.Button");
    const button0 = page.getByTestId("0.Button");

    const buttonC = page.getByTestId("C.Button");
    const buttonPlusMinus = page.getByTestId("+/-.Button");
    const buttonPercent = page.getByTestId("%.Button");
    const buttonDivide = page.getByTestId("/.Button");
    const buttonMultiply = page.getByTestId("*.Button");
    const buttonMinus = page.getByTestId("-.Button");
    const buttonPlus = page.getByTestId("+.Button");
    const buttonEquals = page.getByTestId("=.Button");

    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(button3);
    fireEvent.press(button4);
    fireEvent.press(button5);
    fireEvent.press(button6);
    fireEvent.press(button7);
    fireEvent.press(button8);
    fireEvent.press(button9);
    fireEvent.press(button0);
    fireEvent.press(button1);
    fireEvent.press(button2);
    fireEvent.press(button3);
    fireEvent.press(button4);
    fireEvent.press(button5);
    fireEvent.press(button6);
    fireEvent.press(button7);

    const output = page.getAllByText("1234567890123456");
    expect(output.length).toBe(1);
  })
})