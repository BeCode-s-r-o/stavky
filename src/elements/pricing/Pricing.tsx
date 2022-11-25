import { Element } from 'react-scroll';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import PricingFive from './PricingFive';

const Pricing = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <Element name="packages">
          <div className="main-content">
            {/* Start Elements Area  */}
            <div className="rwt-pricing-area rn-section-gap">
              <div className="container">
                <div className="row mb--40 mb_sm--0">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      subtitle="CENNÍK"
                      title="Služby, ktoré ponúkame"
                      description=""
                    />
                  </div>
                </div>
                <PricingFive />
              </div>
            </div>
            {/* End Elements Area  */}
          </div>
        </Element>
      </Layout>
    </>
  );
};
export default Pricing;
