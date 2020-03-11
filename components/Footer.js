import React from 'react';

function Footer() {
  return (
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <p>Built by Ole Maiwald</p>
              <ul className="list-unstyled">
              </ul>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center">
              <a href ="mailto:ole.maiwald@yahoo.de">ole.maiwald@yahoo.de</a>
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          position:absolute;
          left:0;
          bottom:0;
          right:0;
        }
      `}</style>
      </div>
  );
}
export default Footer;
