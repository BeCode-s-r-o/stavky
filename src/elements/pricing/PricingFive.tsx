import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';

const PricingFive = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  const [pricing, setPricing] = useState({
    first: { label: '30 dní', value: 69.9 },
    second: { label: '90 dní', value: 219.9 },
    third: { label: '90 dní', value: 169.9 },
  });
  return (
    <div className="row row--15 align-items-center">
      <div className="col-lg-4 col-md-6 col-12">
        <div className="rn-pricing style-5 ">
          <div className="pricing-table-inner">
            <div className="pricing-header">
              <h4 className="title">STARTER</h4>
              <div className="pricing" style={{ background: 'var(--color-primary)' }}>
                <div className="price-wrapper">
                  <span className="price">{pricing.first.value}0</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za {pricing.first.label}</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> {pageType === 'forex' ? '1-3 SIGNÁLY DENNE' : '1-3 TIPY DENNE'}
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
            <div className="container w-50 mb-5">
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vyberte dĺžku:</p>
              <select
                value={JSON.stringify(pricing.first)}
                onChange={(e) => {
                  setPricing({ ...pricing, first: JSON.parse(e.target.value) });
                }}
              >
                <option value={JSON.stringify({ label: '15 dní', value: 39.9 })}>15 dní</option>
                <option value={JSON.stringify({ label: '30 dní', value: 69.9 })}>30 dní</option>
                <option value={JSON.stringify({ label: '90 dní', value: 149.9 })}>90 dní</option>
              </select>
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
              <div className="pricing" style={{ background: 'var(--color-pink)' }}>
                <div className="price-wrapper">
                  <span className="price">{pricing.second.value}0</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za {pricing.second.label}</span>
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
                  <FiCheck /> {pageType === 'forex' ? 'ZAHRANIČNÉ ZDROJE' : 'VERIFIKOVANÉ ZDROJE'}
                </li>
                <li>
                  <FiCheck /> {pageType === 'forex' ? '5-15 SIGNÁLOV DENNE' : '5-15 TIPOV DENNE'}
                </li>
                <li>
                  <FiCheck /> {pageType === 'forex' ? 'PRÉMIOVY SIGNÁL ZDARMA' : 'VYSOKÝ KURZ ZDARMA'}
                </li>
                <li>
                  <FiCheck /> {pageType === 'forex' ? 'ÚSPEŠNOSŤ 84-87%' : 'ÚSPEŠNOSŤ 84-86%'}
                </li>
                <li>
                  <FiCheck /> 24/7 SUPPORT
                </li>
                <li>
                  <FiCheck /> TELEGRAM NOTIFIKÁCIE
                </li>
              </ul>
            </div>
            <div className="container w-50 mb-5">
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vyberte dĺžku:</p>
              <select
                value={JSON.stringify(pricing.second)}
                onChange={(e) => {
                  setPricing({ ...pricing, second: JSON.parse(e.target.value) });
                }}
              >
                <option value={JSON.stringify({ label: '30 dní', value: 129.9 })}>30 dní</option>
                <option value={JSON.stringify({ label: '90 dní', value: 219.9 })}>90 dní</option>
                <option value={JSON.stringify({ label: '180 dní', value: 299.9 })}>180 dní</option>
              </select>
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
              <div className="pricing" style={{ background: 'var(--color-primary)' }}>
                <div className="price-wrapper">
                  <span className="price">{pricing.third.value}0</span>
                  <span className="currency">€</span>
                </div>
                <span className="subtitle">EUR za {pricing.third.label}</span>
              </div>
            </div>
            <div className="pricing-body">
              <ul className="list-style--1">
                <li>
                  <FiCheck /> {pageType === 'forex' ? '2-5 SIGNÁLOV DENNE' : '2-5 TIPOV DENNE'}
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
            <div className="container w-50 mb-5">
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vyberte dĺžku:</p>
              <select
                value={JSON.stringify(pricing.third)}
                onChange={(e) => {
                  setPricing({ ...pricing, third: JSON.parse(e.target.value) });
                }}
              >
                <option value={JSON.stringify({ label: '30 dní', value: 99.9 })}>30 dní</option>
                <option value={JSON.stringify({ label: '90 dní', value: 169.9 })}>90 dní</option>
                <option value={JSON.stringify({ label: '180 dní', value: 239.9 })}>180 dní</option>
              </select>
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
