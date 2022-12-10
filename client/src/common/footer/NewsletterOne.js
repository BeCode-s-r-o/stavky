import React, { useState } from 'react';
import { database } from '../../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';

const NewsletterOne = () => {
  const saveEmail = () => {
    ref(getDatabase(), 'emails').push({ email });
  };
  const [email, setEmail] = useState('');
  return (
    <div className={'newsletter-area'}>
      <div className="container">
        <div className={'row row--0 newsletter-wrapper align-items-center '}>
          <div className="col-lg-4">
            <div className="newsletter-section-title">
              <h3 className="title">NEWSLETTER</h3>
              <p className="description">
                Nenechajte si ujsť najnovšie správy,
                <br /> aktualizácie a trendy.
              </p>
            </div>
          </div>
          <div className="col-lg-8">
            <form className="rn-newsletter mt_md--20 mt_sm--20" action="#">
              <div className="form-group">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Váš e-mail" />
              </div>
              <div className="form-group">
                <button className="btn-default" onClick={saveEmail}>
                  ODOBERAŤ NOVINKY
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterOne;
