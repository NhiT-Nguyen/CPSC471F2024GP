import React, { Fragment, useState } from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const ContactForm3 = (props) => {

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [authUsername, setAuthUsername] = useState("");
    const [adminFlag, setAdminFlag] = useState("");
  
    function addNewBlogPost() {
      fetch(("http://localhost:3000/blog/posts"), {
        method: "POST",
        body: JSON.stringify({
          title: title,
          body: body,
          authorID: authUsername,
          adminFlag : false,
        }),
        headers: {
            "Content-Type": "application/json"
        }
      })
        /*.then((response) => response.json())
        .then((data) => {
          setContent(data);
          console.log(data);
        })
        .catch((error) => console.log(error));*/
    }


  return (
    <div className="contact-form3-contact9 thq-section-padding">
      <div className="thq-flex-row thq-section-max-width contact-form3-max-width">
        <img
          alt={props.imageAlt}
          src={props.imageSrc}
          className="contact-form3-image1 thq-img-ratio-4-3"
        />
        <div className="contact-form3-content1 thq-flex-column">
          <div className="contact-form3-section-title thq-card">
            <div className="contact-form3-content2">
              <h2 className="thq-heading-2">
                {props.heading1 ?? (
                  <Fragment>
                    <span className="contact-form3-text7">
                      Submit a new blog post
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <form className="thq-card"  onSubmit={(e) => {
            e.preventDefault();
            addNewBlogPost();
          }}>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Title
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Title"
                rows="Title"
                className="thq-input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Username
              </label>
              <input
                type="text"
                id="contact-form-3-email"
                required={true}
                placeholder="Username"
                className="thq-input"
                value={authUsername}
                onChange={(e) => setAuthUsername(e.target.value)}
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              > Blog Post
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Enter your text here"
                className="thq-input"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="contact-form3-button thq-button-filled"
            >
              <span className="thq-body-small">
                {props.action ?? (
                  <Fragment>
                    <span className="contact-form3-text6">Submit</span>
                  </Fragment>
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

ContactForm3.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
  action: undefined,
  imageAlt: 'Image1',
  heading1: undefined,
}

ContactForm3.propTypes = {
  imageSrc: PropTypes.string,
  action: PropTypes.element,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
}

export default ContactForm3
