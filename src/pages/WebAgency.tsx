import { Link } from 'react-router-dom';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import AboutFour from '../elements/about/AboutFour';
import AdvancePricingOne from '../elements/advancePricing/AdvancePricingOne';
import BrandOne from '../elements/brand/BrandOne';
import CounterUpFour from '../elements/counterup/CounterUpFour';
import SectionTitle from '../elements/sectionTitle/SectionTitle';
import Separator from '../elements/separator/Separator';
import ServiceOne from '../elements/service/ServiceOne';

const BannerData = [
  {
    image: '/images/bg/bg-image-20.jpg',
    title: 'Our Web <br /> Agecny Plan.',
    description:
      'We help our clients succeed by creating brand identities, <br /> digital experiences, and print materials.',
  },
];

const WebAgency = () => {
  return (
    <>
      <main className="page-wrapper">
        <HeaderOne btnStyle="btn-small" HeaderSTyle="header-not-transparent" />
        {/* Start Slider Area  */}
        <div className="slider-area slider-style-8 height-650">
          {BannerData.map((data, index) => (
            <div key={index} className="single-slide">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="inner text-center">
                      <span className="subtitle theme-gradient">Hello! This is WebAgency</span>
                      <h1 className="title" dangerouslySetInnerHTML={{ __html: data.title }}></h1>
                      <p className="description" dangerouslySetInnerHTML={{ __html: data.description }}></p>
                      <div className="button-group mt--30">
                        <a
                          className="btn-default btn-large round"
                          target="_blank"
                          href="https://themeforest.net/checkout/from_item/33571911?license=regular"
                        >
                          Explore Now
                        </a>
                        <a className="btn-default btn-border btn-large round" href="#">
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* End Slider Area  */}
      </main>
    </>
  );
};
export default WebAgency;
