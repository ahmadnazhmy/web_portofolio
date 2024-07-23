import React from 'react';
import Navigation from './components/Navigation';
import Hero from './views/Hero';
import CaseStudies from './views/CaseStudies';
import GetInTouch from './views/GetInTouch';

function App() {
  return (
    <div>
      <Navigation/>
      <div id="hero">
        <Hero/>
      </div>
      <div id="case-studies">
        <CaseStudies/>
      </div>
      <div id="get-in-touch">
        <GetInTouch/>
      </div>
    </div>
  );
}

export default App;


