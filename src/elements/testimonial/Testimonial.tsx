import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import TestimonialOne from './TestimonialOne';

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
                    title="Referencie od spokojných klientov"
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
