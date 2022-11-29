const Table = ({ data }) => {
  const renderRows = data.map(({ name, color, score }) => {
    return (
      <tr className="border-b" key={name}>
        <td className="p-3">{name}</td>
        <td className="p-3">
          <div className={`p-3 m-2 ${color}`}></div>
        </td>
        <td className="p-3">{score}</td>
      </tr>
    );
  });
  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">
          <th>Fruit</th>
          <th>Color</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>{renderRows}</tbody>
    </table>
  );
};

export default Table;
