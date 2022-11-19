import React from 'react';
import SEO from '../../common/SEO';
import Layout from '../../common/Layout';
import BreadcrumbOne from '../../elements/breadcrumb/BreadcrumbOne';
import BlogProp from './itemProp/BlogProp';
import SectionTitle from '../../elements/sectionTitle/SectionTitle';

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
                    subtitle="EŠTE DOKONČIŤ"
                    title="BLOG"
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
