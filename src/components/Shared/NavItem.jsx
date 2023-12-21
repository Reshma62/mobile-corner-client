import { Link, NavLink } from "react-router-dom";

const NavItem = ({ href, menuItem }) => {
  return (
    <li>
      <NavLink className=" font-semibold" to={href}>
        {menuItem}
      </NavLink>
    </li>
  );
};

export default NavItem;
