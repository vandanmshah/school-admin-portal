import React from 'react';
import './home.css';

const Home: React.FC<{}> = () => {
  return (
    <>
      <div className='Home'>
        <h1 className='main-title'>Everything you need to manage Educational Institute.</h1>
        <p className='main-description'>
          Managing a school is no easy task. specially to monitor the student report. also managing admission and
          enrollment process is quite difficult.
        </p>
      </div>
    </>
  );
};

export default Home;
