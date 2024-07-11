import React, { useState, useEffect } from 'react';
import Header from './Header';
import Heading from './Heading';
import OurModel from './OurModel';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call or some loading logic
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change this duration to simulate loading time
  }, []);

  return (
    loading ? <Loader /> : (
      <>
        <Header />
        <OurModel />
        <Heading />
        
      </>
    )
  );
};

export default Homepage;
