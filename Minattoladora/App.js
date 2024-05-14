import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  const [displayValue, setDisplayValue] = useState('');
  const [operand, setOperand] = useState('');
  const [prevValue, setPrevValue] = useState('');

  const handleNumberPress = (number) => {
    setDisplayValue(displayValue + number);
  };

  const handleOperandPress = (op) => {
    if (displayValue !== '') {
      setPrevValue(displayValue);
      setOperand(op);
      setDisplayValue('');
    }
  };

  const handleEqualsPress = () => {
    if (prevValue !== '' && displayValue !== '') {
      const num1 = parseFloat(prevValue);
      const num2 = parseFloat(displayValue);
      let result;
      switch (operand) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
        default:
          return;
      }
      setDisplayValue(result.toString());
      setPrevValue('');
      setOperand('');
    }
  };

  const handleClearPress = () => {
    setDisplayValue('');
    setOperand('');
    setPrevValue('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>        
        <Text style={styles.titletext}>MinattoLadora 🤓💻</Text>      
      </View>
      <View style={styles.display}>        
        <View style={styles.math}>
          <Text style={styles.dispvalue}>{prevValue}</Text>
          <Text style={styles.dispvalue}>{operand}</Text>
        </View>
        <Text style={styles.displayText}>{displayValue}</Text>        
      </View>
      <View style={styles.buttons}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operand]}
            onPress={() => handleOperandPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operand]}
            onPress={() => handleOperandPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operand]}
            onPress={() => handleOperandPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleClearPress()}>
            <Text style={[styles.buttonText, styles.clearButton]}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleNumberPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleEqualsPress()}>
            <Text style={[styles.buttonText, styles.equalsButton]}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.operand]}
            onPress={() => handleOperandPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d0d0d',
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0e100e',
    width: '100%',
  },
  display: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#151817',
    width: '100%',
  },
  titletext:{
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  math: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    paddingVertical: 25,
    width: '100%',
  },
  dispvalue: {
    fontSize: 35,
    padding: 5,
    color:'#FFFFFF',
    fontWeight: 'bold',
  },
  displayText: {
    padding: 25,
    fontSize: 58,
    color:'#FFFFFF',
    fontWeight: 'bold',
  },
  buttons: {
    flex: 5,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#0d0d0d',
    marginVertical: 10,
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  button: {
    flex: 1,
    marginHorizontal: 3,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#CAF56d',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
  },
  operand: {
    backgroundColor: '#ABF23D',
  },
  equalsButton: {
    backgroundColor: '#CAF56d',
  },
  clearButton: {
    color: '#0d0d0d',
  },
});
