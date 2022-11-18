import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import SectionTitle from '../sectionTitle/SectionTitle';
import CalltoActionOne from './CalltoActionOne';
import CalltoActionTwo from './CalltoActionTwo';
import CalltoActionThree from './CalltoActionThree';
import CalltoActionFour from './CalltoActionFour';
import CalltoActionFive from './CalltoActionFive';
import CalltoActionSix from './CalltoActionSix';
import CalltoActionSeven from './CalltoActionSeven';
import CalltoActionEight from './CalltoActionEight';
import Separator from '../separator/Separator';

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
