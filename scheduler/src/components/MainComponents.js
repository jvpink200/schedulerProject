import React, { Component } from 'react';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home';
import CardAnimatedPage from './CardAnimatedPage';
import AnimatedItemsPage from './AnimatedItemsPage';
import ThirdComponentPage from './ThirdComponentPage';
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
          <Route exact path='/cardanimatedpage' component={CardAnimatedPage} />
          <Route exact path='/animateditemspage' component={AnimatedItemsPage}/>
          <Route exact path='/thirdcomponentpage' component={ThirdComponentPage}/>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Redirect to='/home' />
        </Switch>
      </div>
    );
  }
}

export default Main;
