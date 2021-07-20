import React from 'react';
import scheduler from '../animatedImages/images/scheduler.png';
import gitHubImage from '../animatedImages/images/gitHubImage.png';
import blankIpadPro from '../animatedImages/images/blank-ipad-pro.jpg';
import '../style.css';
function AnimatingItems() {
  return (
    <React.Fragment>
      <section className='bk'>
        <img className='ipad' src={blankIpadPro} alt='scheduler' />
        <img className='scheduler' src={scheduler} alt='scheduler' />
        <img className='gitHubImage' src={gitHubImage} alt='github logo' />
      </section>
    </React.Fragment>
  );
}

export default AnimatingItems;
