import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NewPost from './components/NewPost';
import Post from './components/Post';
import EditPost from './components/EditPost';
import Error404 from './components/Error404';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/posts/new" exact component={NewPost} />
        <Route path="/posts/:id" exact component={Post} />
        <Route path="/posts/edit/:id" exact component={EditPost} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
