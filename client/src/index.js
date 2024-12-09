import React, {Fragment, useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Login from './views/login'

import Shop from './views/shop'

import Blog from './views/blog'
import BlogPost from './views/blogpost'
import BlogForm from './views/blogform'

import Home from './views/home'

import Fish from './views/fish'
import FishingLocations from './views/fishinglocations'

import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
          <Route component={Login} exact path="/login" />
          <Route component={Shop} exact path="/shop" />

          <Route component={Blog} exact path="/blog" />
          <Route component={BlogPost} path="/blog/:id"/>
          <Route component={BlogForm} path ="/posts/new"/>

          <Route component={Home} exact path="/" />

          <Route component={Fish} exact path="/fish" />
          <Route component={FishingLocations} exact path="/locations" />
          <Route component={NotFound} path="**" />
          <Redirect to="**" />
      </Switch>
    </Router>
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