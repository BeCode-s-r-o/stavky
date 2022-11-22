import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import TimelineTwo from './TimelineTwo';

const Timeline = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          <Separator />

          <div className="rwt-timeline-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="POSTUP SPOLUPRÁCE "
                    title="Proces objednávky"
                    description={undefined}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 mt--50">
                  <TimelineTwo classVar="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
export default Timeline;
