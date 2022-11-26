import useNavigateContext from "../hooks/useNavigateContext";

const Route = ({ children, path }) => {
  const { currentPath } = useNavigateContext();
  if (currentPath === path) {
    return children;
  }
  return null;
};

export default Route;
