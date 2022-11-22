import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import AccordionOne from './AccordionOne';

const RnAccordion = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Accordion Area  */}
          <div className="rn-accordion-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="PÝTATE SA"
                    title="Časté otázky"
                    description=""
                  />
                </div>
              </div>
              <div className="row mt--35 row--20">
                <div className="col-lg-10 offset-lg-1">
                  <AccordionOne customStyle="" />
                </div>
              </div>
            </div>
          </div>
          {/* End Accordion Area  */}
          <Separator />
        </div>
      </Layout>
    </>
  );
};
export default RnAccordion;
