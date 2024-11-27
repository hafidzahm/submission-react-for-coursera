import { useSelector } from 'react-redux';
import './CartItem.css';

const CartItem = () => {
  const cart = useSelector((state) => state.cart.items);
  const calculateTotalAmount = (item) => {
    let totalAmount = 0;
    cart.forEach((item) => {
      totalAmount += item.quantity * item.price;
    });
    return totalAmount;
  };
  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map((item) => (
          <div className="cart-item" key={item.name}>
            <img
              className="cart-item-image"
              src={item.img}
              alt={item.name}
              style={{ maxWidth: '500px', maxHeight: '500px' }}
            />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.price}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec">-</button>
                <span className="cart-item-quantity-value"></span>
                <button className="cart-item-button cart-item-button-inc">+</button>
              </div>
              <div className="cart-item-total">Total: </div>
              <button className="cart-item-delete">Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className="total_cart_amount"></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button">Continue Shopping</button>
        <br />
        <button className="get-started-button1">Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
