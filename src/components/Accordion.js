import React, { useState } from "react";
import { GoChevronDown, GoChevronRight } from "react-icons/go";

const Accordion = ({ items }) => {
  const [expendedIndex, setExpendedIndex] = useState(-1);
  const handleClick = (nextIndex) => {
    if (expendedIndex === nextIndex) {
      setExpendedIndex(-1);
    } else {
      setExpendedIndex(nextIndex);
    }
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expendedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronRight />}
      </span>
    );

    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.title}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
};

export default Accordion;
