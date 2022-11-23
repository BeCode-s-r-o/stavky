import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import './assets/scss/style-forex.scss';
import Copyright from './common/footer/Copyright';
import BlogGridView from './components/blog/BlogGridView';
import PageScrollTop from './components/pageToTop/PageScrollTop';
import RnAccordion from './elements/accordion/RnAccordion';
import CalltoAction from './elements/calltoaction/CalltoAction';
import Contact from './elements/contact/Contact';
import CounterUp from './elements/counterup/CounterUp';
import Pricing from './elements/pricing/Pricing';
import Service from './elements/service/Service';
import Social from './elements/social/Social';
import Tab from './elements/tab/Tab';
import Testimonial from './elements/testimonial/Testimonial';
import Timeline from './elements/timeline/Timeline';
import WebAgency from './pages/WebAgency';
import WhyUs from './pages/WhyUs';

const AppForex = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  return (
    <Router>
      <Helmet>
        <title>Začnite zarábať forex obchodovaním | FOREX PORADENSTVO</title>
        <link rel="apple-touch-icon" sizes="152x152" href="/forex/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/forex/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/forex/favicon-16x16.png" />
        <link rel="manifest" href="/forex/site.webmanifest" />
        <link rel="mask-icon" href="/forex/safari-pinned-tab.svg" color="#4e51a1" />
        <link rel="shortcut icon" href="/forex/favicon.ico" />
        <meta name="msapplication-TileColor" content="#4e51a1" />
        <meta name="msapplication-config" content="/forex/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="canonical" href="https://www.forexporadenstvo.sk" />
        <meta name="title" content="Začnite zarábať forex obchodovaním | FOREX PORADENSTVO" />
        <meta property="og:title" content="Začnite zarábať forex obchodovaním | FOREX PORADENSTVO" />
        <meta
          name="description"
          content="Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti obchodovania menových párov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti akciových trhov a taktiež celkový prehľad v ekonomike a investíciách."
        />
        <meta
          property="og:description"
          content="Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti obchodovania menových párov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti akciových trhov a taktiež celkový prehľad v ekonomike a investíciách."
        />

        <meta name="keywords" content="stavkovanie,investicia" />
        <meta property="og:site_name" content="Začnite zarábať forex obchodovaním | FOREX PORADENSTVO" />
        <meta property="og:url" content="https://forexporadenstvo.sk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://forexporadenstvo.sk" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Slovak" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Forex poradenstvo" />
        <meta name="publisher" content="Forex poradenstvo" />
      </Helmet>
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
