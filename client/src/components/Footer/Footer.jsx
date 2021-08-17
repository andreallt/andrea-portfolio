import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/andrea-llano-tamayo/" target="_blank">
    <img className="logos" src="https://imgur.com/QRKRsnF.png" alt="linkedin"/>
    </a>
     <Link to={`/login`}>...</Link>
    <a href="https://github.com/andreallt" target="_blank">
    <img className="logos" src="https://imgur.com/GQHDRqn.png" alt="github"/>
    </a>
    </footer>
  );
}

export default Footer;