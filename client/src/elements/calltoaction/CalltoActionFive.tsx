import ScrollAnimation from 'react-animate-on-scroll';
import { FiArrowRight } from 'react-icons/fi';

const callToActionData = {
  title: 'Ready to start creating a standard website?',

  subtitle: (
    <h5 className="subtitle px-5 col-lg-8 mx-auto">
      Sledujte a odoberajte naše aktualizované výsledky na instagrame. V našom telegram kanáli nájdete každodennú
      aktivitu a možnosť otestovania našich služieb úplne ZDARMA.
    </h5>
  ),
};

const CalltoActionFive = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  return (
    <div className="rn-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape" style={{ zIndex: -1 }}>
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  {callToActionData.subtitle}
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  <div className="d-flex justify-content-center">
                    <div className="call-to-btn text-center ">
                      <a
                        className="btn-default btn-icon mx-2"
                        href={
                          pageType === 'forex'
                            ? 'https://www.instagram.com/forexporadenstvo.official/'
                            : 'https://www.instagram.com/stavkoveporadenstvo.official/'
                        }
                      >
                        INSTAGRAM
                      </a>
                    </div>
                    <div className="call-to-btn text-center ">
                      <a
                        className=" btn-default btn-icon mx-2"
                        href={
                          pageType === 'forex'
                            ? 'https://t.me/forexporadenstvosk'
                            : 'https://t.me/stavkoveporadenstvosk'
                        }
                      >
                        TELEGRAM
                      </a>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionFive;
