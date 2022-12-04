import { FaTelegramPlane, FaTiktok } from 'react-icons/fa';
import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { Element } from 'react-scroll';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';

const Social = ({ pageType }: PageType) => {
  return (
    <>
      <Element name="social">
        <Layout>
          <div className="main-content">
            {/* Start Elements Area  */}
            <div className="rwt-social-area rn-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      subtitle="SLEDUJTE NÁS"
                      title="NAŠE SOCIÁLNE SIETE"
                      description=""
                    />
                  </div>
                </div>
                <div className="row mt--30">
                  <div className="col-lg-12">
                    <ul className="social-icon social-default">
                      <li style={{ zIndex: -1 }}>
                        {pageType === 'forex' ? (
                          <a target="_blank" href="https://www.facebook.com/poradenstvoforex.sk">
                            <FiFacebook />
                          </a>
                        ) : (
                          <a target="_blank" href="https://www.facebook.com/poradenstvostavkove.sk">
                            <FiFacebook />
                          </a>
                        )}
                      </li>
                      <li style={{ zIndex: -1 }}>
                        {pageType === 'forex' ? (
                          <a target="_blank" href="https://www.tiktok.com/@forexporadenstvo">
                            <FaTiktok />
                          </a>
                        ) : (
                          <a target="_blank" href="https://www.tiktok.com/@stavkoveporadenstvo">
                            <FaTiktok />
                          </a>
                        )}
                      </li>
                      <li style={{ zIndex: -1 }}>
                        {pageType === 'forex' ? (
                          <a target="_blank" href="https://www.instagram.com/forexporadenstvo.official/">
                            <FiInstagram />
                          </a>
                        ) : (
                          <a target="_blank" href="https://www.instagram.com/stavkoveporadenstvo.official/">
                            <FiInstagram />
                          </a>
                        )}
                      </li>
                      <li style={{ zIndex: -1 }}>
                        {pageType === 'forex' ? (
                          <a target="_blank" href="https://t.me/forexporadenstvosk">
                            <FaTelegramPlane />
                          </a>
                        ) : (
                          <a target="_blank" href="https://www.t.me/stavkoveporadenstvosk">
                            <FaTelegramPlane />
                          </a>
                        )}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <Separator />
          </div>
        </Layout>
      </Element>
    </>
  );
};
export default Social;
