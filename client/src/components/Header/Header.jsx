import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ admin }) => (
    <header>
      <div className="left">
      <Link to="/">
          <img className="logo" src="https://imgur.com/NrORVNS.png" alt="Andrea" />
      </Link>
      </div>
      <div className="right">
      {admin ? <div className="welcome"> 
       <Link id="andy" to="/add">Mas Projects</Link>
       <Link id="andy" to="/logout">Sale Bye!</Link> Hola! Como estas?
       </div> : <p></p>}
      <a href="https://www.linkedin.com/in/andrea-llano-tamayo/" target="_blank">
      <img className="link-logos" src="https://imgur.com/QRKRsnF.png" alt="linkedin"/>
      </a>
      <a href="https://github.com/andreallt" target="_blank">
      <img className="link-logos" src="https://imgur.com/GQHDRqn.png" alt="github"/>
      </a>
      </div>
    </header>
);

export default Header