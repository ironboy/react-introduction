import { useState } from 'react';

// props is an object with the properties/"attributes"
// you send to the component when you mount it in jsx
export default function CounterButton(props) {

  // destructure the props into separate variables/constant
  const { startValue, max } = props;

  // Note: RULES OF HOOKS IS SUPER IMPORTANT IN React.
  // You MAY NOT call a hook after an early return or inside a condition

  // a state variable and its setter is returned from useState
  // you give useState the initial value as a parameter
  const [counter, setCounter] = useState(startValue);

  return <button onClick={() => counter < max && setCounter(counter + 1)}>
    {counter}
  </button>;
}