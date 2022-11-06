import { getColor } from '@utils';

const Expensive = ({ onClick }: ExpensiveProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 1500,
        marginTop: 20,
      }}
    >
      {getDummyList().map(([value, color], i) => (
        <div
          key={`${i}-${value}`}
          style={{ width: 10, height: 10, backgroundColor: `${color}` }}
        />
      ))}
    </div>
  );
};

const getDummyList = () => {
  return Array.from(new Array(5_000), (_, i) => [i, getColor()]);
};

export interface ExpensiveProps {
  onClick: () => void;
}
export default Expensive;
