import { useState } from 'react';
import Input from '@components/Input';
import MemoExpensive from '@components/MemoExpensive';

const ReactMemoPage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = () => {
    console.log(text);
  };

  return (
    <>
      <h2>2. React.memo</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <MemoExpensive onClick={onExpensiveClick} />
    </>
  );
};

export default ReactMemoPage;
