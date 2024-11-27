import { useState } from 'react';
import AboutUs from './AboutUs';
import ProductContainer from './ProductContainer';

const LandingPage = () => {
  const [showProduct, setShowProduct] = useState(false);
  const handleShowProduct = () => {
    setShowProduct(true);
  };
  return (
    <>
      <div className={`landing-page ${showProduct ? 'fade-out' : ''} `}>
        <div className="background-image">
          <img src="/garden.jpg" alt="garden" />
        </div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome to Unique Plants!</h1>
            <div className="divider"></div>
            <p>Great Nature, Great Responsibility!</p>
            <button className="get-started-button" onClick={handleShowProduct}>
              Get Started
            </button>
          </div>

          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>

      <div className={`product-list-container ${showProduct ? 'visible' : ''}`}>
        <ProductContainer />
      </div>
    </>
  );
};

export default LandingPage;
