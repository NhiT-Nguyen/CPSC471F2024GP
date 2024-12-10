import React, {Fragment, useState, useEffect, useContext, createContext} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Login from './views/login'
import SignUp from './views/signup'

import Shop from './views/shop'
import ShopItem from './views/shopitem'

import Blog from './views/blog'
import BlogPost from './views/blogpost'
import BlogForm from './views/blogform'

import Home from './views/home'

import Fish from './views/fish'
import FishForm from './views/fishform'
import FishingLocations from './views/fishinglocations'
import LocationForm from './views/fishinglocationform'

import ProfilePage from './views/profilepage'

import NotFound from './views/not-found'

export const  CurrentUserContext = createContext(null);

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);


  return (

      <CurrentUserContext.Provider
          value={{
            currentUser,
            setCurrentUser
          }}
       >
    <Router>
      <Switch>
          <Route component={Login} exact path="/login" />
          <Route component={SignUp} exact path="/signup" />
          <Route component={Shop} exact path="/shop" />
          <Route component={ShopItem} exact path="/shop/:id" />

          <Route component={Blog} exact path="/blog" />
          <Route component={BlogPost} path="/blog/:id"/>
          <Route component={BlogForm} path ="/posts/new"/>

          <Route component={Home} exact path="/" />

          <Route component={Fish} exact path="/fish" />
          <Route component={FishForm} path ="/fish/new"/>
          <Route component={FishingLocations} exact path="/locations" />
          <Route component={LocationForm} path ="/locations/new"/>

          <Route component={NotFound} path="**" />
          <Redirect to="**" />
      </Switch>
    </Router>
</CurrentUserContext.Provider>
  )
}

function GetBlogPosts() {
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
      <h2>{new String(content)}</h2>
  );
}

function GetComments() {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3000/comments", {
      method: "GET",

    })
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>{new String(comments)}</h2>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'))
