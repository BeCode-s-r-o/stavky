import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import PricingOne from './PricingOne';
import PricingTwo from './PricingTwo';
import PricingThree from './PricingThree';
import PricingFour from './PricingFour';
import PricingFive from './PricingFive';
import Separator from '../separator/Separator';

const Pricing = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-pricing-area rn-section-gap">
            <div className="container">
              <div className="row mb--40 mb_sm--0">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Pricing"
                    title="Pricing Style Five."
                    description=""
                  />
                </div>
              </div>
              <PricingFive />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Pricing;
