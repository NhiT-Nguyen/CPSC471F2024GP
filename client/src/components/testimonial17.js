import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text28">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <span className="testimonial17-text11 thq-body-small">
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text34">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong className="thq-body-large">
                      {props.author1Name ?? (
                        <Fragment>
                          <span className="testimonial17-text24">John Doe</span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text27">
                            Professional Angler
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text14 thq-body-small">
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text36">
                        I have been following this blog for years and it has
                        helped me improve my fishing skills tremendously. The
                        tips and tricks shared here are invaluable!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong className="thq-body-large">
                      {props.author2Name ?? (
                        <Fragment>
                          <span className="testimonial17-text25">
                            Jane Smith
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text32">
                            Fishing Enthusiast
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text17 thq-body-small">
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text31">
                        As a beginner in the world of fishing, I found this blog
                        to be incredibly informative and easy to understand. I
                        highly recommend it to anyone looking to learn more
                        about fishing.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong className="thq-body-large">
                      {props.author3Name ?? (
                        <Fragment>
                          <span className="testimonial17-text26">
                            Mike Johnson
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35">
                            Outdoor Adventurer
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text20 thq-body-small">
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text30">
                        The product recommendations on this website are spot on!
                        I have purchased several items through the storefront
                        and have been extremely satisfied with the quality.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong className="thq-body-large">
                      {props.author4Name ?? (
                        <Fragment>
                          <span className="testimonial17-text33">
                            Sarah Williams
                          </span>
                        </Fragment>
                      )}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37">
                            Fishing Blogger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span className="testimonial17-text23 thq-body-small">
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text29">
                        I love reading the articles on this blog. They are
                        well-written and cover a wide range of topics related to
                        fishing. Keep up the great work!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author1Alt: 'Image of John Doe',
  author1Name: undefined,
  author2Name: undefined,
  author3Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1522542194-2c2e6ffcf7d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Image of Jane Smith',
  author1Position: undefined,
  heading1: undefined,
  review4: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1726825990567-73f6d3597cdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1499399244875-59ef3e1347e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  review2: undefined,
  author2Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1484353371297-d8cfd2895020?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  author4Alt: 'Image of Sarah Williams',
  author4Position: undefined,
  author3Alt: 'Image of Mike Johnson',
}

Testimonial17.propTypes = {
  author1Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author2Name: PropTypes.element,
  author3Name: PropTypes.element,
  author4Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  review4: PropTypes.element,
  author3Src: PropTypes.string,
  review3: PropTypes.element,
  author1Src: PropTypes.string,
  review2: PropTypes.element,
  author2Position: PropTypes.element,
  author2Src: PropTypes.string,
  author4Name: PropTypes.element,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  author4Alt: PropTypes.string,
  author4Position: PropTypes.element,
  author3Alt: PropTypes.string,
}

export default Testimonial17
