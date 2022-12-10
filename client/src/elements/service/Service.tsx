import { Element } from 'react-scroll';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import Separator from '../separator/Separator';
import ServiceOne from './ServiceOne';

const Service = ({ pageType }: PageType) => {
  return (
    <>
      <Element name="sluzby">
        <Layout>
          <div className="main-content">
            {/* Start Service Area  */}
            <div className="rn-service-area rn-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      subtitle="JEDNODUCHÉ A EFEKTÍVNE"
                      title="Vysvetlenie služieb"
                      description={
                        process.env.REACT_APP_WEBSITE_TYPE === 'forex'
                          ? 'Ponúkame kvalitné a odborné poradenstvo v oblasti obchodovania na forexe, vyhľadávame obchodné príležitosti na správne určenie pohybu trhu.'
                          : 'Ponúkame kvalitné a odborné poradenstvo v oblasti športových zápasov, vyhľadávame stávkové príležitosti na správne určenie výsledku zápasu.'
                      }
                    />
                  </div>
                </div>
                <ServiceOne serviceStyle="service__style--1 bg-color-blackest radius mt--25" textAlign="text-center" />
              </div>
            </div>
            {/* End Service Area  */}

            <Separator />
          </div>
        </Layout>
      </Element>
    </>
  );
};

export default Service;
