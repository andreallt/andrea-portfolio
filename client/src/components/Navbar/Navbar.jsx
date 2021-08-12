import { NavLink } from "react-router-dom";



const NavBar = () => {
  return (
    <nav>
        <NavLink className="logo" to="/">
          <p>ANDREA</p>
        </NavLink>
    </nav>
  );
};

export default NavBar