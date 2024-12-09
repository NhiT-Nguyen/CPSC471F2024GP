import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './gallery14.css'

const Gallery14 = (props) => {
  return (
    <div className="gallery14-gallery3 thq-section-padding">
      <div className="gallery14-max-width thq-section-max-width">
        <div className="gallery14-section-title">
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
                  <span className="gallery14-text24">Title</span>
                </Fragment>
              )}
            </span>
            <span className="gallery14-text13 thq-body-small">
              {props.image1Description ?? (
                <Fragment>
                  <span className="gallery14-text18">
                    Description
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
  image1Description: PropTypes.string,
  image3Description: PropTypes.element,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image2Alt: PropTypes.string,
  image2Description: PropTypes.string,
  image2Title: PropTypes.element,
  image3Title: PropTypes.element,
  image1Title: PropTypes.string,
  image3Alt: PropTypes.string,
  image1Src: PropTypes.string,
  heading1: PropTypes.element,
}

export default Gallery14
