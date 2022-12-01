import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import CalltoActionFive from './CalltoActionFive';

const CalltoAction = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-callto-action-area rn-section-gapBottom">
            <div className="wrapper">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="SLEDUJTE NÁS "
                    title="AKTUALIZOVANÉ VÝSLEDKY"
                    description=""
                  />
                </div>
              </div>
              <CalltoActionFive />
            </div>
          </div>
          {/* End Elements Area  */}
        </div>
      </Layout>
    </>
  );
};
export default CalltoAction;
