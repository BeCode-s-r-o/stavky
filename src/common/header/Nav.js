import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="#">Úvod</Link>
      </li>

      <li>
        <Link to="/about-us">O nás</Link>
      </li>

      <li className="with-megamenu">
        <Link to="#">Proces objednávky</Link>
      </li>

      <li className="has-droupdown">
        <Link to="#">Časté otázky</Link>
      </li>

      <li className="has-droupdown">
        <Link to="#">Referencie</Link>
      </li>

      <li className="has-droupdown">
        <Link to="/contact">Kontakt</Link>
      </li>
    </ul>
  );
};
export default Nav;
