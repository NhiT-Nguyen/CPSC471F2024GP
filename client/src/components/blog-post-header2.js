import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './blog-post-header2.css'

const BlogPostHeader2 = (props) => {
  return (
    <div className="blog-post-header2-blog-post-header3 thq-section-padding">
      <div className="blog-post-header2-max-width thq-section-max-width">
        <div className="blog-post-header2-section-title thq-flex-column">
          <div className="blog-post-header2-title thq-flex-column">
            <div className="blog-post-header2-content1">
              <span className="thq-body-small">Blog</span>
              <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                <path d="M426 256l256 256-256 256-60-60 196-196-196-196z"></path>
              </svg>
              <span className="thq-body-small">
                {props.category ?? (
                  <Fragment>
                    <span className="blog-post-header2-text19">
                      Fishing Tips
                    </span>
                  </Fragment>
                )}
              </span>
            </div>
            <div className="blog-post-header2-content2">
              <h1 className="blog-post-header2-text11 thq-heading-1">
                {props.blogPostTitle ?? (
                  <Fragment>
                    <span className="blog-post-header2-text17">
                      Top 10 Fishing Tips for Beginners
                    </span>
                  </Fragment>
                )}
              </h1>
              <div className="blog-post-header2-content3">
                <div className="blog-post-header2-author">
                  <span className="thq-body-small">By</span>
                  <span className="thq-body-small">
                    {props.avatarName ?? (
                      <Fragment>
                        <span className="blog-post-header2-text20">
                          John Fisher
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
                <div className="blog-post-header2-time">
                  <span className="thq-body-small">
                    {props.date ?? (
                      <Fragment>
                        <span className="blog-post-header2-text16">
                          September 15, 2022
                        </span>
                      </Fragment>
                    )}
                  </span>
                  <span className="thq-body-small">•</span>
                  <span className="thq-body-small">
                    {props.readTime ?? (
                      <Fragment>
                        <span className="blog-post-header2-text18">
                          5 minutes
                        </span>
                      </Fragment>
                    )}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="thq-flex-row">
            <span className="thq-body-small">Share this post</span>
            <div className="blog-post-header2-share-buttons">
              <button className="thq-button-icon thq-button-filled">
                <svg viewBox="0 0 1024 1024" className="thq-icon-small">
                  <path d="M726 298q88 0 150 63t62 151-62 151-150 63h-172v-82h172q54 0 93-39t39-93-39-93-93-39h-172v-82h172zM342 554v-84h340v84h-340zM166 512q0 54 39 93t93 39h172v82h-172q-88 0-150-63t-62-151 62-151 150-63h172v82h-172q-54 0-93 39t-39 93z"></path>
                </svg>
              </button>
              <button className="thq-button-icon thq-button-filled">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </button>
              <button className="thq-button-icon thq-button-filled">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="thq-icon-small"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </button>
              <button className="thq-button-icon thq-button-filled">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="thq-icon-small"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="blog-post-header2-container">
          <img
            alt={props.blogPostImageAlt}
            src={props.blogPostImageSrc}
            className="blog-post-header2-image1 thq-img-ratio-4-3"
          />
        </div>
      </div>
    </div>
  )
}

BlogPostHeader2.defaultProps = {
  date: undefined,
  blogPostTitle: undefined,
  readTime: undefined,
  category: undefined,
  avatarName: undefined,
  blogPostImageAlt: 'Fishing tips for beginners',
  blogPostImageSrc:
    'https://images.unsplash.com/photo-1676911613288-f3fd49e0f0d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjY1MTg3Nnw&ixlib=rb-4.0.3&q=80&w=1080',
}

BlogPostHeader2.propTypes = {
  date: PropTypes.element,
  blogPostTitle: PropTypes.element,
  readTime: PropTypes.element,
  category: PropTypes.element,
  avatarName: PropTypes.element,
  blogPostImageAlt: PropTypes.string,
  blogPostImageSrc: PropTypes.string,
}

export default BlogPostHeader2