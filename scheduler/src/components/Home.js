import React, { Component } from "react";
import peoplePlanning from "..//animatedImages/images/peoplePlanning.jpeg";
//import CardAnimationComponent from "./CardAnimationComponent";
import AnimatingItems from "./animatedItems";
import Version from "./DemoVersionComponent";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="text-center container">
          <h2 className="pt-3 hero-text">
            Let's get your next project...finished and on time!
          </h2>
          <img
            src={peoplePlanning}
            alt="People planning with clocks and calendars animation"
            className="hero-img img-fluid"
          />
        </div>
        <Version />
        <AnimatingItems />
      </React.Fragment>
    );
  }
}

export default Home;
