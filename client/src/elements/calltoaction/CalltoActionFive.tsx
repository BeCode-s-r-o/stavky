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
  return (
    <div className="rn-callto-action clltoaction-style-default style-5">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper theme-shape">
          <div className="col-lg-12">
            <div className="inner">
              <div className="content text-center">
                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  <h5 className="subtitle px-5">{callToActionData.subtitle}</h5>
                </ScrollAnimation>

                <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                  <div className="d-flex justify-content-center">
                    <div className="call-to-btn text-center ">
                      <a className="btn-default btn-icon mx-2" href="#">
                        INSTAGRAM
                      </a>
                    </div>
                    <div className="call-to-btn text-center ">
                      <a className=" btn-default btn-icon mx-2" href="#">
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
