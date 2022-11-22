import { FiMail, FiPhone } from 'react-icons/fi';

const ContactOne = () => {
  return (
    <>
      <div className="row row--15">
        <div className="col-lg-12">
          <div className="rn-contact-address mt_dec--30">
            <div className="row">
              <div className="col-lg-2 col-md-6 col-12"></div>
              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiPhone />
                  </div>
                  <div className="inner">
                    <h4 className="title">Telefónne číslo</h4>
                    <p>
                      <a href="tel:+421 123 123 123">+421 123 123 123</a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMail />
                  </div>
                  <div className="inner">
                    <h4 className="title">E-mail</h4>
                    <p>
                      <a href="mailto:">
                        info@
                        {process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexporadenstvo' : 'stavkoveporadenstvo'}.sk
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="col-lg-4 col-md-6 col-12">
                <div className="rn-address">
                  <div className="icon">
                    <FiMapPin />
                  </div>
                  <div className="inner">
                    <h4 className="title">Our Location</h4>
                    <p>
                      5678 Bangla Main Road, cities 580 <br /> GBnagla, example 54786
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactOne;
