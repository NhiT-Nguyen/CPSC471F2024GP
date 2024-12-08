import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import BlogPostHeader2 from '../components/blog-post-header2'
import Footer41 from '../components/footer41'
import './blog.css'

const Blog = (props) => {

  const [content, setContent] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/blog/posts", {
      method: "GET",

    })
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Transparent Waters</title>
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
            <span className="blog-text16">Fishing Lures</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="blog-text17">Find a Fishing Buddy</span>
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
        link1Url="/"
        link2Url="/blog"
        link3Url="/shop"
      ></Navbar8>


      {content?.map((content) => (
              <BlogPostHeader2
              date={
                <Fragment>
                  <span className="blog-text24">{content.Body}</span>
                </Fragment>
              }
              blogPostTitle={
                <Fragment>
                  <a href = {`/blog/${content.PostID}`} ><span className="blog-text25">{content.Title}</span></a>
                </Fragment>
              }
              readTime={
                <Fragment/>

              }
              category={
                <Fragment>
                  <span className="blog-text27">Post ID: {content.PostID}</span>
                </Fragment>
              }
              avatarName={
                <Fragment>
                  <span className="blog-text28">{content.MemAuthUsername ?? "Admin"}</span>
                </Fragment>
              }
            ></BlogPostHeader2>
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


export default Blog
