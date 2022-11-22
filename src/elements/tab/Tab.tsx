import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
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
                    title="Začnite si plniť svoje sny"
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
