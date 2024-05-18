import React from 'react';

interface ResultDisplayProps {
  result: string;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="min-w-96 h-40 rounded-lg mx-auto bg-purple-50 text-black flex items-center justify-center">
      <p className="text-2xl font-bold">Result: {result}</p>
    </div>
  );
};

export default ResultDisplay;
