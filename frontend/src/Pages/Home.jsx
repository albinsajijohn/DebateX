// App.js
import React, { useState } from 'react';

function Home() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState(null);

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult('Invalid input');
      return;
    }

    let res;
    switch (operator) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Unknown operator';
    }
    setResult(res);
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: 'orange' }}>ARYA's CALCULATOR</h2>
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="First number"
        style={styles.input}
      />
      <select
        value={operator}
        onChange={e => setOperator(e.target.value)}
        style={styles.select}
      >
        <option value="+">+</option>
        <option value="-">−</option>
        <option value="*">×</option>
        <option value="/">÷</option>
      </select>
      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Second number"
        style={styles.input}
      />
      <button onClick={calculate} style={styles.button}>Calculate</button>
      <h3>Result: {result !== null ? result : '--'}</h3>
    </div>
  );
}

const styles = {
  container: {
    margin: '50px auto',
    padding: '20px',
    maxWidth: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  input: {
    width: '80%',
    padding: '8px',
    margin: '5px 0',
    fontSize: '16px',
  },
  select: {
    width: '85%',
    padding: '8px',
    margin: '5px 0',
    fontSize: '16px',
  },
  button: {
    padding: '10px 20px',
    marginTop: '10px',
    fontSize: '16px',
    cursor: 'pointer',
  }
};

export default Home;
