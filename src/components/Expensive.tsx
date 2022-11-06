import { getColor } from '@utils';
import { useMemo } from 'react';

const getDummyList = () => {
  return Array.from(new Array(5_000), (_, i) => [i, getColor()]);
};

const COLOR_LIST = getDummyList();

const Expensive = ({ onClick }: ExpensiveProps) => {
  return (
    <>
      <button onClick={onClick}>현재 text값 보기</button>
      <div
        onClick={onClick}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          width: '100%',
          marginTop: 20,
        }}
      >
        {COLOR_LIST.map(([value, color], i) => (
          <div
            key={`${i}-${value}`}
            style={{ width: 10, height: 10, backgroundColor: `${color}` }}
          />
        ))}
      </div>
    </>
  );
};

export interface ExpensiveProps {
  onClick: () => void;
}
export default Expensive;
