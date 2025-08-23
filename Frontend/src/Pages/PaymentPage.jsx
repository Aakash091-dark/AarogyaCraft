import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PaymentPage.css';

const PaymentPage = () => {
  const { amount } = useParams();
  const [activeTab, setActiveTab] = useState('card');
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (activeTab === 'upi' && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeTab, timer]);

  return (
    <div className="payment-container">
      <div className="payment-box">
        <h1 className="payment-title">Complete Your Payment</h1>
        <h2 className="payment-amount">Amount to Pay: ₹{amount}</h2>

        <div className="payment-methods">
          <button
            className={`tab-btn ${activeTab === 'card' ? 'active' : ''}`}
            onClick={() => setActiveTab('card')}
          >
            Card
          </button>
          <button
            className={`tab-btn ${activeTab === 'upi' ? 'active' : ''}`}
            onClick={() => setActiveTab('upi')}
          >
            UPI
          </button>
        </div>

        {activeTab === 'card' && (
          <div className="payment-details">
            <div className="card-types">
              <span>Debit/Credit Card</span>
              <div className="card-icons">
                <img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa" />
                <img src="https://img.icons8.com/color/48/000000/mastercard.png" alt="Mastercard" />
                <img src="https://img.icons8.com/color/48/000000/rupay.png" alt="Rupay" />
              </div>
            </div>
            <form className="payment-form">
              <div className="form-group">
                <label htmlFor="name">Name on Card</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="card-number">Card Number</label>
                <input type="text" id="card-number" required />
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="expiry">Expiry Date</label>
                  <input type="text" id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="form-group">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" required />
                </div>
              </div>
              <button type="submit" className="submit-btn">Pay Now</button>
            </form>
          </div>
        )}

        {activeTab === 'upi' && (
          <div className="payment-details">
            <div className="upi-options">
              <button className="upi-btn">GPay</button>
              <button className="upi-btn">PhonePe</button>
              <button className="upi-btn">Paytm</button>
            </div>
            <div className="qr-code">
              <p>Scan QR to pay</p>
              <img src="https://img.icons8.com/ios/100/000000/qr-code.png" alt="QR Code" />
              <p className="qr-expiry">
                {timer > 0 ? `QR code expires in ${timer}s` : 'QR code expired'}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentPage;
