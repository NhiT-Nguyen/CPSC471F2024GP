import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Rapid Radiant Zebra</title>
        <meta property="og:title" content="Rapid Radiant Zebra" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">/home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">/blog</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">/shop</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">/contact</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Blog</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Shop</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Login</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text24">Check out our blog posts</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text25">Visit our storefront</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text26">
              Explore the latest fishing tips, tricks, and gear recommendations
              on our blog. Shop our selection of high-quality fishing products
              to enhance your next fishing adventure.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Welcome to soFISHtication</span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">Quality Equipment</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">Fishing Blog</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Fishing Information</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Explore our range of high-quality fishing rods, reels, and more.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Get connected with others in the fishing community and hear their
              stories
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              Stay up to date with the latest fishing techniques and trends.
            </span>
          </Fragment>
        }
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text34">Expert Fishing Tips</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35">Latest Gear Reviews</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36">Exciting Fishing Destinations</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37">
              Learn from experienced anglers with our expert fishing tips to
              improve your skills on the water.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38">
              Stay updated with the newest fishing gear reviews to make informed
              decisions on your next purchase.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39">
              Discover amazing fishing destinations worldwide and plan your next
              fishing adventure.
            </span>
          </Fragment>
        }
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text40">Choose the Right Gear</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text41">Find the Perfect Spot</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text42">Master Your Techniques</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text43">Stay Patient and Enjoy</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text44">
              Select the appropriate fishing equipment based on your target
              species and fishing location.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text45">
              Research and locate the best fishing spots near you with high
              chances of catching fish.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text46">
              Learn and practice different fishing techniques to improve your
              chances of a successful catch.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text47">
              Remember that fishing is also about enjoying nature and the
              process, so stay patient and have fun!
            </span>
          </Fragment>
        }
      ></Steps2>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text48">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text49">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text50">
              Email: contact@sofishtication.com
            </span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text51">Instagram: @sofishtication</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text52">
              For any inquiries or feedback, feel free to reach out to us via
              email.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text53">
              Stay connected with us on social media for the latest updates and
              fishing tips.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text54">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text55">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text56">Shop</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text57">Blog</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text58">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text59">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text60">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text61">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
