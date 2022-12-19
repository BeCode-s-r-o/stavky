import { getDatabase, ref, set } from 'firebase/database';
import React from 'react';
import { useState } from 'react';

const NewsletterOne = () => {
  const saveEmail = () => {
    const now = Date.now();
    set(ref(getDatabase(), 'emails/' + `${now}`), {
      email,
      now,
    });
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
            <div className="rn-newsletter mt_md--20 mt_sm--20">
              <div className="form-group">
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Váš e-mail" />
              </div>
              <div className="form-group">
                <button className="btn-default" onClick={saveEmail}>
                  ODOBERAŤ NOVINKY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsletterOne;
