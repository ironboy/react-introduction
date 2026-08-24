// props is an object with the properties/"attributes"
// you send to the component when you mount it in jsx
export default function CounterButton(props) {

  // destructure the props into separate variables/constant
  const { counter, setCounter, max } = props;

  return <button onClick={() => counter < max && setCounter(counter + 1)}>
    {counter}
  </button>;
}