import './Navbar.css';
import { NavLink } from "react-router-dom";

const home = (
  <> 
  <NavLink className="andy" to="/logout">Sale Bye!</NavLink>
  </>

)


const NavBar = () => {
  return (
    <nav>
      <div className="nav">
      <NavLink className="vd-link" to="/design_projects">Visual Designer</NavLink>
      <NavLink className="fd-link" to="/developer_projects">Full-Stack Developer</NavLink>
      <a className="r-link" href="https://drive.google.com/file/d/1O31zgsx6n_gBY6nEKZyEosiQUpfnCnHA/view?usp=sharing">Resumé</a>
       </div>
    </nav>
  );
};

export default NavBar