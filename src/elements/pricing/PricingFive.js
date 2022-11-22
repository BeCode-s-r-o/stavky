import { FiCheck } from 'react-icons/fi';

const PricingFive = () => {
  return (
    <div className="row row--15">
      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-5">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">STARTER</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="price">69.90</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za mesiac</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> 1-3 TIPY DENNE
                </li>
                <li>
                  <FiCheck /> ÚSPEŠNOSŤ 78-80%
                </li>
                <li>
                  <FiCheck /> 24/7 SUPPORT
                </li>
                <li>
                  <FiCheck /> TELEGRAM NOTIFIKÁCIE
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a className="btn-default btn-border" href="#pricing">
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-5 active">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">KOMBI</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="price">219.90</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za mesiac</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> STARTER & EXCLUSIVE
                </li>
                <li>
                  <FiCheck /> LIMITOVANÉ MIESTA
                </li>
                <li>
                  <FiCheck /> VERIFIKOVANÉ ZDROJE
                </li>
                <li>
                  <FiCheck /> 5-15 TIPOV DENNE
                </li>
                <li>
                  <FiCheck /> VYSOKÝ KURZ ZDARMA
                </li>
                <li>
                  <FiCheck /> ÚSPEŠNOSŤ 84-86%
                </li>
                <li>
                  <FiCheck /> 24/7 SUPPORT
                </li>
                <li>
                  <FiCheck /> TELEGRAM NOTIFIKÁCIE
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a className="btn-default" href="#pricing">
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}

      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-5">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">EXCLUSIVE</h4>
              <div className="pricing">
                <div className="price-wrapper">
                  <span className="price">169.90</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za mesiac</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> 2-5 TIPOV DENNE
                </li>
                <li>
                  <FiCheck /> ÚSPEŠNOSŤ 81-83%
                </li>
                <li>
                  <FiCheck /> 24/7 SUPPORT
                </li>
                <li>
                  <FiCheck /> TELEGRAM NOTIFIKÁCIE
                </li>
              </ul>
            </div>
            <div className="pricing-footer">
              <a className="btn-default btn-border" href="#pricing">
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}
    </div>
  );
};
export default PricingFive;
