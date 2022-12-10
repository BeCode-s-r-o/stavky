import Layout from '../common/Layout';
import CalltoActionSix from '../elements/calltoaction/CalltoActionSix';
import SectionTitle from '../elements/sectionTitle/SectionTitle';

const WhyUs = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-callto-action-area rn-section-gapBottom">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12 ">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="ZAČNITE UŽ DNES"
                    title="Jednoduchý zárobok"
                    description=""
                  />
                </div>
              </div>
              <CalltoActionSix />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};

export default WhyUs;
