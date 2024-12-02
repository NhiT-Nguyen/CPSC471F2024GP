import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero17.css'

const Hero17 = (props) => {
  return (
    <div className="hero17-header78">
      <div className="hero17-column thq-section-max-width thq-section-padding">
        <div className="hero17-content1">
          <h1 className="hero17-text1 thq-heading-1">
            {props.heading1 ?? (
              <Fragment>
                <span className="hero17-text6">
                  Welcome to our Fishing Blog &amp; Storefront
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero17-text2 thq-body-large">
            {props.content1 ?? (
              <Fragment>
                <span className="hero17-text8">
                  Explore the latest fishing tips, tricks, and gear
                  recommendations on our blog. Shop our selection of
                  high-quality fishing products to enhance your next fishing
                  adventure.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero17-actions">
          <button className="thq-button-filled hero17-button1">
            <Link to="/blog" className="hero17-text3 thq-body-small">
              {props.action1 ?? (
                <Fragment>
                  <span className="hero17-text7">Check out our blog</span>
                </Fragment>
              )}
            </Link>
          </button>
          <button className="thq-button-outline hero17-button2">
            <Link to="/shop" className="hero17-text4 thq-body-small">
              {props.action2 ?? (
                <Fragment>
                  <span className="hero17-text5">Visit our storefront</span>
                </Fragment>
              )}
            </Link>
          </button>
        </div>
      </div>
      <div className="hero17-content2">
        <div className="hero17-row-container1 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero17-row-container2 thq-mask-image-horizontal thq-animated-group-container-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image22 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image23 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image24 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image25 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image26 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image27 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image28 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image29 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image30 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image31 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image32 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image33 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container2">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero17.defaultProps = {
  action2: undefined,
  image5Src:
    'https://images.unsplash.com/photo-1524703733404-22ca50ae45ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Alt: 'Hero Image',
  image11Src:
    'https://images.unsplash.com/photo-1708748978230-510e06b24530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image9Src:
    'https://images.unsplash.com/photo-1454944338482-a69bb95894af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image7Src:
    'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image6Src:
    'https://images.unsplash.com/photo-1655263739640-9ea1a92abea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
  image11Alt: 'Hero Image',
  image4Alt: 'Hero Image',
  image2Src:
    'https://images.unsplash.com/photo-1632858326271-b2cbd2561fab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Hero Image',
  image10Alt: 'Hero Image',
  image6Alt: 'Hero Image',
  heading1: undefined,
  action1: undefined,
  image2Alt: 'Hero Image',
  image7Alt: 'Hero Image',
  image12Alt: 'Hero Image',
  image8Alt: 'Hero Image',
  image4Src:
    'https://images.unsplash.com/photo-1528716321680-815a8cdb8cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Fishing Blog Image',
  image3Src:
    'https://images.unsplash.com/photo-1635445323630-405bb073b4da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNHw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  image5Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1426001094903-70f302dc2d24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Src:
    'https://images.unsplash.com/photo-1534349735944-2b3a6f7a268f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNnw&ixlib=rb-4.0.3&q=80&w=1080',
  image10Src:
    'https://images.unsplash.com/photo-1605902711834-8b11c3e3ef2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyN3w&ixlib=rb-4.0.3&q=80&w=1080',
  image12Src:
    'https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMjAzODYyNXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Hero17.propTypes = {
  action2: PropTypes.element,
  image5Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image9Src: PropTypes.string,
  image7Src: PropTypes.string,
  image6Src: PropTypes.string,
  image11Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  heading1: PropTypes.element,
  action1: PropTypes.element,
  image2Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image4Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Src: PropTypes.string,
  content1: PropTypes.element,
  image5Alt: PropTypes.string,
  image1Src: PropTypes.string,
  image8Src: PropTypes.string,
  image10Src: PropTypes.string,
  image12Src: PropTypes.string,
}

export default Hero17
