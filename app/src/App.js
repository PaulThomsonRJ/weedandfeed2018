import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import logo from './logo.svg';
import corn from './corn.jpg'
import background from './cornField.jpg';
import './App.css';

const Page = ({ title, text }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
          {text}
      </p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
    </div>
);

const Home = (props) => (
  <Page title="Home" text="Welcome to Weed and Feed 2018!"/>
);

const About = (props) => (
  <Page title="About" text="Here there will be info about the team etc."/>
);

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Router>
    );
  }
}

export default App;