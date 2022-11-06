import { getColor } from '@utils';

const getDummyList = () => {
  return Array.from(new Array(50_000), (_, i) => [i, getColor()]);
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
            style={{
              width: 5,
              height: 5,
              border: '1px solid #000',
              backgroundColor: `${color}`,
            }}
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
