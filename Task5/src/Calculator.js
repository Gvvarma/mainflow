import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [prevInput, setPrevInput] = useState('');
  const [operation, setOperation] = useState('');

  const handleNumberClick = (value) => {
    setInput(input + value);
  };

  const handleOperationClick = (op) => {
    if (input !== '') {
      setPrevInput(input);
      setInput('');
      setOperation(op);
    }
  };

  const handleEqualClick = () => {
    if (input !== '' && prevInput !== '') {
      let result;
      switch (operation) {
        case '+':
          result = parseFloat(prevInput) + parseFloat(input);
          break;
        case '-':
          result = parseFloat(prevInput) - parseFloat(input);
          break;
        case '*':
          result = parseFloat(prevInput) * parseFloat(input);
          break;
        case '/':
          result = parseFloat(prevInput) / parseFloat(input);
          break;
        default:
          return;
      }
      setInput(result.toString());
      setPrevInput('');
      setOperation('');
    }
  };

  const handleClearClick = () => {
    setInput('');
    setPrevInput('');
    setOperation('');
  };

  return (
    <div className="calculator">
      <Display value={input || prevInput || '0'} />
      <div className="buttons">
        <Button label="C" onClick={handleClearClick} />
        <Button label="/" onClick={() => handleOperationClick('/')} />
        <Button label="*" onClick={() => handleOperationClick('*')} />
        <Button label="-" onClick={() => handleOperationClick('-')} />
        <Button label="7" onClick={() => handleNumberClick('7')} />
        <Button label="8" onClick={() => handleNumberClick('8')} />
        <Button label="9" onClick={() => handleNumberClick('9')} />
        <Button label="+" onClick={() => handleOperationClick('+')} />
        <Button label="4" onClick={() => handleNumberClick('4')} />
        <Button label="5" onClick={() => handleNumberClick('5')} />
        <Button label="6" onClick={() => handleNumberClick('6')} />
        <Button label="1" onClick={() => handleNumberClick('1')} />
        <Button label="2" onClick={() => handleNumberClick('2')} />
        <Button label="3" onClick={() => handleNumberClick('3')} />
        <Button label="=" onClick={handleEqualClick} />
        <Button label="0" onClick={() => handleNumberClick('0')} />
        <Button label="." onClick={() => handleNumberClick('.')} />
      </div>
    </div>
  );
};

export default Calculator;
