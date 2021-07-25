import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <div>
          <Home />
        </div>
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
