import { useCallback, useState } from 'react';
import Input from '@components/Input';
import Expensive from '@components/Expensive';

const ReactMemoPage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = useCallback(() => {
    console.log(text);
  }, [text]);

  return (
    <>
      <h2>3. useCallback</h2>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Expensive onClick={onExpensiveClick} />
    </>
  );
};

export default ReactMemoPage;
