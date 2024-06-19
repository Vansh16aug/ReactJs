import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState("");
  const [tip1, setTip1] = useState(0);
  const [tip2, setTip2] = useState(0);

  const tip = bill * ((tip1 + tip2) / 2 / 100);

  function handleReset() {
    setBill("");
    setTip1(0);
    setTip2(0);
  }
  return (
    <div>
      <div className="input">
        <Bill bill={bill} onSetBill={setBill} />
        
        <Tip tip={tip1} onSetTip={setTip1}>
          {" "}
          How did you like the service ?{" "}
        </Tip>

        <Tip tip={tip2} onSetTip={setTip2}>
          {" "}
          How did your friend like the service ?{" "}
        </Tip>
        {bill > 0 && (
          <>
            <Output bill={bill} tip={tip} />
            <Reset onReset={handleReset} />
          </>
        )}
      </div>
    </div>
  );
}

function Bill({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill? </label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      ></input>
    </div>
  );
}

function Tip({ children, tip, onSetTip }) {
  return (
    <div>
      <label>{children}</label>
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value="0">Dissatisfied 0%</option>
        <option value="10">It was good 10%</option>
        <option value="15">It was better than others 15%</option>
        <option value="20">Absolutely amazing! 20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
