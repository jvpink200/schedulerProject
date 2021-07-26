import React, { Component } from 'react';

class About extends Component {
     constructor(props) {
        super(props);
        this.state = {
            images: [
                {
                    id:0,
                    image: 'assets/images/person-icon-silhouette.png',
                    altText: 'about placeholder'
                }
            ]
        };
    }
  render() {
    const myImages = this.state.images.map(myImage => {
            return (
                <div key={myImage.id} className="col pt-4 pb-4 card-image">
                    <img src={myImage.image} alt={myImage.altText} />
                </div>
            );
        });

        return (
            <div className="pt-2 container text-center">
                <h2>About</h2>
                <div className="row">
                    {myImages}
                </div>
            </div>
        );
  }
}

export default About;
