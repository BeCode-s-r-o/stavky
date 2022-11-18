import Layout from '../../common/Layout';
import SEO from '../../common/SEO';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import TabOne from './TabOne';
import TabThree from './TabThree';
import TabTwo from './TabTwo';

const Tab = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          <Separator />

          {/* Start Elements Area  */}
          <div className="rwt-tab-area rn-section-gap">
            <div className="container">
              <div className="row mb--40">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="PREČO SI VYBRAŤ NÁS "
                    title="ZAČNITE SI PLNIŤ SVOJE SNY "
                    description=""
                  />
                </div>
              </div>
              <TabTwo pageType={pageType} />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Tab;
