import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery14.css'

const Gallery14 = (props) => {
  return (
    <div className="gallery14-gallery3 thq-section-padding">
      <div className="gallery14-max-width thq-section-max-width">
        <div className="gallery14-section-title">
          <h2 className="gallery14-text10 thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="gallery14-text25">Gallery</span>
              </Fragment>
            )}
          </h2>
          <span className="gallery14-text11 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="gallery14-text20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="gallery14-content">
          <div className="gallery14-container1">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="gallery14-image1 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image1Title ?? (
                <Fragment>
                  <span className="gallery14-text24">Sunset Fishing</span>
                </Fragment>
              )}
            </span>
            <span className="gallery14-text13 thq-body-small">
              {props.image1Description ?? (
                <Fragment>
                  <span className="gallery14-text18">
                    Enjoying a peaceful fishing session during sunset
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery14-container2">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="gallery14-image2 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image2Title ?? (
                <Fragment>
                  <span className="gallery14-text22">Fishing Gear</span>
                </Fragment>
              )}
            </span>
            <span className="gallery14-text15 thq-body-small">
              {props.image2Description ?? (
                <Fragment>
                  <span className="gallery14-text21">
                    High-quality fishing gear for the best fishing experience
                  </span>
                </Fragment>
              )}
            </span>
          </div>
          <div className="gallery14-container3">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="gallery14-image3 thq-img-ratio-4-3"
            />
            <span className="thq-body-small">
              {props.image3Title ?? (
                <Fragment>
                  <span className="gallery14-text23">Big Catch</span>
                </Fragment>
              )}
            </span>
            <span className="gallery14-text17 thq-body-small">
              {props.image3Description ?? (
                <Fragment>
                  <span className="gallery14-text19">
                    Catching a big fish in a remote lake
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Gallery14.defaultProps = {
  image1Alt: 'Fishing in the sunset',
  image2Src:
    'https://images.unsplash.com/photo-1682342268486-85b915bcfe4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjYzOTk4N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image1Description: undefined,
  image3Description: undefined,
  image3Src:
    'https://images.unsplash.com/photo-1592890288564-76628a30a657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjYzOTk4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image2Alt: 'Fishing gear close-up',
  image2Description: undefined,
  image2Title: undefined,
  image3Title: undefined,
  image1Title: undefined,
  image3Alt: 'Big fish caught in a lake',
  image1Src:
    'https://images.unsplash.com/photo-1730382428064-e8eb5735331e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjYzOTk4OHw&ixlib=rb-4.0.3&q=80&w=1080',
  heading1: undefined,
}

Gallery14.propTypes = {
  image1Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image1Description: PropTypes.element,
  image3Description: PropTypes.element,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image2Description: PropTypes.element,
  image2Title: PropTypes.element,
  image3Title: PropTypes.element,
  image1Title: PropTypes.element,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery14
