import React from 'react';

interface OperationSelectorProps {
  onChange: (operation: string) => void;
}

const OperationSelector: React.FC<OperationSelectorProps> = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="add">Add</option>
      <option value="subtract">Subtract</option>
      <option value="multiply">Multiply</option>
      <option value="divide">Divide</option>
    </select>
  );
};

export default OperationSelector;
