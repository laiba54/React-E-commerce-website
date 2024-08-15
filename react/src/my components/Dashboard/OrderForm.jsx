import { useState } from 'react';

const OrderForm = ({ onSubmit }) => {
  const [orderDetails, setOrderDetails] = useState({
    fullname: '',
    email: '',
    phone: '',
    payment: '',
    address: '',
    city: '',
    country: '',
  });

  const handleChange = (e) => {
    setOrderDetails({ ...orderDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(orderDetails);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="fullname" className="form-label text-white">Full Name</label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              className="form-control"
              placeholder="Enter your full name"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              placeholder="Enter your email"
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="phone" className="form-label text-white">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="form-control"
              placeholder="Enter your phone number"
              required
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label text-white">Payment Method</label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="payment"
                id="cash-on-delivery"
                value="cash-on-delivery"
                required
                onChange={handleChange}
              />
              <label htmlFor="cash-on-delivery" className="form-check-label text-white">Cash on Delivery</label>
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label text-white">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            placeholder="Enter your address"
            required
            onChange={handleChange}
          />
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="city" className="form-label text-white">City</label>
            <select
              name="city"
              id="city"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="sahiwal">Sahiwal</option>
              <option value="lahore">Lahore</option>
              <option value="karachi">Karachi</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="country" className="form-label text-white">Country</label>
            <select
              name="country"
              id="country"
              className="form-select"
              required
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="london">London</option>
              <option value="pakistan">Pakistan</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-warning" style={{margin : '0 auto' , display : 'block', width: '200px'}}>Place Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
