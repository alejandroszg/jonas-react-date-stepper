import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [steps, setSteps] = useState(1);
  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <div>
      <div>
        <button onClick={() => setSteps((s) => s - 1)}>-</button>
        <span>Steps: {steps}</span>
        <button onClick={() => setSteps((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - steps)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + steps)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${count} days ago was `}
        </span>
        <span>
          {date.toLocaleString("en-US", {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
          })}
        </span>
      </p>
    </div>
  );
}
