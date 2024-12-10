import React, { Fragment, useState, useEffect, useContext } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Gallery14 from '../components/gallery14'
import Footer41  from '../components/footer41'
import { CurrentUserContext } from '..'
import './shop.css'

const Cart = (props) => {
    const {currentUser,setCurrentUser} = useContext(CurrentUserContext);
    const [content, setContent] = useState(null);

    const getCart = async () => {
        const response = await fetch(("http://localhost:3000/cart/cart/member/" + currentUser.currentUser), {
            method: "GET",
        })
        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            return null
        }
    }

    const getItemByID = async (itemID) => {
        
    }

    const getItems = async () => {
        let cartID = (await getCart())?.CartID

        const response = await fetch(("http://localhost:3000/cart/cart/items/" + cartID), {
            method: "GET",
        })
        if (response.ok) {
            setContent( await response.json())

        } else {
            return null
        }
    }

    useEffect (()=>{
        getItems()
    }, [])

    

    // /cart/items/:cartId

    console.log(content)
  return (
    <div className="shop-container">
      <Helmet>
        <title>Cart - Transparent Waters</title>
        <meta property="og:title" content="Cart - Transparent Waters"/>
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
            <span className="shop-text16">Water Safety</span>
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
      ></Navbar8>
      
      <div><h1>
        <span className="thq-heading-1">{currentUser.currentUser}: Cart</span>
      </h1></div>


       {content?.map((content) => (
              <Gallery14
              image1Title={
                <Fragment>
                  <span className="gallery14-text25">Item ID: {content?.ItemID}</span>
                </Fragment>
              }
              image1Description={
                <Fragment>
                  <span className="blog-text25"> Quantity: {content?.Quantity}</span>
                </Fragment>
              }
            ></Gallery14>
      ))}

<Footer41
        link5={
          <Fragment>
            <span className="blog-text57">FAQ</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blog-text58">About Us</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="blog-text59">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="blog-text60">Terms and Conditions</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blog-text61">Shop</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blog-text62">Contact Us</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="blog-text63">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="blog-text64">Privacy Policy</span>
          </Fragment>
        }
      ></Footer41>
    </div>
  )
}

export default Cart
