import Table from "../components/Table";
const data = [
  { name: "Orange", color: "bg-orange-500", score: 5 },
  { name: "Apple", color: "bg-red-500", score: 3 },
  { name: "Banana", color: "bg-yellow-400", score: 1 },
  { name: "Lime", color: "bg-green-600", score: 4 },
];
const TablePage = () => {
  return (
    <div>
      <Table data={data} />
    </div>
  );
};

export default TablePage;
