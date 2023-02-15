import React from 'react';
import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

function CounterPage({ initialCount }) {
  const { count, handleClick: increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
