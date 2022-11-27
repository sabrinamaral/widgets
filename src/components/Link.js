import useNavigateContext from "../hooks/useNavigateContext";

const Link = ({ to, children }) => {
  const { navigate } = useNavigateContext();

  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      return;
    }
    e.preventDefault();
    navigate(to);
  };
  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
