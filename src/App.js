import React from "react";
import Accordion from "./components/Accordion";
import Button from "./components/Button";

const items = [
  {
    title: "What is React?",
    content: "React is a front end javascript framework.",
  },
  {
    title: "Why use React?",
    content: "React is a favorite JS library among engineers.",
  },
  {
    title: "How do you use React?",
    content: "You use React by creating components.",
  },
];
const App = () => {
  return (
    <div>
      <div>
        <Button primary rounded>
          hello there
        </Button>
      </div>
      <div>
        <Button>buy now</Button>
      </div>
      <div>
        <Button>something</Button>
      </div>
      <div>
        <Button>click me</Button>
      </div>
    </div>
  );
};

export default App;
