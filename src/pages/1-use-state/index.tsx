import { useState } from 'react';
import Expensive from '@components/Expensive';
import Input from '@components/Input';

const UseStatePage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = () => {
    console.log(text);
  };

  return (
    <>
      <h2>1. useState</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Expensive onClick={onExpensiveClick} />
    </>
  );
};

export default UseStatePage;