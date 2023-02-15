import React from 'react';

function useCounter(initialCount) {
  const [count, setCount] = React.useState(initialCount);

  React.useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return { count, handleClick: increment };
}

export default useCounter;
