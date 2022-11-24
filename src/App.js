import { useState } from "react";
import DropDown from "./components/DropDown";

const App = () => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (option) => {
    setSelected(option);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <DropDown options={options} onChange={handleSelect} value={selected} />
  );
};

export default App;
