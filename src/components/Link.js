import useNavigateContext from "../hooks/useNavigateContext";

const Link = ({ to, children }) => {
  const { navigate } = useNavigateContext();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(to);
  };
  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
