import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCartStore from "./useCartStore";
import OrderForm from './OrderForm';

const Checkout = ({ setCount }) => {
  const { cart, clearCart } = useCartStore();
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);

  const handleOrderSubmission = (details) => {
    const totalPrice = getTotalPrice();
    setOrderDetails({ ...details, totalPrice });
    setOrderSubmitted(true);
    clearCart();
  };

  const getTotalPrice = () => {
    return cart.reduce((total, product) =>
      total + product.price * (product.quantity || 1), 0
    ).toFixed(2);
  };

  useEffect(() => {
    setCount(cart.length);
  }, [cart, setCount]);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-5">Checkout Page</h1>

      {orderSubmitted ? (
        <div className='row'>
          <div className='col-md-8 offset-md-2'>
            <div className="order-msg-container">
              <div className="alert alert-primary text-center">
                <h3>Thank You for Shopping!</h3>
                <div className="order-detail">
                  <p><strong>Total Price:</strong> ${orderDetails.totalPrice}</p>
                </div>
                <div className="customer-details mt-3">
                  <p><strong>Order Details:</strong></p>
                  <p><strong>Name:</strong> {orderDetails.fullname}</p>
                  <p><strong>Email:</strong> {orderDetails.email}</p>
                  <p><strong>Phone:</strong> {orderDetails.phone}</p>
                  <p><strong>Payment Method:</strong> {orderDetails.payment}</p>
                  <p><strong>Address:</strong> {orderDetails.address}</p>
                  <p><strong>City:</strong> {orderDetails.city}</p>
                  <p><strong>Country:</strong> {orderDetails.country}</p>
                </div>
                <Link to="/">
                  <button className="btn btn-warning" style={{ width: '180px' }}>Continue Shopping</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <section style={{maxWidth: '1200px', margin: '0 auto'}}>
          <div className="table-container mb-4">
            <table className="table table-striped table-responsive">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center">Your cart is empty</td>
                  </tr>
                ) : (
                  cart.map((product) => (
                    <tr key={product.id}>
                      <td><img src={product.image} alt={product.title} width="50" /></td>
                      <td>{product.title.slice(0, 11)}</td>
                      <td>{product.quantity || 1}</td>
                      <td>${product.price}</td>
                      <td>${(product.price * (product.quantity || 1)).toFixed(2)}</td>
                    </tr>
                  ))
                )}
              </tbody>
              {cart.length > 0 && (
                <tfoot>
                  <tr>
                    <td colSpan="4" className="text-end"><strong>Total Price:</strong></td>
                    <td><strong>${getTotalPrice()}</strong></td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
          <div className="bg-primary rounded-2 py-4">
            <h2 className='text-center fs-3 text-white'>Shipping Details</h2>
            <OrderForm onSubmit={handleOrderSubmission} />
          </div>
        </section>
      )}
    </div>
  );
};

export default Checkout;
