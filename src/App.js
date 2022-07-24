import React from 'react'
import Header from './containers/Header/Header';
import Brands from './containers/Brands/Brands';
import WhatGPT3 from './containers/WhatGPT3/WhatGPT3';
import './App.css';
import FeaturesContainer from './containers/FeaturesContainer/FeaturesContainer';
import Possibilities from './containers/Possibilities/Possibilities';
import Cta from './containers/FeaturesContainer/Cta';
import Blog from './containers/Blog/Blog';
import Footer from './containers/Footer/Footer';


function App() {
  return (
    <div className='text-white'>
      <Header/>
      <Brands/>
      <WhatGPT3/>
      <FeaturesContainer/>
      <Possibilities/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default App;