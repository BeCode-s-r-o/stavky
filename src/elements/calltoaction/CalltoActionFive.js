import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { FiArrowRight } from 'react-icons/fi';

const callToActionData = {
  title: 'Ready to start creating a standard website?',
  subtitle:
    'Sledujte a odoberajte naše aktualizované výsledky na instagrame. V našom telegram kanáli nájdete každodennú aktivitu a možnosť otestovania našich služieb úplne ZDARMA.',
  btnText: 'Purchase Doob',
};

const CalltoActionFive = () => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  <h6 className="subtitle">{callToActionData.subtitle}</h6>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  <div className="d-flex justify-content-center">
                    <div className="call-to-btn text-center ">
                      <a className="btn-default btn-icon mx-2" href="#">
                        INSTAGRAM
                        <i className="icon">
                          <FiArrowRight />
                        </i>
                      </a>
                    </div>
                    <div className="call-to-btn text-center ">
                      <a className=" btn-default btn-icon mx-2" href="#">
                        TELEGRAM
                        <i className="icon">
                          <FiArrowRight />
                        </i>
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
