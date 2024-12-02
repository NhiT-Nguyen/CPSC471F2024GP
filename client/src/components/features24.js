import React, { useState, Fragment } from 'react'

import PropTypes from 'prop-types'

import './features24.css'

const Features24 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features24-container2 thq-section-max-width">
        <div className="features24-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features24-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features24-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features24-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features24-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features24-tab-horizontal1"
          >
            <div className="features24-divider-container1">
              {activeTab === 0 && <div className="features24-container3"></div>}
            </div>
            <div className="features24-content1">
              <h2 className="thq-heading-2">
                {props.feature1Title ?? (
                  <Fragment>
                    <span className="features24-text2">Quality Equipment</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature1Description ?? (
                  <Fragment>
                    <span className="features24-text1">
                      Explore our range of high-quality fishing rods, reels, and
                      more.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features24-tab-horizontal2"
          >
            <div className="features24-divider-container2">
              {activeTab === 1 && <div className="features24-container4"></div>}
            </div>
            <div className="features24-content2">
              <h2 className="thq-heading-2">
                {props.feature2Title ?? (
                  <Fragment>
                    <span className="features24-text6">Fishing Gear</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature2Description ?? (
                  <Fragment>
                    <span className="features24-text5">
                      Shop our wide selection of fishing gear and accessories.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features24-tab-horizontal3"
          >
            <div className="features24-divider-container3">
              {activeTab === 2 && <div className="features24-container5"></div>}
            </div>
            <div className="features24-content3">
              <h2 className="thq-heading-2">
                {props.feature3Title ?? (
                  <Fragment>
                    <span className="features24-text3">Fishing Tips</span>
                  </Fragment>
                )}
              </h2>
              <span className="thq-body-small">
                {props.feature3Description ?? (
                  <Fragment>
                    <span className="features24-text4">
                      Stay up to date with the latest fishing techniques and
                      trends.
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features24.defaultProps = {
  feature1Description: undefined,
  feature1Title: undefined,
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1580974582281-65fc72e2033a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: undefined,
  feature3Description: undefined,
  feature2Description: undefined,
  feature2ImgAlt: 'Fishing Gear',
  feature1ImgAlt: 'Fishing Rod',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1540380968028-950d9ea1507e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1673129781237-eef76e16e70a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: undefined,
  feature3ImgAlt: 'Fishing Tips Image',
}

Features24.propTypes = {
  feature1Description: PropTypes.element,
  feature1Title: PropTypes.element,
  feature1ImgSrc: PropTypes.string,
  feature3Title: PropTypes.element,
  feature3Description: PropTypes.element,
  feature2Description: PropTypes.element,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature2Title: PropTypes.element,
  feature3ImgAlt: PropTypes.string,
}

export default Features24
