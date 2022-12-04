import axios from 'axios';
import { useState } from 'react';
import { FiCheck } from 'react-icons/fi';
import StripeCheckout from 'react-stripe-checkout';
// import { toast, ToastContainer } from 'react-toastify';
import Modal from 'react-modal';
Modal.setAppElement('body');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    zIndex: 999,
    transform: 'translate(-50%, -50%)',
    background: '#000',
    borderRadius: '25px',
  },
};

const PricingFive = () => {
  const pageType = process.env.REACT_APP_WEBSITE_TYPE;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState<any>(null);
  const [pricing, setPricing] = useState({
    first: {
      label: '30 dní',
      value: 69.9,
      id: pageType === 'stavkove' ? 2 : 12,
    },
    second: {
      label: '30 dní',
      value: 129.9,
      id: pageType === 'stavkove' ? 5 : 15,
    },
    third: {
      label: '30 dní',
      value: 99.9,
      id: pageType === 'stavkove' ? 8 : 18,
    },
  });

  const isProd = true;
  const url = isProd ? 'https://api.forexporadenstvo.sk/checkout' : 'http://localhost:5500/checkout';

  async function handleToken(token: any, id: number) {
    const response = await axios.post(url, {
      token,
      package: { id: id, quantity: 1 },
      discount: 1,
    });

    // if (response.status === 200) {
    //   toast.success('Platba prebehla úspešne', {
    //     theme: 'colored',
    //   });
    // } else {
    //   toast.error('Platba neprebehla úspešne', {
    //     theme: 'colored',
    //   });
    // }
  }

  return (
    <div className="row row--15 align-items-center">
      <div className="col-lg-4 col-md-6 col-12 px-md-4 px-5 " style={{ zIndex: -1 }}>
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
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vybrať dĺžku členstva:</p>
              <select
                value={JSON.stringify(pricing.first)}
                onChange={(e) => {
                  setPricing({ ...pricing, first: JSON.parse(e.target.value) });
                }}
              >
                <option
                  value={JSON.stringify({
                    label: '15 dní',
                    value: 39.9,
                    id: pageType === 'stavkove' ? 1 : 11,
                  })}
                >
                  15 dní | 39.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '30 dní',
                    value: 69.9,
                    id: pageType === 'stavkove' ? 2 : 12,
                  })}
                >
                  30 dní | 69.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '90 dní',
                    value: 149.9,
                    id: pageType === 'stavkove' ? 3 : 13,
                  })}
                >
                  90 dní | 149.90€
                </option>
              </select>
            </div>
            <div className="pricing-footer">
              <a
                className="btn-default btn-border"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentPackage(pricing.first);
                  setIsOpen(true);
                }}
              >
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}
      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12 px-md-4 px-5" style={{ zIndex: -1 }}>
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
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vybrať dĺžku členstva:</p>
              <select
                value={JSON.stringify(pricing.second)}
                onChange={(e) => {
                  setPricing({
                    ...pricing,
                    second: JSON.parse(e.target.value),
                  });
                }}
              >
                <option
                  value={JSON.stringify({
                    label: '30 dní',
                    value: 129.9,
                    id: pageType === 'stavkove' ? 4 : 14,
                  })}
                >
                  30 dní | 129.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '90 dní',
                    value: 219.9,
                    id: pageType === 'stavkove' ? 5 : 15,
                  })}
                >
                  90 dní | 219.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '180 dní',
                    value: 299.9,
                    id: pageType === 'stavkove' ? 6 : 16,
                  })}
                >
                  180 dní | 299.90€
                </option>
              </select>
            </div>
            <div className="pricing-footer">
              {/* @ts-ignore */}

              <a
                className="btn-default btn-border"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentPackage(pricing.second);
                  setIsOpen(true);
                }}
              >
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* End PRicing Table Area  */}
      {/* Start PRicing Table Area  */}
      <div className="col-lg-4 col-md-6 col-12 px-md-4 px-5" style={{ zIndex: -1 }}>
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
              <p style={{ textAlign: 'center', marginBottom: 0 }}>Vybrať dĺžku členstva:</p>
              <select
                value={JSON.stringify(pricing.third)}
                onChange={(e) => {
                  setPricing({ ...pricing, third: JSON.parse(e.target.value) });
                }}
              >
                <option
                  value={JSON.stringify({
                    label: '30 dní',
                    value: 99.9,
                    id: pageType === 'stavkove' ? 7 : 17,
                  })}
                >
                  30 dní | 99.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '90 dní',
                    value: 169.9,
                    id: pageType === 'stavkove' ? 8 : 18,
                  })}
                >
                  90 dní | 169.90€
                </option>
                <option
                  value={JSON.stringify({
                    label: '180 dní',
                    value: 239.9,
                    id: pageType === 'stavkove' ? 9 : 19,
                  })}
                >
                  180 dní | 239.90€
                </option>
              </select>
            </div>
            <div className="pricing-footer">
              <a
                className="btn-default btn-border"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  setCurrentPackage(pricing.third);
                  setIsOpen(true);
                }}
              >
                Objednať
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setIsOpen(false);
        }}
        style={customStyles}
      >
        <h2>Máte zľavový kód?</h2>
        <input className="mb-5" />
        <div className="d-flex flex-column justify-content-evenly align-items-center">
          <StripeCheckout
            currency="EUR"
            stripeKey="pk_test_51LJyhMBelUpwp79FkRfmFxHJJqAM7XTYKMYz3OHNtkvCjiMYvVwV4VPED9lXaP7CWjmq0ALVU3e4qLwKWOpl0UEo00vuAgo7Mt"
            token={(e) => handleToken(e, currentPackage?.id)}
            amount={currentPackage?.value ? currentPackage.value * 100 : 0}
            name={'Balík - ' + (currentPackage?.label || '')}
            billingAddress
          >
            <button className="btn-default btn-small">Uplatniť a pokračovať k platbe</button>
          </StripeCheckout>
          <StripeCheckout
            currency="EUR"
            stripeKey="pk_test_51LJyhMBelUpwp79FkRfmFxHJJqAM7XTYKMYz3OHNtkvCjiMYvVwV4VPED9lXaP7CWjmq0ALVU3e4qLwKWOpl0UEo00vuAgo7Mt"
            token={(e) => handleToken(e, currentPackage?.id)}
            amount={currentPackage?.value ? currentPackage.value * 100 : 0}
            name={'Balík - ' + (currentPackage?.label || '')}
            billingAddress
          >
            <button className="btn btn-default btn-border btn-small mt-4">Nemám, chcem pokračovať k platbe</button>
          </StripeCheckout>
          <button className="btn btn-default btn-border btn-small mt-4" onClick={() => setIsOpen(false)}>
            Zatvoriť
          </button>
        </div>
      </Modal> */}
    </div>
  );
};
export default PricingFive;
