import { useState } from 'react';
import { useEvent } from '@hooks';
import Input from '@components/Input';
import MemoExpensive from '@components/MemoExpensive';

const UseEventPage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = useEvent(() => {
    console.log(text);
  });

  return (
    <>
      <h2>4. useEvent</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <MemoExpensive onClick={onExpensiveClick} />
    </>
  );
};

export default UseEventPage;
