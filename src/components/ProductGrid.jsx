import plants from './unique-plants';
import './ProductGrid.css';
import { addToCart } from '../redux/CartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
const ProductGrid = () => {
  const [addedToCart, setAddedToCart] = useState({});
  const dispatch = useDispatch();
  const plantsArray = plants;

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true, // Set the product name as key and value as true to indicate it's added to cart.
    }));
  };
  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <>
          <div key={index} className="product-list">
            <div>
              <h1>{category.category}</h1>
              <div className="grid">
                {category.plants.map((plant, plantIndex) => (
                  <div className="product-card" key={plantIndex}>
                    <div className="product-image">
                      <img src={plant.img} alt="" style={{ maxWidth: '500px', maxHeight: '500px' }} />
                    </div>
                    <div className="product-title">{plant.name}</div>
                    <p>{plant.description}</p>
                    <p>Price: ${plant.price}</p>
                    <button
                      className={addedToCart[plant.name] ? 'product-button-disabled' : 'product-button'}
                      onClick={() => handleAddToCart(plant)}
                      disabled={addedToCart[plant.name]}
                    >
                      {addedToCart[plant.name] ? 'Added to cart' : 'add to cart'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default ProductGrid;
