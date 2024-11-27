import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import BlogPostHeader2 from '../components/blog-post-header2'
import BlogPostHeader21 from '../components/blog-post-header21'
import BlogPostHeader22 from '../components/blog-post-header22'
import BlogPostHeader23 from '../components/blog-post-header23'
import BlogPostHeader24 from '../components/blog-post-header24'
import Footer41 from '../components/footer41'
import './blog.css'

const Blog = (props) => {
  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Rapid Radiant Zebra</title>
        <meta property="og:title" content="Blog - Rapid Radiant Zebra" />
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
            <span className="blog-text13">/contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="blog-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="blog-text15">Blog</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="blog-text16">Shop</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="blog-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="blog-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="blog-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="blog-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="blog-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="blog-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="blog-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <BlogPostHeader2
        date={
          <Fragment>
            <span className="blog-text24">September 15, 2022</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blog-text25">Introduction to Angling</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blog-text26">5 minutes</span>
          </Fragment>
        }
        category={
          <Fragment>
            <span className="blog-text27">Fishing Tips</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blog-text28">John Fisher</span>
          </Fragment>
        }
      ></BlogPostHeader2>
      <BlogPostHeader21
        date={
          <Fragment>
            <span className="blog-text29">September 15, 2022</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blog-text30">Intoduction to Fly Fishing</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blog-text31">5 minutes</span>
          </Fragment>
        }
        category={
          <Fragment>
            <span className="blog-text32">Tips and Techniques</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blog-text33">John Fisher</span>
          </Fragment>
        }
      ></BlogPostHeader21>
      <BlogPostHeader22
        date={
          <Fragment>
            <span className="blog-text34">September 15, 2022</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blog-text35">Fishing Etiquette</span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blog-text36">5 minutes</span>
          </Fragment>
        }
        category={
          <Fragment>
            <span className="blog-text37">Tips and Tricks</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blog-text38">John Fisher</span>
          </Fragment>
        }
      ></BlogPostHeader22>
      <BlogPostHeader23
        date={
          <Fragment>
            <span className="blog-text39">September 15, 2022</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blog-text40">
              <span>Water Safety</span>
              <br></br>
              <span>for the Novice Fisherman</span>
              <br></br>
            </span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blog-text45">5 minutes</span>
          </Fragment>
        }
        category={
          <Fragment>
            <span className="blog-text46">Fishing Tips</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blog-text47">John Fisher</span>
          </Fragment>
        }
      ></BlogPostHeader23>
      <BlogPostHeader24
        date={
          <Fragment>
            <span className="blog-text48">September 15, 2022</span>
          </Fragment>
        }
        blogPostTitle={
          <Fragment>
            <span className="blog-text49">
              <span>What No One Tells You</span>
              <br></br>
              <span>About Fishing</span>
              <br></br>
            </span>
          </Fragment>
        }
        readTime={
          <Fragment>
            <span className="blog-text54">5 minutes</span>
          </Fragment>
        }
        category={
          <Fragment>
            <span className="blog-text55">Fishing Tips</span>
          </Fragment>
        }
        avatarName={
          <Fragment>
            <span className="blog-text56">John Fisher</span>
          </Fragment>
        }
      ></BlogPostHeader24>
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

export default Blog
