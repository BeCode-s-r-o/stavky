import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';

const Social = ({ pageType }: PageType) => {
  return (
    <>
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
                    subtitle="OSTAŇME V KONTAKTE"
                    title="Sledijte nás na sociálnych sieťach"
                    description=""
                  />
                </div>
              </div>
              <div className="row mt--30">
                <div className="col-lg-12">
                  <ul className="social-icon social-default">
                    <li>
                      <Link to="facebook.com">
                        <FiFacebook />
                      </Link>
                    </li>
                    <li>
                      <Link to="twitter.com">
                        <FiTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="instagram.com">
                        <FiInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="linkdin.com">
                        <FiLinkedin />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End Elements Area  */}
          <Separator />
        </div>
      </Layout>
    </>
  );
};
export default Social;
