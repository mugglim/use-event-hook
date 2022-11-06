import type { ChangeEvent } from 'react';

const Input = ({ value, onChange }: InputProps) => {
  return <input value={value} onChange={onChange} />;
};

export interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default Input;
