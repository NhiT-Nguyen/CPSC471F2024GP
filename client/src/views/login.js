import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Footer41 from '../components/footer41'
import './home.css'
import SignIn1 from '../components/sign-in1'

const Login = (props) => {



  useEffect(() => {
    fetch("http://localhost:3000/members/members", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setMembers(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/members/admins", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setAdmins(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="blog-container">
      <Helmet>
        <title>Transparent Waters</title>
        <meta property="og:title" content="Transparent Waters" />
      </Helmet>

      <Navbar8
        link1={
          <Fragment>
            <span className="blog-text10">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="blog-text11">/blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="blog-text12">/shop</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="blog-text13">/General Info</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="blog-text14">Fish</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="blog-text15">Fishing Locations</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="blog-text16">Water Safety</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="blog-text18">Login</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="blog-text19">Secondary Action</span>
          </Fragment>
        }
      />

    <SignIn1
    ></SignIn1>

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






export default Login
