// src/Pages/PranaPlus/index.js
import React, { useState } from 'react';
import Section11 from "../Home/section11";
import Banner from './Banner.jsx'
import ProductCard from './ProductCard';
import ClassFeatures1 from './ClassFeatures1';
import ClassFeatures2 from './ClassFeatures2';
const PranaClass = () => {
   const section11WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 120px'
  };
   const WrapperStyle = {
    padding: window.innerWidth <= 768 ? '40px 16px' : '60px 20px'
  };

  return (
    <div>
      <Banner />
      <ProductCard />
    
    <ClassFeatures1 />
      <ClassFeatures2 />
       <div style={section11WrapperStyle}>
        <Section11 />
      </div>
   </div>
  );
};

export default PranaClass;