import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './footer41.css'

const Footer41 = (props) => {
  return (
    <footer className="footer41-footer7 thq-section-padding">
      <div className="footer41-max-width thq-section-max-width">
        <div className="footer41-content">
          <div className="footer41-logo1">
            <img
              alt={props.logoAlt}
              src={props.logoSrc}
              className="footer41-logo2"
            />
          </div>
          <div className="footer41-links">
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link1 ?? (
                <Fragment>
                  <span className="footer41-text16">Blog</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link2 ?? (
                <Fragment>
                  <span className="footer41-text18">Shop</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link3 ?? (
                <Fragment>
                  <span className="footer41-text15">About Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link4 ?? (
                <Fragment>
                  <span className="footer41-text19">Contact Us</span>
                </Fragment>
              )}
            </a>
            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer noopener"
              className="thq-body-small"
            >
              {props.link5 ?? (
                <Fragment>
                  <span className="footer41-text14">FAQ</span>
                </Fragment>
              )}
            </a>
          </div>
        </div>
        <div className="footer41-credits">
          <div className="thq-divider-horizontal"></div>
          <div className="footer41-row">
            <div className="footer41-container">
              <span className="thq-body-small">(c) CPSC471Group30</span>
            </div>
            <div className="footer41-footer-links">
              <span className="footer41-text11 thq-body-small">
                {props.privacyLink ?? (
                  <Fragment>
                    <span className="footer41-text21">Privacy Policy</span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.termsLink ?? (
                  <Fragment>
                    <span className="footer41-text17">
                      Terms and Conditions
                    </span>
                  </Fragment>
                )}
              </span>
              <span className="thq-body-small">
                {props.cookiesLink ?? (
                  <Fragment>
                    <span className="footer41-text20">Cookies Policy</span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

Footer41.defaultProps = {
  link5: undefined,
  link3: undefined,
  link1: undefined,
  termsLink: undefined,
  link2: undefined,
  link4: undefined,
  logoAlt: 'Fishing Enthusiasts Logo',
  cookiesLink: undefined,
  logoSrc: 'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  privacyLink: undefined,
}

Footer41.propTypes = {
  link5: PropTypes.element,
  link3: PropTypes.element,
  link1: PropTypes.element,
  termsLink: PropTypes.element,
  link2: PropTypes.element,
  link4: PropTypes.element,
  logoAlt: PropTypes.string,
  cookiesLink: PropTypes.element,
  logoSrc: PropTypes.string,
  privacyLink: PropTypes.element,
}

export default Footer41
