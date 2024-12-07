import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Gallery14 from '../components/gallery14'
import './shop.css'

const Shop = (props) => {
  return (
    <div className="shop-container">
      <Helmet>
        <title>Shop - Transparent Waters</title>
        <meta property="og:title" content="Shop - Transparent Waters"/>
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="shop-text10">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="shop-text11">/blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="shop-text12">/shop</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="shop-text13">/General Info</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="shop-text14">Fish</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="shop-text15">Fishing Locations</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="shop-text16">Fishing Lures</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="shop-text17">Water Safety</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="shop-text18">Login</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="shop-text19">Secondary Action</span>
          </Fragment>
        }
        link1Url="/"
        link2Url="/blog"
        link3Url="/shop"
        action1Url="/shop"
        page1Description={
          <Fragment>
            <span className="shop-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="shop-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="shop-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="shop-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Gallery14
        image1Description={
          <Fragment>
            <span className="shop-text24">
              Enjoying a peaceful fishing session during sunset
            </span>
          </Fragment>
        }
        image3Description={
          <Fragment>
            <span className="shop-text25">
              Catching a big fish in a remote lake
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="shop-text26">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </Fragment>
        }
        image2Description={
          <Fragment>
            <span className="shop-text27">
              High-quality fishing gear for the best fishing experience
            </span>
          </Fragment>
        }
        image2Title={
          <Fragment>
            <span className="shop-text28">Fishing Gear</span>
          </Fragment>
        }
        image3Title={
          <Fragment>
            <span className="shop-text29">Big Catch</span>
          </Fragment>
        }
        image1Title={
          <Fragment>
            <span className="shop-text30">Sunset Fishing</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="shop-text31">Transparent Waters</span>
          </Fragment>
        }
      ></Gallery14>
    </div>
  )
}

export default Shop
