import { useState } from 'react';
import Expensive from '@components/Expensive';
import Input from '@components/Input';

const UseStatePage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = () => {
    alert(text);
  };

  return (
    <>
      <h2>1. useState</h2>
      <span>using hooks</span>
      <ul>
        <li>useState</li>
      </ul>

      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Expensive onClick={onExpensiveClick} />
    </>
  );
};

export default UseStatePage;
