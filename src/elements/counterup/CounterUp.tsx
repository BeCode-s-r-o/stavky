import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import BreadcrumbOne from '../breadcrumb/BreadcrumbOne';
import CounterUpOne from './CounterUpOne';
import CounterUpTwo from './CounterUpTwo';
import CounterUpFour from './CounterUpFour';

const CounterUp = () => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Elements Area  */}
          <div className="rwt-counterup-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Customizable counters"
                    title="Counters Custom Elements"
                    description=""
                  />
                </div>
              </div>
              <CounterUpTwo
                column="col-lg-4 col-md-6 col-sm-6 col-12"
                counterStyle="counter-style-2 border-style"
                textALign="text-center"
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

export default CounterUp;
