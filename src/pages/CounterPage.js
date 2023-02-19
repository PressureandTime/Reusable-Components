import React from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
import produce from 'immer';

const INCREMENT = 'increment';
const CHANGE = 'change';
const ADD = 'add';
const DECREMENT = 'decrement';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      state.count = state.count + 1;
      return;

    case CHANGE:
      state.valueToAdd = action.payload;
      return;

    case ADD:
      state.count = state.count + state.valueToAdd;
      return;

    case DECREMENT:
      state.count = state.count - 1;
      return;

    default:
      return;
  }
};

function CounterPage({ initialCount }) {
  //   const [count, setCount] = React.useState(initialCount);
  //   const [valueToAdd, setValueToAdd] = React.useState(0);

  const [state, dispatch] = React.useReducer(produce(reducer), {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    // setCount(count - 1);
    dispatch({ type: DECREMENT });
  };

  const handleChange = (event) => {
    // setValueToAdd(parseInt(event.target.value) || 0);

    dispatch({ type: CHANGE, payload: parseInt(event.target.value) || 0 });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: ADD });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-l">Count is {state.count}</h1>

      <div className="flex flex-row">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>

        <input
          type="number"
          value={state.valueToAdd || ''}
          onChange={handleChange}
          name="name"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
