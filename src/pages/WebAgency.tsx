import HeaderOne from '../common/header/HeaderOne';
const BannerData = [
  {
    image: '/images/bg/bg-image-20.jpg',
    title: 'Our Web <br /> Agecny Plan.',
    description:
      'We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.',
  },
];

const WebAgency = ({ pageType }: PageType) => {
  return (
    <>
      <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />

      <div className="slider-area slider-style-8 height-650">
        {/* style={{ background: `url(${Background})` }} */}
        <div className="background-overlay"></div>
        {BannerData.map((data, index) => (
          <div key={index} className="single-slide" style={{ position: 'relative' }}>
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-12">
                  <div className="inner text-center">
                    <span className="subtitle theme-gradient">
                      {pageType === 'forex' ? 'FOREX PORADENSTVO' : 'STÁVKOVÉ PORADENSTVO'}
                    </span>
                    <h1
                      className="title"
                      style={{ paddingTop: '2rem' }}
                      dangerouslySetInnerHTML={{
                        __html:
                          pageType === 'forex'
                            ? 'ZAČNITE ZARÁBAŤ FOREX OBCHODOVANÍM'
                            : 'ZAČNITE ZARÁBAŤ STÁVKOVANÍM ZÁPASOV',
                      }}
                    ></h1>
                    <p
                      className="description"
                      dangerouslySetInnerHTML={{
                        __html:
                          pageType === 'forex'
                            ? 'Investujte s našimi službami jednoducho a efektívne cez aplikáciu. Naučíme Vás celý postup ako začať zarábať na obchodovaní menových párov. Trading s vysokou mierou úspešnosti.'
                            : 'Investujte s našimi službami jednoducho a efektívne cez aplikáciu. Naučíme Vás celý postup ako začať zarábať na stávkovaní športových zápasov. Tipovanie s vysokou mierou úspešnosti.',
                      }}
                    ></p>
                    <div className="button-group mt--30">
                      <a className="btn-default btn-large round" target="_blank" href="#">
                        PONUKA SLUŽIEB
                      </a>
                      <a className="btn-default btn-border btn-large round" href="#">
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
    </>
  );
};
export default WebAgency;
