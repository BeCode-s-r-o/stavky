import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
const pageType = process.env.REACT_APP_WEBSITE_TYPE;
const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <Link to="uvod">Úvod</Link>
      </li>
      <li>
        <Link to="onas">O nás</Link>
      </li>
      <li>
        <Link to="results">Výsledky</Link>
      </li>
      {/*       <li className="with-megamenu">
        <Link to="proces">Proces objednávky</Link>
      </li> */}
      <li className="has-droupdown">
        <Link to="ref">Referencie</Link>
      </li>
      <li className="has-droupdown">
        <Link to="faq" as="a">
          Časté otázky
        </Link>
      </li>

      <li className="has-droupdown">
        <a href="#">Ostatné</a>
        <ul className="submenu">
          <li>
            <Link to="proces">Postup spoulpráce</Link>
          </li>
          <li>
            <Link to="blog">Blog</Link>
          </li>
          <li>
            <Link to="social">Sledujte nás</Link>
          </li>
          <li>
            <Link to="ref">Referencie</Link>
          </li>
          <li>
            <Link to="packages">Ponuka služieb</Link>
          </li>

          <li>
            {pageType !== 'forex' ? (
              <a href="https://www.forexporadenstvo.sk">Forex poradenstvo</a>
            ) : (
              <a href="https://www.stavkoveporadenstvo.sk">Stávkové poradenstvo</a>
            )}
          </li>
          <li>
            <a href="#">Free skupina</a>
          </li>
        </ul>
      </li>
      {/*       <li className="has-droupdown">
        <Link to="contact">Kontakt</Link>
      </li> */}
    </ul>
  );
};
export default Nav;
