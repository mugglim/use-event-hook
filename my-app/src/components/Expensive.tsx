import { getColor } from '@utils';

const DUMMY_LIST = Array.from(new Array(5_000), (_, i) => [i, getColor()]);

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
      {DUMMY_LIST.map(([value, color], i) => (
        <div
          key={`${i}-${value}`}
          style={{ width: 10, height: 10, backgroundColor: `${color}` }}
        />
      ))}
    </div>
  );
};

export interface ExpensiveProps {
  onClick: () => void;
}
export default Expensive;
