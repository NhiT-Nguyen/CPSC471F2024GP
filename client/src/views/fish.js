import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import BlogPostHeader2 from '../components/blog-post-header2'
import Footer41 from '../components/footer41'
import './blog.css'
import Banner11 from '../components/banner11'

const Fish = (props) => {

  const [content, setContent] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/fish/fish", {
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
        <title>Fish - Transparent Waters</title>
        <meta property="og:title" content="Fish - Transparent Waters" />
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
      ></Navbar8>

      <Banner11
        heading1={
          <Fragment>
            <span className="banner11-text5">Fish are Friends, Not Food</span>
          </Fragment>
        }            
        content1={
          <Fragment>
            <span className="banner11-text3">But they can definitely be both!
                Tell us more about species that you've encountered and help us expand our knowledgebase.
                </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="banner11-text4">Submit a new fish</span>
          </Fragment>
        }
        buttonUrl={'/fish/new'}

      ></Banner11>

      {content?.map((content) => (
              <BlogPostHeader2
              date={
                <Fragment>
                  <span className="blog-text24">{content.Description}</span>
                </Fragment>
              }
              blogPostTitle={
                <Fragment>
                  <a href = {'https://example/com'} ><span className="blog-text25">{content.ScientificName}</span></a>
                </Fragment>
              }
              readTime={
                <Fragment/>
              }
              category={
                <Fragment>
                  <span className="blog-text27">Type: {content.FreshOrSaltwater}</span>
                </Fragment>
              }
              avatarName={
                <Fragment>
                  <span className="blog-text28"></span>
                </Fragment>
              }
              blogPostImageSrc={'/images/Walleye.jpg'}
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


export default Fish
