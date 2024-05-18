import { useState } from 'react';
import NumberInput from './components/NumberInput';
import ResultDisplay from './components/ResultDisplay';
import Layout from './components/Layout';
import Container from './components/Container';
import Select from './components/Select';
import Button from './components/Button';
import { MdCalculate } from 'react-icons/md';

const operators = [
  { value: 'add', label: 'Add' },
  { value: 'subtract', label: 'Subtract' },
  { value: 'multiply', label: 'Multiply' },
  { value: 'divide', label: 'Divide' },
];

const App: React.FC = () => {
  const [number1, setNumber1] = useState({ value: '', system: 'decimal' });
  const [number2, setNumber2] = useState({ value: '', system: 'decimal' });
  const [operation, setOperation] = useState('add');
  const [result, setResult] = useState('');

  const convertToDecimal = (num: string, system: string): number => {
    switch (system) {
      case 'binary':
        return parseInt(num, 2);
      case 'octal':
        return parseInt(num, 8);
      case 'hexadecimal':
        return parseInt(num, 16);
      default:
        return parseInt(num, 10);
    }
  };

  const convertFromDecimal = (num: number, system: string): string => {
    switch (system) {
      case 'binary':
        return num.toString(2);
      case 'octal':
        return num.toString(8);
      case 'hexadecimal':
        return num.toString(16);
      default:
        return num.toString(10);
    }
  };

  const handleNumber1Change = (value: string, system: string) => {
    setNumber1({ value, system });
  };

  const handleNumber2Change = (value: string, system: string) => {
    setNumber2({ value, system });
  };

  const handleOperationChange = (operation: string) => {
    setOperation(operation);
  };

  const performCalculation = () => {
    const num1 = convertToDecimal(number1.value, number1.system);
    const num2 = convertToDecimal(number2.value, number2.system);
    let result;

    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        result = num1 / num2;
        break;
      default:
        result = 0;
    }

    setResult(convertFromDecimal(result, number1.system));
  };

  return (
    <Layout>
      <Container className="bg-slate-950 py-20 space-y-8">
        <div className="flex flex-col md:flex-row items-center gap-4 justify-center w-full">
          <NumberInput label="Number 1" onChange={handleNumber1Change} />
          <NumberInput label="Number 2" onChange={handleNumber2Change} />
        </div>
        <div className="flex items-stretch gap-4 max-w-md mx-auto">
          <Select
            options={operators}
            value={operation}
            onChange={(e) => handleOperationChange(e.target.value)}
          />
          <Button
            title="Calculate"
            handleClick={performCalculation}
            position="left"
            icon={<MdCalculate className="text-2xl" />}
          />
        </div>
        <ResultDisplay result={result} />
      </Container>
    </Layout>
  );
};

export default App;
