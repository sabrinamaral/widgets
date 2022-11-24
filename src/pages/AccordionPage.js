import Accordion from "../components/Accordion";

const AccordionPage = () => {
  const items = [
    {
      id: "hjk32k",
      title: "What is React?",
      content:
        "React is a front end javascript framework.React is a front end javascript framework.React is a front end javascript framework.React is a front end javascript framework.",
    },
    {
      id: "jfh45hj6",
      title: "Why use React?",
      content:
        "React is a favorite JS library among engineers.React is a favorite JS library among engineers.React is a favorite JS library among engineers.React is a favorite JS library among engineers.",
    },
    {
      id: "nm78nmj5",
      title: "How do you use React?",
      content:
        "You use React by creating components.You use React by creating components.You use React by creating components.",
    },
  ];
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default AccordionPage;
