import useCartStore from "./useCartStore";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AddCart.css'; // Import your CSS file

const AddCart = ({ setCount }) => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();

  const handleQuantityChange = (productId, change) => {
    setQuantity((prev) => {
      const newQuantity = Math.max((prev[productId] || 1) + change, 1);
      updateQuantity(productId, newQuantity);
      return { ...prev, [productId]: newQuantity };
    });
  };

  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    setCount(cart.length);
  }, [cart, setCount]);

  return (
    <section style={{maxWidth: '1200px', margin: '0 auto'}}>
      <div className="shopping-cart">
        <h1 className="text-center mt-5">Shopping Cart</h1>
      </div>
      <div className="container-fluid py-4 mb-5">
        <div className="table-container">
          <table className="w-100">
            <thead>
              <tr className="bg-primary text-white">
                <th className="py-3 px-3">Id</th>
                <th className="py-3 px-3">Image</th>
                <th className="py-3 px-3">Name</th>
                <th className="py-3 px-3">Quantity</th>
                <th className="py-3 px-3">Price</th>
                <th className="py-3 px-3">Total Price</th>
                <th className="py-3 px-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-3">Your cart is empty</td>
                </tr>
              ) : (
                cart.map((product) => (
                  <tr key={product.id}>
                    <td className="py-3 px-3">{product.id}</td>
                    <td className="py-3 px-3">
                      <img src={product.image} alt={product.title} width="50" />
                    </td>
                    <td className="py-3 px-3">{product.title}</td>
                    <td className="py-3 px-3">
                      <div className="quantity-control">
                        <button
                          onClick={() => handleQuantityChange(product.id, -1)}
                          className="btn btn-outline-primary"
                          disabled={
                            (quantity[product.id] || product.quantity || 1) <= 1
                          }
                        > - </button>
                        <span className="mx-2">
                          {quantity[product.id] || product.quantity || 1}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(product.id, 1)}
                          className="btn btn-outline-primary"
                        > + </button>
                      </div>
                    </td>
                    <td className="py-3 px-3">${product.price}</td>
                    <td className="py-3 px-3">${( product.price * (quantity[product.id] || product.quantity || 1) ).toFixed(2)}
                    </td>
                    <td className="py-3 px-3">
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="btn btn-danger"
                      >Remove</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {cart.length > 0 && (
          <div className="text-center mt-4">
            <button onClick={clearCart} className="btn btn-warning" style={{ width: '200px' }}> Clear Cart </button>
            <Link to="/Checkout">
              <button className="btn btn-warning ms-2" style={{ width: '200px' }}> Proceed to Checkout</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AddCart;
