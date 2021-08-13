import './Navbar.css'
import { NavLink } from "react-router-dom";

const imIn = (
  <>
  <NavLink className="link" to="/add">Add Project</NavLink>
  <NavLink className="link" to="/logout">Sale Bye!</NavLink>
  </>
)

const alwaysOptions = (
  <>
      <NavLink className="link" to="/">Home</NavLink>
      <NavLink className="link" to="/design_projects">Visual Designer</NavLink>
      <NavLink className="link" to="/developer_projects">Full Stack Devloper</NavLink>
  </>
)

const NavBar = ({ admin }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          <img src="https://imgur.com/NrORVNS.png" alt="Andrea" />
        </NavLink>
        <div className="links">
                        {admin && <div className="link welcome"></div>}
                        {alwaysOptions}
                        {admin ? imIn : <p></p>}
          </div>
       </div>
    </nav>
  );
};

export default NavBar