import React, { Fragment, useState, useEffect } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import ContactForm3 from '../components/contact-form3'
import Footer41 from '../components/footer41'
import './blog.css'

const BlogForm = (props) => {


  const [content, setContent] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const postId = props.match.params.id;

  const handleImageUpload = (e) => {
    e.preventDefault(); // Stop the page from refreshing
    console.log('Submitting the form...');
    
    if (!selectedImage) {
      console.error('No image selected!');
      alert('Please select an image before uploading.');
      return;
    }
  
    const formData = new FormData();
    formData.append('image', selectedImage);
  
    fetch(`http://localhost:3000/blog/posts/${postId}/images`, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        console.log('Server response:', response);
        if (!response.ok) {
          throw new Error('Failed to upload image');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Upload successful:', data);
        alert('Image uploaded successfully!');
        // Fetch updated images
        return fetch(`http://localhost:3000/blog/posts/${postId}/images`);
      })
      .then((response) => response.json())
      .then((data) => setImages(data))
      .catch((error) => {
        console.error('Error during image upload:', error);
      });
  };

  return (
    <div className="blog-container">
      <Helmet>
        <title>Blog - Transparent Waters</title>
        <meta property="og:title" content="Blog - Transparent Waters" />
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

        <ContactForm3
              heading1={
                <Fragment>
                  <span className="contact-form3-text7">Submit a new blog post</span>
                </Fragment>
              }

        ></ContactForm3>
      
<div className="image-upload-form">
  <form onSubmit={handleImageUpload}>
    <h3>Upload an Image</h3>
    <input
      type="file"
      onChange={(e) => {
        console.log('File selected:', e.target.files[0]);
        setSelectedImage(e.target.files[0]);
      }}
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


export default BlogForm
