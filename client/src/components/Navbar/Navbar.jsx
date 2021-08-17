import './Navbar.css'
import { NavLink } from "react-router-dom";

const imIn = (
  <>
  <NavLink className="andy" to="/add">Add Project</NavLink>
  <NavLink className="andy" to="/logout">Sale Bye!</NavLink>
  </>
)


const NavBar = ({ admin }) => {
  return (
    <nav>
      <div className="nav">
      <NavLink className="vd-link" to="/design_projects">Visual Designer</NavLink>
      <NavLink className="fd-link" to="/developer_projects">Full-Stack Devloper</NavLink>
       </div>
    </nav>
  );
};

export default NavBar