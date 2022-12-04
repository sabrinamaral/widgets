import {
  TbSortAscending,
  TbSortDescending,
  TbArrowsSort,
} from "react-icons/tb";
import useSort from "../hooks/use-sort";
import Table from "../components/Table";

const SortableTable = (props) => {
  const { config, data } = props;
  const { sortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => sortColumn(column.label)}
        >
          <div className="flex items-center">
            <div className="pr-1">{column.label}</div>
            {getIcons(column.label, sortBy, sortOrder)}
          </div>
        </th>
      ),
    };
  });

  return <Table {...props} data={sortedData} config={updatedConfig} />;
};

const getIcons = (label, sortBy, sortOrder) => {
  if (label !== sortBy) {
    return <TbArrowsSort />;
  } else if (label === sortBy && sortOrder === "asc") {
    return <TbSortAscending />;
  } else if (label === sortBy && sortOrder === "desc") {
    return <TbSortDescending />;
  }
};

export default SortableTable;
