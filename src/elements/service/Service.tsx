import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import ServiceFive from './ServiceFive';
import ServiceFour from './ServiceFour';
import ServiceOne from './ServiceOne';
import ServiceThree from './ServiceThree';
import ServiceTwo from './ServiceTwo';

const Service = () => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Service Area  */}
          <div className="rn-service-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="What we can do for you"
                    title="Services provide for you."
                    description="There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration."
                  />
                </div>
              </div>
              <ServiceOne serviceStyle="service__style--1 bg-color-blackest radius mt--25" textAlign="text-center" />
            </div>
          </div>
          {/* End Service Area  */}

          <Separator />
        </div>
      </Layout>
    </>
  );
};

export default Service;
