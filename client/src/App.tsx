import { BrowserRouter as Router } from 'react-router-dom';
import PageScrollTop from './components/pageToTop/PageScrollTop';

// Pages import Here
import WebAgency from './pages/WebAgency';

// Elements import Here

import CounterUp from './elements/counterup/CounterUp';
import Service from './elements/service/Service';

import { Helmet } from 'react-helmet';
import RnAccordion from './elements/accordion/RnAccordion';
import CalltoAction from './elements/calltoaction/CalltoAction';
import Pricing from './elements/pricing/Pricing';
import Social from './elements/social/Social';
import Tab from './elements/tab/Tab';
import Testimonial from './elements/testimonial/Testimonial';
import Timeline from './elements/timeline/Timeline';

import Contact from './elements/contact/Contact';

// Import Css Here

import { useEffect } from 'react';
import './assets/scss/style.scss';
import Copyright from './common/footer/Copyright';
import WhyUs from './pages/WhyUs';

const App = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', '#2c074f');
    document.documentElement.style.setProperty('--color-secondary', '#3a0869');
    document.documentElement.style.setProperty('--color-tertiary', '#3b055b');
    document.documentElement.style.setProperty('--color-pink', '#7c18b8');
  }, []);

  return (
    <Router>
      <Helmet>
        <title>Začnite zarábať stávkovaním zápasov | STÁVKOVÉ PORADENSTVO</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/stavkove/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/stavkove/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/stavkove/favicon-16x16.png" />
        <link rel="manifest" href="/stavkove/site.webmanifest" />
        <link rel="mask-icon" href="/stavkove/safari-pinned-tab.svg" color="#3b055b" />
        <link rel="shortcut icon" href="/stavkove/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/stavkove/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff"></meta>
        <link rel="canonical" href="https://www.stavkoveporadenstvo.sk" />
        <meta name="title" content="Začnite zarábať stávkovaním zápasov | STÁVKOVÉ PORADENSTVO" />
        <meta property="og:title" content="Začnite zarábať stávkovaním zápasov | STÁVKOVÉ PORADENSTVO" />
        <meta
          name="description"
          content="Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti stávkovania športových zápasov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti stávkovania zápasov a taktiež celkový prehľad v športe a investíciách."
        />
        <meta
          property="og:description"
          content="Naša spoločnosť poskytuje odborné poradenstvo a konzultácie v oblasti stávkovania športových zápasov. Sme tím zložený z 5 členov, máme niekoľkoročné skúsenosti v oblasti stávkovania zápasov a taktiež celkový prehľad v športe a investíciách."
        />

        <meta name="keywords" content="stavkovanie,investicia" />
        <meta property="og:site_name" content="Začnite zarábať stávkovaním zápasov | STÁVKOVÉ PORADENSTVO" />
        <meta property="og:url" content="https://stavkoveporadenstvo.sk" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://stavkoveporadenstvo.sk" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Slovak" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Stávkové poradenstvo" />
        <meta name="publisher" content="Stávkové poradenstvo" />
        {/* <link rel="stylesheet" href="cookieconsent/stavkove/cookieconsent.css" />
        <script defer src="cookieconsent/cookieconsent.js"></script>
        <script defer src="cookieconsent/cookieconsent-init.js"></script> */}
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
          {/* <BlogGridView pageType={pageType} /> */}
          <Contact pageType={pageType} />
          <Copyright pageType={pageType} />
        </PageScrollTop>
      </main>
    </Router>
  );
};

export default App;
