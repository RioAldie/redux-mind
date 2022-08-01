import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section
      style={{
        p: '20px',
        marginLeft: '20px',
      }}
    >
      <p> {count} </p>
      <button onClick={(e) => dispatch(increment())}> + </button>
      <button onClick={(e) => dispatch(decrement())}> - </button>
    </section>
  );
};

export default Counter;
