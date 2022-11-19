import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import CounterUpTwo from './CounterUpTwo';

const CounterUp = ({ pageType }: PageType) => {
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
                    subtitle="NAŠE VÝSLEDKY"
                    title="ŠTATISTIKY NAŠEJ SPOLOČNOSTI"
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
