import React from 'react';

const Copyright = ({ pageType }: PageType) => {
  const websiteHref = pageType === 'forex' ? 'www.forexporadenstvo.sk' : 'www.stavkoveporadenstvo.sk';

  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
        <div className="text-sm">
          <p style={{ fontSize: '1.1rem', textAlign: 'justify' }}>
            Po zakúpení služby užívateľ súhlasí s aktívnym predplatným, ktoré môže kedykoľvek zrušiť. Zásady ochrany
            osobných údajov sú bližšie špecifikované v Spracovanie osobných údajov na stránke{' '}
            <a href={websiteHref} target="_blank">
              {websiteHref}
            </a>{' '}
            . Všeobecné obchodné podmienky sú bližšie špecifikované v Obchodné podmienky na{' '}
            <a href={websiteHref} target="_blank">
              {websiteHref}
            </a>{' '}
            . Členstvo je automaticky obnovované podľa zakúpenej služby, aktuálne je 30 / 90 / 180 dňové členstvo. Pri
            zakúpení členstva na 30/90/180 dní bude automaticky po 30/60/180 dňoch obnovené členstvo, pokiaľ užívateľ
            nepožiada o ukončenie predplatného pred uhradeným ďalšej platby. Pokiaľ užívateľ žiada o ukončenie
            predplateného a zamedzeniu ďalších poplatkov, musí kontaktovať poskytovateľa pred ďalším dátumom úhrady
            členstva na mail a požiadať o ukončenie predplatného, poskytovateľ následne najneskôr do 24 hodín musí
            ukončiť predplatné a tým zamedziť ďalšiemu obnoveniu členstva.
          </p>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-8 col-sm-12 col-12">
            <div className="copyright-left">
              <ul className="ft-menu link-hover">
                <li>
                  <a href={pageType === 'forex' ? '/VOP-forex.pdf' : '/VOP-stavky.pdf'} target="_blank">
                    Obchodné podmienky
                  </a>
                </li>
                <li>
                  <a href={pageType === 'forex' ? '/GDPR-forex.pdf' : '/GDPR-stavky.pdf'} target="_blank">
                    Spracovanie osobných údajov
                  </a>
                </li>
                <li>
                  <a href={pageType === 'forex' ? '/UP-forex.pdf' : '/UP-stavky.pdf'} target="_blank">
                    Ukončenie predplatného
                  </a>
                </li>
                {/* <li>
                  <a href={pageType === 'forex' ? '/COOKIES-forex.pdf' : '/COOKIES-stavky.pdf'} target="_blank">
                    Cookies
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-4 col-sm-12 col-12">
            <div className="copyright-right text-center text-md-end">
              <p className="copyright-text">
                © Made by <a href="https://becode.sk">BeCode s.r.o.</a> | {new Date().getFullYear()}
              </p>
            </div>
          </div>

          <p style={{ fontSize: '1.1rem', textAlign: 'justify', marginTop: '20px', padding: '0 20px' }}>
            Zásady ochrany osobných údajov sú bližšie špecifikované v Spracovanie osobných údajov na stránke{' '}
            <a href={websiteHref}>{websiteHref}</a> Všeobecné obchodné podmienky sú bližšie špecifikované v Obchodné
            podmienky na <a href={websiteHref}>{websiteHref}</a> Členstvo je automaticky obnovované podľa zakúpenej
            služby. Po zakúpení služby užívateľ súhlasí s aktívnym predplatným, ktoré môže kedykoľvek zrušiť. Pokiaľ
            užívateľ nepožiada o ukončenie predplatného pred uhradeným ďalšej platby, automaticky mu bude členstvo
            predĺžené. Pokiaľ užívateľ žiada o ukončenie predplateného a zamedzeniu ďalších poplatkov, musí kontaktovať
            poskytovateľa pred ďalším dátumom úhrady členstva na mail a požiadať o ukončenie predplatného, poskytovateľ
            následne najneskôr do 24 hodín musí ukončiť predplatné a tým zamedziť ďalšiemu obnoveniu členstva.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Copyright;
