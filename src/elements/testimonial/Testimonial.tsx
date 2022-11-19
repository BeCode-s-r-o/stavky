import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import TestimonialOne from './TestimonialOne';
import TestimonialThree from './TestimonialThree';
import TestimonialTwo from './TestimonialTwo';

const Testimonial = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-elements-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="NAŠI KLIENTI"
                    title="REFERENCIE KLIENTOV"
                    description={undefined}
                  />
                </div>
              </div>
              <TestimonialOne
                column="col-lg-4 col-md-6 col-12"
                teamStyle="card-style-default testimonial-style-one style-two border-gradient"
              />
            </div>
          </div>
          {/* End Elements Area  */}
          <Separator />
        </div>
      </Layout>
    </>
  );
};
export default Testimonial;
