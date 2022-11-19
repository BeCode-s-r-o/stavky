import { BrowserRouter as Router } from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop';

// Pages import Here
import WebAgency from './pages/WebAgency';

// Elements import Here

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

// Import Css Here
import './assets/scss/style.scss';

import Copyright from './common/footer/Copyright';
import FooterTwo from './common/footer/FooterTwo';
import CalltoActionSix from './elements/calltoaction/CalltoActionSix';
import HeaderOne from './common/header/HeaderOne';
import WhyUs from './pages/WhyUs';

const App = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  return (
    <Router>
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
    </Router>
  );
};

export default App;
