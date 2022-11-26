import Link from "./Link";
import Route from "./Route";
import AccordionPage from "../pages/AccordionPage";
import ButtonPage from "../pages/ButtonPage";
import DropdownPage from "../pages/DropdownPage";

const Navbar = () => {
  return (
    <div>
      <Link to="/accordion">Accordion</Link>
      <Link to="/button">Buttons</Link>
      <Link to="/dropdown">Dropdown</Link>
      <div>
        <Route path={"/accordion"}>
          <AccordionPage />
        </Route>
        <Route path={"/button"}>
          <ButtonPage />
        </Route>
        <Route path={"/dropdown"}>
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
};

export default Navbar;
