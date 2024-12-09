import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './banner11.css'

const BlogPostBody = (props) => {
  return (
    <div className="banner11-container1 thq-section-padding">
      <div className="banner11-max-width thq-section-max-width">
        <div className="banner11-container2">
          <h2 className="banner11-title thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="banner11-text5">Blog Title</span>
              </Fragment>
            )}
          </h2>
          <h3 className="banner11-text1 thq-heading-3">
            {props.content1 ?? (
              <Fragment>
                <span className="banner11-text3">
                  Blog Post Body
                </span>
              </Fragment>
            )}
          </h3>
        </div>
      </div>
    </div>
  )
}

BlogPostBody.defaultProps = {
    buttonUrl: '/posts/new',
    content1: undefined,
    action1: undefined,
    heading1: undefined,
}

BlogPostBody.propTypes = {
    buttonUrl: PropTypes.string,
    content1: PropTypes.element,
    action1: PropTypes.element,
    heading1: PropTypes.element,
}

export default BlogPostBody
