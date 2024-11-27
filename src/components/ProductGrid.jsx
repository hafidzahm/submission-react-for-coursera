import plants from './unique-plants';
import './ProductGrid.css';
const ProductGrid = () => {
  const plantsArray = plants;
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
                    <p>${plant.price}</p>
                    <button className="product-button">Add To Cart</button>
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
