import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import BlogPostBody from '../components/blog-post-body'
import Footer41 from '../components/footer41'
import './blog.css'

const BlogPost = (props) => {

  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const postId = props.match.params.id;

  
  
  useEffect(() => {
    fetch(`http://localhost:3000/blog/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => {
        setContent(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  // fetch images for blog post
  useEffect(() => {
    fetch(("http://localhost:3000/blog/posts/" + postId + "/images"), {
      method: "GET",

    })
      .then((response) => response.json())
      .then((data) => {
        setImages(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [postId]);

  const handleImageUpload = (e) => {
    e.preventDefault();
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('image', selectedImage);

    fetch(`http://localhost:3000/blog/posts/${postId}/images`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to upload image');
        return response.json();
      })
      .then(() => {
        alert('Image uploaded successfully!');
        // Fetch updated images
        return fetch(`http://localhost:3000/blog/posts/${postId}/images`)
          .then((response) => response.json())
          .then((data) => setImages(data));
      })
      .catch((error) => console.log(error));
  };


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

{content?.map((content) => (
              <BlogPostBody
              key={content.postId}
              heading1={
                <Fragment>
                  <span className="banner11-text3">{content?.Title}</span>
                </Fragment>
              }
              content1={
                <Fragment>
                  <span className="banner11-text5">{content?.Body}</span>
                </Fragment>
              }
              action1={
                <Fragment>
                  <span className="banner11-text4">Leave a Comment</span>
                </Fragment>
              }
            ></BlogPostBody>
      ))}

      {/* Images Section */}
      <div className="images-section">
        <h3>Images</h3>
        {images.length > 0 ? (
          images.map((image) => (
            <img
              key={image.ImageID}
              src={`http://localhost:3000/blog/images/${image.ImageID}`}
              alt="Blog Post"
              style={{ maxWidth: '100%', margin: '10px 0' }}
            />
          ))
        ) : (
          <p>No images available for this post.</p>
        )}
      </div>

      <div className="image-upload-form">
  <form onSubmit={handleImageUpload}>
    <h3>Upload an Image</h3>
    <input
      type="file"
      onChange={(e) => setSelectedImage(e.target.files[0])}
    />
    <button type="submit">Upload</button>
  </form>
  </div>



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


export default BlogPost



