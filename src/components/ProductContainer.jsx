import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import ProductGrid from './ProductGrid';
import { useState } from 'react';

const ProductContainer = () => {
  const cart = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [showPlants, setShowPlants] = useState(false);
  const cartQuantity = useSelector((state) => state.cart.items.reduce((total, item) => total + item.quantity, 0));
  const handleCartClick = (e) => {
    e.preventDefault();
    setShowCart(true); // Set showCart to true when cart icon is clicked
  };
  const handlePlantsClick = (e) => {
    e.preventDefault();
    setShowPlants(true); // Set showAboutUs to true when "About Us" link is clicked
    setShowCart(false); // Hide the cart when navigating to About Us
  };
  const handleContinueShopping = (event) => {
    event.preventDefault();
    setShowCart(false);
  };

  const styleObj = {
    backgroundColor: '#4CAF50',
    color: '#fff!important',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignIems: 'center',
    fontSize: '20px',
  };
  const styleObjUl = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '1100px',
  };
  const styleA = {
    color: 'white',
    fontSize: '30px',
    textDecoration: 'none',
  };
  return (
    <div>
      <div className="navbar" style={styleObj}>
        <div className="tag">
          <div className="luxury">
            <a href="/" style={{ textDecoration: 'none' }}>
              <div>
                <h3 style={{ color: 'white' }}>Unique Plants</h3>
                <i style={{ color: 'white' }}>Where Great Plants, Great Responsibility</i>
              </div>
            </a>
          </div>
        </div>
        <div style={styleObjUl}>
          <div>
            {' '}
            <a href="#" style={styleA} onClick={handlePlantsClick}>
              Plants
            </a>
          </div>
          <div>
            {' '}
            <a href="#" style={styleA} onClick={handleCartClick}>
              <h1 className="cart">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  id="IconChangeColor"
                  height="68"
                  width="68"
                >
                  <rect width="156" height="156" fill="none"></rect>
                  <circle cx="80" cy="216" r="12"></circle>
                  <circle cx="184" cy="216" r="12"></circle>
                  <path
                    d="M42.3,72H221.7l-26.4,92.4A15.9,15.9,0,0,1,179.9,176H84.1a15.9,15.9,0,0,1-15.4-11.6L32.5,37.8A8,8,0,0,0,24.8,32H8"
                    fill="none"
                    stroke="#faf9f9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    id="mainIconPathAttribute"
                  ></path>
                </svg>
                <span className="cart-quantity">{cartQuantity}</span>
              </h1>
            </a>
          </div>
        </div>
      </div>
      {!showCart ? <ProductGrid /> : <CartItem onContinueShopping={handleContinueShopping} />}
    </div>
  );
};

export default ProductContainer;
