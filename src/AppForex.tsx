import { BrowserRouter as Router } from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop';
import WebAgency from './pages/WebAgency';
import CounterUp from './elements/counterup/CounterUp';
import Service from './elements/service/Service';
import RnAccordion from './elements/accordion/RnAccordion';
import Pricing from './elements/pricing/Pricing';
import Social from './elements/social/Social';
import Tab from './elements/tab/Tab';
import Testimonial from './elements/testimonial/Testimonial';
import Timeline from './elements/timeline/Timeline';
import CalltoAction from './elements/calltoaction/CalltoAction';
import Contact from './elements/contact/Contact';
import BlogGridView from './components/blog/BlogGridView';
import './assets/scss/style-forex.scss';
import Copyright from './common/footer/Copyright';
import WhyUs from './pages/WhyUs';

const AppForex = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  return (
    <Router>
      <main className="page-wrapper" id="main">
        <PageScrollTop>
          <WebAgency pageType={pageType} />
          <Service pageType={pageType} />
          <Tab pageType={pageType} />
          <Timeline pageType={pageType} />
          <Pricing pageType={pageType} />
          <CounterUp pageType={pageType} />
          <Testimonial pageType={pageType} />
          <CalltoAction pageType={pageType} />
          <RnAccordion pageType={pageType} />
          <WhyUs pageType={pageType} />
          <Social pageType={pageType} />
          <BlogGridView pageType={pageType} />
          <Contact pageType={pageType} />
          <Copyright pageType={pageType} />
        </PageScrollTop>
      </main>
    </Router>
  );
};

export default AppForex;
