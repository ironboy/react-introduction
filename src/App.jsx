import { useState } from 'react';
import CounterButton from "./CounterButton";

export default function App() {

  // React is basically a state -> view handling library/framework
  // When we change a state the affected view(s) updates automatically
  // No manual DOM manipulation is needed (or should be done)

  // Note: RULES OF HOOKS IS SUPER IMPORTANT IN React.
  // You MAY NOT call a hook after an early return or inside a condition

  // a state variable and its setter is returned from useState
  // you give useState the initial value as a parameter

  const [counter1, setCounter1] = useState(10);
  const [counter2, setCounter2] = useState(100);

  return <>
    <h3>Hello world!</h3>
    <p>This comes from the App component in my React application.</p>
    {/* A component can mount (include) another component: */}
    <CounterButton counter={counter1} setCounter={setCounter1} max={20} />
    <CounterButton counter={counter2} setCounter={setCounter2} max={110} />
    <p>The sum of our two counters is {counter1 + counter2}.</p>
  </>;
}