import { FiInstagram, FiMail } from 'react-icons/fi';

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
                    <FiInstagram />
                  </div>
                  <div className="inner">
                    <h4 className="title" style={{ textTransform: 'uppercase' }}>
                      Instagram Support
                    </h4>
                    <p>
                      <a
                        href={`https://instagram.com/${
                          process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexporadenstvo' : 'stavkoveporadenstvo'
                        }.official`}
                      >
                        @{process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexporadenstvo' : 'stavkoveporadenstvo'}
                        .official
                      </a>
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
                    <h4 className="title" style={{ textTransform: 'uppercase' }}>
                      E-mail support
                    </h4>
                    <p>
                      <a
                        href={`mailto:info@${
                          process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexporadenstvo' : 'stavkoveporadenstvo'
                        }.sk`}
                      >
                        info@
                        {process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexporadenstvo' : 'stavkoveporadenstvo'}.sk
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactOne;
