import { Element } from 'react-scroll';
import Layout from '../../common/Layout';
import SectionTitle from '../sectionTitle/SectionTitle';
import ContactOne from './ContactOne';

const Contact = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <Element name="contact">
          <div className="main-content" style={{ paddingBottom: '100px' }}>
            {/* Start Contact Area  */}
            <div className="rwt-contact-area rn-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb--40">
                    <SectionTitle
                      textAlign="text-center"
                      radiusRounded=""
                      subtitle="KONTAKTNÉ ÚDAJE"
                      title="Kontaktujte nás a začnime zarábať spolu!"
                      description=""
                    />
                  </div>
                </div>
                <ContactOne />
              </div>
            </div>
            {/* End Contact Area  */}
          </div>
        </Element>
      </Layout>
    </>
  );
};
export default Contact;
