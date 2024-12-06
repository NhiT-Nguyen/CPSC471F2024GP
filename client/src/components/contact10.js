import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text21">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text19">
                    Email: contact@transparentwaters.com
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text23">
                    For any inquiries or feedback, feel free to reach out to us
                    via email.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="contact10-link1 thq-button-flat thq-body-small"
              >
                Email Us
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text22">
                    Social Media: @transparentwaters
                  </span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text20">
                    Stay connected with us on social media for the latest
                    updates and fishing tips.
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="contact10-link2 thq-button-flat thq-body-small"
              >
                <span>Visit Our Page</span>
                <br></br>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  heading1: undefined,
  location2ImageAlt: 'Social media icons',
  location1: undefined,
  location1ImageAlt: 'Email icon',
  location2Description: undefined,
  content1: undefined,
  location2: undefined,
  location1Description: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1652554621990-db6b3d1611d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
}

Contact10.propTypes = {
  heading1: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2Description: PropTypes.element,
  content1: PropTypes.element,
  location2: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
}

export default Contact10
