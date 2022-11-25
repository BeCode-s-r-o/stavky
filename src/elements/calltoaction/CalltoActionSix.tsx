import { Link } from 'react-scroll';

const callToActionData = {
  title:
    'Delí Vás už len posledný krok od spolupráce. Prezrite si ešte raz našu ponuku služieb. Zvoľte si ten správny balík pre Vás.',
  subtitle: 'Finest choice for your home & office',
  btnText: 'PONUKA SLUŽIEB',
};
const CalltoActionSix = ({ pageType }: PageType) => {
  return (
    <div className="rn-callto-action clltoaction-style-default style-6">
      <div className="container">
        <div className="row row--0 align-items-center content-wrapper">
          <div className="col-lg-2 col-12"></div>
          <div className="col-lg-6 col-12">
            <div className="inner">
              <div className="content text-start">
                <h6 className="subtitle">{callToActionData.title}</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12">
            <div className="call-to-btn text-start text-lg-right mt_md--20 mt_sm--20">
              <Link className="btn-default" to="packages">
                {callToActionData.btnText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CalltoActionSix;
