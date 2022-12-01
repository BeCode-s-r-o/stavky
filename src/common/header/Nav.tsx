import { Link } from 'react-scroll';

const pageType = process.env.REACT_APP_WEBSITE_TYPE;
const Nav = () => {
  return (
    <ul className="mainmenu">
      <li className="has-droupdown">
        <ScrollLink to="uvod">Úvod</ScrollLink>
      </li>
      <li>
        <ScrollLink to="onas" offset={-90}>
          O nás
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="results" offset={-100}>
          Výsledky
        </ScrollLink>
      </li>
      {/*       <li className="with-megamenu">
        <ScrollLink to="proces">Proces objednávky</ScrollLink>
      </li> */}
      <li className="has-droupdown">
        <ScrollLink to="ref" offset={-100}>
          Referencie
        </ScrollLink>
      </li>
      <li className="has-droupdown">
        <ScrollLink to="faq" as="a" offset={-100}>
          Časté otázky
        </ScrollLink>
      </li>

      <li className="has-droupdown">
        <a href="#">Ostatné</a>
        <ul className="submenu">
          <li>
            <ScrollLink to="proces" offset={-100}>
              Postup spolupráce
            </ScrollLink>
          </li>

          <li>
            <ScrollLink to="social" offset={-200}>
              Sledujte nás
            </ScrollLink>
          </li>
          {/* <li>
            <ScrollLink to="ref">Referencie</ScrollLink>
          </li> */}
          <li>
            <ScrollLink to="packages">Ponuka služieb</ScrollLink>
          </li>

          <li>
            {pageType !== 'forex' ? (
              <a href="https://www.forexporadenstvo.sk" target="_blank">
                Forex poradenstvo
              </a>
            ) : (
              <a href="https://www.stavkoveporadenstvo.sk" target="_blank">
                Stávkové poradenstvo
              </a>
            )}
          </li>
          <li>
            <a href="#">Free skupina</a>
          </li>
        </ul>
      </li>
      {/*       <li className="has-droupdown">
        <ScrollLink to="contact">Kontakt</ScrollLink>
      </li> */}
    </ul>
  );
};

const ScrollLink = ({ to, children, offset = 0 }: any) => {
  return (
    <Link to={to} href={'#' + to} duration={800} offset={offset} smooth="easeInOutQuart">
      {children}
    </Link>
  );
};

export default Nav;
