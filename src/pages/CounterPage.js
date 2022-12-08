import { useReducer } from "react";
import Panel from "../components/Panel";
import Button from "../components/Button";

const INCREMENT_COUNT = "increment";
const DECREMENT_COUNT = "decrement";
const SET_VALUE_TO_ADD = "change_value_to_add";
const ADD_VALUE_TO_COUNT = "add_value_to_count";

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [addValue, setAddValue] = useState(0);
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT_COUNT:
        return { ...state, count: state.count + 1 };
      case SET_VALUE_TO_ADD:
        return { ...state, addValue: action.payload };
      case DECREMENT_COUNT:
        return { ...state, count: state.count - 1 };
      case ADD_VALUE_TO_COUNT:
        return {
          ...state,
          count: state.count + state.addValue,
          addValue: 0,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    addValue: 0,
  });

  console.log(state);

  const increment = () => {
    dispatch({ type: INCREMENT_COUNT });
  };
  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: ADD_VALUE_TO_COUNT });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
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
          value={state.addValue || ""}
          onChange={handleChange}
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
};

export default CounterPage;
