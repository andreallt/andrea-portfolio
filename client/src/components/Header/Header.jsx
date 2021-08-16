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
      <img className="link-logos" src="https://imgur.com/QRKRsnF.png" alt="linkedin"/>
      <img className="link-logos" src="https://imgur.com/GQHDRqn.png" alt="github"/>
      </div>
    </header>
);

export default Header