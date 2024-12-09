import React, { Fragment, useState } from 'react'

import PropTypes from 'prop-types'

import './contact-form3.css'

const FishForm1 = (props) => {

    const [scientificName, setScientificName] = useState("");
    const [description, setDescription] = useState("");
    const [freshOrSaltwater, setFreshOrSaltwater] = useState("");
    const [size, setSize] = useState("");
    const [weight, setWeight] = useState("");

  
    function addNewFish() {
      fetch(("http://localhost:3000/fish/fish"), {
        method: "POST",
        body: JSON.stringify({
            scientificName: scientificName,
            size: size,
            description: description,
            freshOrSaltwater: freshOrSaltwater,
            weight: weight
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
                      Submit a new fish
                    </span>
                  </Fragment>
                )}
              </h2>
            </div>
          </div>
          <form className="thq-card"  onSubmit={(e) => {
            e.preventDefault();
            addNewFish();
          }}>
            <div className="contact-form3-input1">
              <label htmlFor="contact-form-3-name" className="thq-body-small">
                Scientific Name
              </label>
              <input
                type="text"
                id="contact-form-3-name"
                placeholder="Scientific Name"
                rows="Title"
                className="thq-input"
                value={scientificName}
                onChange={(e) => setScientificName(e.target.value)}
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Freshwater Or Saltwater
              </label>
              <input
                type="text"
                id="contact-form-3-email"
                required={true}
                placeholder="Freshwater or Saltwater"
                className="thq-input"
                value={freshOrSaltwater}
                onChange={(e) => setFreshOrSaltwater(e.target.value)}
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Size
              </label>
              <input
                type="text"
                id="contact-form-3-email"
                required={true}
                placeholder="Size"
                className="thq-input"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="contact-form3-input2">
              <label htmlFor="contact-form-3-email" className="thq-body-small">
                Weight
              </label>
              <input
                type="text"
                id="contact-form-3-email"
                required={true}
                placeholder="Weight"
                className="thq-input"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
            </div>
            <div className="contact-form3-container">
              <label
                htmlFor="contact-form-3-message"
                className="thq-body-small"
              > Fish Description
              </label>
              <textarea
                id="contact-form-3-message"
                rows="3"
                placeholder="Describe your fish here"
                className="thq-input"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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

FishForm1.defaultProps = {
  imageSrc:
    'https://images.unsplash.com/photo-1574169208507-84376144848b?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFic3RyYWN0fGVufDB8fHx8MTcxMDg3MDkzMHww&ixlib=rb-4.0.3&w=700',
  action: undefined,
  imageAlt: 'Image1',
  heading1: undefined,
}

FishForm1.propTypes = {
  imageSrc: PropTypes.string,
  action: PropTypes.element,
  imageAlt: PropTypes.string,
  heading1: PropTypes.element,
}

export default FishForm1
