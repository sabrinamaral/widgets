import { useState } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const CounterPage = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);
  const [addValue, setAddValue] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setAddValue(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setCount(count + addValue);
    setAddValue(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}</h1>
      <div className="flex flex-row">
        <Button onClick={increment} className="mr-2">
          Increment
        </Button>
        <Button onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label> Add a lot!</label>
        <input
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
          value={addValue || ""}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
