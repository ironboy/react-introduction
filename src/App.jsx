import CounterButton from "./CounterButton";

export default function App() {

  // React is basically a state -> view handling library/framework
  // When we change a state the affected view(s) updates automatically
  // No manual DOM manipulation is needed (or should be done)

  return <>
    <h3>Hello world!</h3>
    <p>This comes from the App component in my React application.</p>
    {/* A component can mount (include) another component: */}
    <CounterButton startValue={10} max={20} />
    <CounterButton startValue={100} max={110} />
  </>;
}