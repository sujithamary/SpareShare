import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const [paymentMode, setPaymentMode] = useState('creditCard');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardHolderName: '',
    paypalEmail: '',
    upiId: '',
  });

  const navigate = useNavigate();

  const handlePaymentModeChange = (e) => {
    setPaymentMode(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Payment submitted:', formData);
    navigate('/thank-you');
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handleSubmit} className="payment-form">
        <div className="form-group">
          <label htmlFor="paymentMode">Select Payment Mode</label>
          <select
            name="paymentMode"
            value={paymentMode}
            onChange={handlePaymentModeChange}
            className="form-control"
          >
            <option value="creditCard">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
            <option value="upi">UPI</option>
          </select>
        </div>

        {paymentMode === 'creditCard' && (
          <>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder="1234 5678 9101 1121"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                placeholder="MM/YY"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="cardHolderName">Card Holder Name</label>
              <input
                type="text"
                name="cardHolderName"
                value={formData.cardHolderName}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
          </>
        )}

        {paymentMode === 'paypal' && (
          <div className="form-group">
            <label htmlFor="paypalEmail">PayPal Email</label>
            <input
              type="email"
              name="paypalEmail"
              value={formData.paypalEmail}
              onChange={handleChange}
              placeholder="example@paypal.com"
              required
            />
          </div>
        )}

        {paymentMode === 'upi' && (
          <div className="form-group">
            <label htmlFor="upiId">UPI ID</label>
            <input
              type="text"
              name="upiId"
              value={formData.upiId}
              onChange={handleChange}
              placeholder="example@upi"
              required
            />
          </div>
        )}

        <button type="submit" className="btn btn-primary">Submit Payment</button>
      </form>
    </div>
  );
};

export default Payment;
