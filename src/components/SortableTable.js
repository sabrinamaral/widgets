import { useState } from "react";
import {
  TbSortAscending,
  TbSortDescending,
  TbArrowsSort,
} from "react-icons/tb";
import Table from "../components/Table";

const SortableTable = (props) => {
  const [sortOrder, setSortOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            <div className="pr-1">{column.label}</div>
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  let sortedData = data;
  if (sortOrder && sortBy) {
    const { sortValue } = config.find((column) => column.label === sortBy);
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reversedOrder = sortOrder === "asc" ? 1 : -1;

      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reversedOrder;
      } else {
        return (valueA - valueB) * reversedOrder;
      }
    });
  }
  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, name, order) => {
  if (label !== name) {
    return <TbArrowsSort />;
  } else if (label === name && order === "asc") {
    return <TbSortAscending />;
  } else if (label === name && order === "desc") {
    return <TbSortDescending />;
  }
};

export default SortableTable;
