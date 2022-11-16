import { BrowserRouter as Router } from "react-router-dom";
import PageScrollTop from "./components/pageToTop/PageScrollTop";

// Pages import Here
import WebAgency from "./pages/WebAgency";

// Elements import Here

import CounterUp from "./elements/counterup/CounterUp";
import Service from "./elements/service/Service";

import RnAccordion from "./elements/accordion/RnAccordion";
import Pricing from "./elements/pricing/Pricing";
import Social from "./elements/social/Social";
import Tab from "./elements/tab/Tab";
import Testimonial from "./elements/testimonial/Testimonial";
import Timeline from "./elements/timeline/Timeline";

import CalltoAction from "./elements/calltoaction/CalltoAction";

import Contact from "./elements/contact/Contact";

import BlogGridView from "./components/blog/BlogGridView";

// Import Css Here
import "./assets/scss/style.scss";

import Copyright from "./common/footer/Copyright";
import FooterTwo from "./common/footer/FooterTwo";

const App = () => {
  return (
    <Router>
      <PageScrollTop>
        <WebAgency />
        <Service />
        <Tab />
        <Timeline />
        <Pricing />
        <CounterUp />
        <Testimonial />
        <CalltoAction />
        <RnAccordion />
        <CalltoAction />
        <Social />
        <BlogGridView />
        <Contact />
        <FooterTwo />
        <Copyright />
      </PageScrollTop>
    </Router>
  );
};

export default App;
