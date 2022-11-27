import { useRef, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from '../../elements/logo/Logo';
import MobileMenu from './MobileMenu';
import Nav from './Nav';
import useStickyHeader from './useStickyHeader';
import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll';
const HeaderOne = ({ btnStyle, HeaderSTyle }: any) => {
  const [ofcanvasShow, setOffcanvasShow] = useState(false);
  const onCanvasHandler = () => {
    setOffcanvasShow((prev) => !prev);
  };
  const ref = useRef();
  let [check, setCheck] = useState(true);
  const sticky = useStickyHeader(50);
  const headerClasses = `header-default ${sticky && check ? 'sticky' : ''}`;

  return (
    <>
      <header className={`rn-header header-default ${HeaderSTyle} ${headerClasses}`}>
        <div className="container position-relative">
          <div className="row align-items-center row--0">
            <div className="col-lg-3 col-md-6 col-4">
              <Logo image={`images/logo/${process.env.REACT_APP_WEBSITE_TYPE}.png`} />
            </div>
            <div className="col-lg-9 col-md-6 col-8 position-static">
              <div className="header-right">
                <nav className="mainmenu-nav d-none d-lg-block">
                  <Nav />
                </nav>
                <div className="header-btn">
                  <Link className={`btn-default ${btnStyle}`} to="packages" offset={-100}>
                    ZAKÚPIŤ ČLENSTVO
                  </Link>
                </div>
                <div className="mobile-menu-bar ml--5 d-block d-lg-none">
                  <div className="hamberger">
                    <span className="hamberger-button" onClick={onCanvasHandler}>
                      <FiMenu />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu show={ofcanvasShow} onClose={onCanvasHandler} />
    </>
  );
};
export default HeaderOne;
