const Copyright = ({ pageType }: PageType) => {
  return (
    <div className="copyright-area copyright-style-one">
      <div className="container">
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
                  <a href={pageType === 'forex' ? '/COOKIES-forex.pdf' : '/COOKIES-stavky.pdf'} target="_blank">
                    Cookies
                  </a>
                </li>
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
        </div>
      </div>
    </div>
  );
};
export default Copyright;
