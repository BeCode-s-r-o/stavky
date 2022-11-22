import Layout from '../../common/Layout';
import SectionTitle from '../../elements/sectionTitle/SectionTitle';
import BlogProp from './itemProp/BlogProp';

const BlogGridView = ({ pageType }: PageType) => {
  return (
    <>
      <Layout>
        <div className="main-content">
          {/* Start Blog Area  */}
          <div className="rn-blog-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="ZAUJÍMAVÉ INFORMÁCIE"
                    title={`Články zo sveta ${
                      process.env.REACT_APP_WEBSITE_TYPE === 'forex' ? 'forexu' : 'stávkovania'
                    }`}
                    description={undefined}
                  />
                </div>
              </div>
              <div className="row mt_dec--30">
                <BlogProp column="col-lg-4 col-md-6 col-12 mt--30" StyleVarProp="box-card-style-default" />
              </div>
            </div>
          </div>
          {/* End Blog Area  */}
        </div>
      </Layout>
    </>
  );
};
export default BlogGridView;
