import React, { useState } from 'react';
import Input from './Input';
import Select from './Select';

interface NumberInputProps {
  label: string;
  onChange: (value: string, system: string) => void;
}

const options = [
  { value: 'decimal', label: 'Decimal' },
  { value: 'binary', label: 'Binary' },
  { value: 'octal', label: 'Octal' },
  { value: 'hexadecimal', label: 'Hexadecimal' },
];

const NumberInput: React.FC<NumberInputProps> = ({ label, onChange }) => {
  const [number, setNumber] = useState('');
  const [system, setSystem] = useState('decimal');

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
    onChange(e.target.value, system);
  };

  const handleSystemChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSystem(e.target.value);
    onChange(number, e.target.value);
  };

  return (
    <div className="flex items-center gap-2 border border-gray-300 md:w-1/2">
      <Input label={label} onChange={handleNumberChange} />
      <Select value={system} onChange={handleSystemChange} options={options} />
    </div>
  );
};

export default NumberInput;
