import { Element, Link } from 'react-scroll';
import HeaderOne from '../common/header/HeaderOne';
const BannerData = [{}];

const WebAgency = ({ pageType }: PageType) => {
  return (
    <>
      <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
      <Element name="uvod">
        <div className="slider-area slider-style-8 height-650">
          {/* style={{ background: `url(${Background})` }} */}

          {BannerData.map((data, index) => (
            <div key={index} className="single-slide" style={{ position: 'relative' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12" style={{ marginTop: '-3em' }}>
                    <div className="inner text-center">
                      <span className="subtitle theme-gradient">
                        {pageType === 'forex' ? 'FOREX PORADENSTVO' : 'STÁVKOVÉ PORADENSTVO'}
                      </span>
                      <h1
                        className="title "
                        style={{ paddingTop: '2rem', marginBottom: '0px' }}
                        dangerouslySetInnerHTML={{
                          __html:
                            pageType === 'forex'
                              ? 'ZAČNITE ZARÁBAŤ  <br /> FOREX OBCHODOVANÍM'
                              : 'ZAČNITE ZARÁBAŤ  <br /> STÁVKOVANÍM ZÁPASOV',
                        }}
                      ></h1>
                      <p
                        className="description py-5 px-md-5 px-2"
                        dangerouslySetInnerHTML={{
                          __html:
                            pageType === 'forex'
                              ? 'Investujte s našimi službami jednoducho a efektívne cez aplikáciu. Naučíme Vás celý postup ako začať <br/> zarábať na obchodovaní menových párov. Trading s vysokou mierou dlhodobej úspešnosti.'
                              : 'Investujte s našimi službami jednoducho a efektívne cez aplikáciu. Naučíme Vás celý postup ako začať <br/> zarábať na stávkovaní športových zápasov. Tipovanie s vysokou mierou dlhodobej úspešnosti.',
                        }}
                      ></p>
                      <div className="button-group mt-1">
                        <Link to="packages" href="#packages" className="btn-default btn-large round" offset={-100}>
                          PONUKA SLUŽIEB
                        </Link>
                        <a
                          className="btn-default btn-border btn-large round"
                          target="_blank"
                          href={
                            pageType === 'forex'
                              ? 'https://t.me/forexporadenstvosk'
                              : 'https://t.me/stavkoveporadenstvosk'
                          }
                        >
                          FREE SKUPINA
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Slider Area  */}
      </Element>
    </>
  );
};
export default WebAgency;
