import { useCallback, useState } from 'react';
import Input from '@components/Input';
import MemoExpensive from '@components/MemoExpensive';

const UseCallbackPage = () => {
  const [text, setText] = useState('');

  const onExpensiveClick = useCallback(() => {
    alert(text);
  }, [text]);

  return (
    <>
      <h2>3. useCallback</h2>
      <span>using hooks</span>
      <ul>
        <li>useState</li>
        <li>React.memo</li>
        <li>useCallback</li>
      </ul>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <MemoExpensive onClick={onExpensiveClick} />
    </>
  );
};

export default UseCallbackPage;
