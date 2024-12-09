import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './sign-in1.css'

const SignIn1 = (props) => {
  return (
    <div className="sign-in1-container1 thq-section-padding">
      <div className="sign-in1-max-width thq-section-max-width">
        <div className="sign-in1-form-root">
          <div className="sign-in1-form1">
            <div className="sign-in1-title-root">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="sign-in1-text20">Sign in</span>
                  </Fragment>
                )}
              </h2>
              <div className="sign-in1-have-an-account-login"></div>
            </div>
            <form className="sign-in1-form2">
              <div className="sign-in1-email">
                <label htmlFor="thq-sign-in-1-email" className="thq-body-large">
                  Username
                </label>
                <input
                  type="email"
                  id="thq-sign-in-1-email"
                  required="true"
                  placeholder="Username"
                  className="sign-in1-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="sign-in1-password">
                <div className="sign-in1-container2">
                  <label
                    htmlFor="thq-sign-in-1-password"
                    className="thq-body-large"
                  >
                    Password
                  </label>
                </div>
                <input
                  type="password"
                  id="thq-sign-in-1-password"
                  required="true"
                  placeholder="Password"
                  className="sign-in1-textinput2 thq-input thq-body-large"
                />
              </div>
            </form>
            <div className="sign-in1-container3">
              <div className="sign-in1-container4">
                <button
                  type="submit"
                  className="sign-in1-button1 thq-button-filled"
                >
                  <span className="sign-in1-text14 thq-body-small">
                    {props.action1 ?? (
                      <Fragment>
                        <span className="sign-in1-text22">Sign in</span>
                      </Fragment>
                    )}
                  </span>
                </button>
                <div className="sign-in1-terms-agree">
                  <p className="thq-body-large">
                    <span>
                      By continuing, you agree to the Terms of use and Privacy
                      Policy.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </p>
                </div>
              </div>
              <div className="sign-in1-container5">
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in1-link1 thq-body-small"
                >
                  Issues with Sign in
                </a>
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="sign-in1-link2 thq-body-small"
                >
                  Forgot password
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="sign-in1-container6">
          <div className="sign-in1-divider1">
            <div className="sign-in1-divider2"></div>
            <span className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="sign-in1-text23">New to our community</span>
                </Fragment>
              )}
            </span>
            <div className="sign-in1-divider3"></div>
          </div>
          <button type="button" className="sign-in1-button2 thq-button-outline">
            <a href={props.newAccount}>
            <span className="sign-in1-text19 thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="sign-in1-text21">Create an account</span>
                </Fragment>
              )}
            </span>
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}

SignIn1.defaultProps = {
  heading1: undefined,
  action2: undefined,
  action1: undefined,
  content1: undefined,
  newAccount: '/signup'
}

SignIn1.propTypes = {
  heading1: PropTypes.element,
  action2: PropTypes.element,
  action1: PropTypes.element,
  content1: PropTypes.element,
  newAccount: PropTypes.string
}

export default SignIn1
