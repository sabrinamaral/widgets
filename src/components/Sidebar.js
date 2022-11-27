import Link from "./Link";

const Sidebar = () => {
  const links = [
    { label: "Dropdown", path: "/" },
    { label: "Accordion", path: "/accordion" },
    { label: "Buttons", path: "/buttons" },
  ];
  const renderedLinks = links.map(({ label, path }) => {
    return (
      <Link
        to={path}
        key={label}
        className={`mb-3`}
        activeClassName="font-bold border-l-4 border-blue-500 pl-2"
      >
        {label}
      </Link>
    );
  });
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
      {renderedLinks}
    </div>
  );
};

export default Sidebar;
