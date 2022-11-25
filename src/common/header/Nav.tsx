import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="uvod">Úvod</Link>
      </li>

      <li>
        <Link to="onas">O nás</Link>
      </li>

      <li className="with-megamenu">
        <Link to="proces">Proces objednávky</Link>
      </li>

      <li className="has-droupdown">
        <Link to="faq">Časté otázky</Link>
      </li>

      <li className="has-droupdown">
        <Link to="ref">Referencie</Link>
      </li>

      <li className="has-droupdown">
        <Link to="contact">Kontakt</Link>
      </li>
    </ul>
  );
};
export default Nav;
