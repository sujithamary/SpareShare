import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faImage } from '@fortawesome/free-solid-svg-icons';
import '../DonationForm/DonationFormMain.css';
import { useNavigate } from "react-router-dom";

function DonationForm() {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState('personal');
  const [categoryType, setCategoryType] = useState('');
  const [items, setItems] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState('');
  const [fundAmount, setFundAmount] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const handleCategoryChange = (e) => {
    setCategoryType(e.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, { name: '', quantity: '' }]);
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleImageChange = (e) => {
    setImageFiles([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  
    
      navigate('/thank-you');
    
  };

  return (
    <div className='donation-form-main-container'>
      <div className="donation-form-wrapper">
        <div className="donation-form-container">
          <h2 className="form-title">Donation Form</h2>
          <div className="steps">
            <div className={`step ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')}>
              <span>1</span> Account Type
            </div>
            <div className={`step ${activeTab === 'category' ? 'active' : ''}`} onClick={() => setActiveTab('category')}>
              <span>2</span> Personal Information
            </div>
            <div className={`step ${activeTab === 'address' ? 'active' : ''}`} onClick={() => setActiveTab('address')}>
              <span>3</span> Profile Data
            </div>
          </div>
          <form onSubmit={handleSubmit} className="donation-form-main">
            {activeTab === 'personal' && (
              <div className="form-section">
                <label htmlFor="username" className="form-label">                
                  <FontAwesomeIcon icon={faUser} /> Username
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  required
                />

                <label htmlFor="mobileNumber" className="form-label">
                  <FontAwesomeIcon icon={faPhone} /> Mobile Number
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="mobileNumber"
                  name="mobileNumber"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>
            )}

            {activeTab === 'category' && (
              <div className="form-section">
                <label htmlFor="categoryType" className="form-label">
                  Category Type
                </label>
                <select
                  className="form-input"
                  id="categoryType"
                  name="categoryType"
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select a category</option>
                  <option value="food">Food</option>
                  <option value="fund">Fund</option>
                  <option value="clothes">Clothes</option>
                  <option value="stationery">Stationery</option>
                  <option value="grocery">Grocery</option>
                  <option value="footwear">Footwear</option>
                </select>

                {categoryType === 'food' && (
                  <div className="food-category">
                    <label htmlFor="estimatedTime" className="form-label">
                      Estimated Time for Spoiling
                    </label>
                    <input
                      className="form-input"
                      type="text"
                      id="estimatedTime"
                      name="estimatedTime"
                      placeholder="Estimated time for spoiling (e.g., 2 hours)"
                      required
                    />

                    {items.map((item, index) => (
                      <div key={index} className="item-row">
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Item Name (e.g., Bread)"
                          value={item.name}
                          onChange={(e) => handleItemChange(index, 'name', e.target.value)}
                          required
                        />
                        <input
                          className="form-input"
                          type="number"
                          placeholder="Quantity (e.g., 10)"
                          value={item.quantity}
                          onChange={(e) => handleItemChange(index, 'quantity', e.target.value)}
                          required
                        />
                        <button type="button" onClick={() => handleRemoveItem(index)} className="remove-item-btn">
                          Remove
                        </button>
                      </div>
                    ))}
                    <button type="button" onClick={handleAddItem} className="add-item-btn">
                      Add Item
                    </button>
                  </div>
                )}

                {['clothes', 'stationery', 'grocery', 'footwear'].includes(categoryType) && (
                  <div className="general-category">
                    <label htmlFor="images" className="form-label">
                      <FontAwesomeIcon icon={faImage} /> Upload Images
                    </label>
                    <input
                      className="form-input"
                      type="file"
                      id="images"
                      name="images"
                      multiple
                      onChange={handleImageChange}
                      required
                    />
                    
                    <label htmlFor="totalQuantity" className="form-label">
                      Total Quantity
                    </label>
                    <input
                      className="form-input"
                      type="number"
                      id="totalQuantity"
                      name="totalQuantity"
                      placeholder="Total quantity (e.g., 20)"
                      value={totalQuantity}
                      onChange={(e) => setTotalQuantity(e.target.value)}
                      required
                    />
                  </div>
                )}

                {categoryType === 'fund' && (
                  <div className="fund-category">
                    <label htmlFor="fundAmount" className="form-label">
                       Fund Amount
                    </label>
                    <input
                      className="form-input"
                      type="number"
                      id="fundAmount"
                      name="fundAmount"
                      placeholder="Amount to donate (e.g., 100)"
                      value={fundAmount}
                      onChange={(e) => setFundAmount(e.target.value)}
                      required
                    />

                    <label htmlFor="paymentType" className="form-label">
                      Payment Type
                    </label>
                    <select
                      className="form-input"
                      id="paymentType"
                      name="paymentType"
                      onChange={(e) => setPaymentType(e.target.value)}
                      required
                    >
                      <option value="">Select a payment type</option>
                      <option value="creditCard">Credit Card</option>
                      <option value="debitCard">Debit Card</option>
                      <option value="upi">UPI</option>
                    </select>

                    {paymentType === 'creditCard' && (
                      <div className="card-details">
                        <label htmlFor="creditCardNumber" className="form-label">Card Number</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardNumber"
                          name="creditCardNumber"
                          placeholder="Card Number (e.g., 1234 5678 9012 3456)"
                          required
                        />
                        <label htmlFor="creditCardExpiryDate" className="form-label">Expiry Date</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardExpiryDate"
                          name="creditCardExpiryDate"
                          placeholder="Expiry Date (e.g., 12/24)"
                          required
                        />
                        <label htmlFor="creditCardCvv" className="form-label">CVV</label>
                        <input
                          className="form-input"
                          type="text"
                          id="creditCardCvv"
                          name="creditCardCvv"
                          placeholder="CVV (e.g., 123)"
                          required
                        />
                      </div>
                    )}

                    {paymentType === 'debitCard' && (
                      <div className="card-details">
                        <label htmlFor="debitCardNumber" className="form-label">Card Number</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardNumber"
                          name="debitCardNumber"
                          placeholder="Card Number (e.g., 1234 5678 9012 3456)"
                          required
                        />
                        <label htmlFor="debitCardExpiryDate" className="form-label">Expiry Date</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardExpiryDate"
                          name="debitCardExpiryDate"
                          placeholder="Expiry Date (e.g., 12/24)"
                          required
                        />
                        <label htmlFor="debitCardCvv" className="form-label">CVV</label>
                        <input
                          className="form-input"
                          type="text"
                          id="debitCardCvv"
                          name="debitCardCvv"
                          placeholder="CVV (e.g., 123)"
                          required
                        />
                      </div>
                    )}

                    {paymentType === 'upi' && (
                      <div className="upi-details">
                        <label htmlFor="upiId" className="form-label">UPI ID</label>
                        <input
                          className="form-input"
                          type="text"
                          id="upiId"
                          name="upiId"
                          placeholder="UPI ID (e.g., username@bank)"
                          required
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {activeTab === 'address' && (
              <div className="form-section">
                <label htmlFor="doorNo" className="form-label">
                  Door No
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="doorNo"
                  name="doorNo"
                  placeholder="Door No (e.g., 123A)"
                  required
                />

                <label htmlFor="street" className="form-label">
                  Street
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="street"
                  name="street"
                  placeholder="Street (e.g., Elm Street)"
                  required
                />

                <label htmlFor="landmark" className="form-label">
                  Landmark
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="landmark"
                  name="landmark"
                  placeholder="Landmark (e.g., Near Park)"
                  required
                />

                <label htmlFor="city" className="form-label">
                  City
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="city"
                  name="city"
                  placeholder="City (e.g., Springfield)"
                  required
                />

                <label htmlFor="district" className="form-label">
                  District
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="district"
                  name="district"
                  placeholder="District (e.g., Middlesex)"
                  required
                />

                <label htmlFor="pinCode" className="form-label">
                  Pin Code
                </label>
                <input
                  className="form-input"
                  type="text"
                  id="pinCode"
                  name="pinCode"
                  placeholder="Pin Code (e.g., 123456)"
                  required
                />

                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-input"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  required
                />
              </div>
            )}

            <div className="form-navigation">
            {activeTab !== 'personal' && (
                <button type="button" onClick={() => setActiveTab('personal')} className="prev-btn">
                  Back
                </button>
              )}
              {activeTab === 'personal' && (
                <button type="button" onClick={() => setActiveTab('category')} className="next-btn">
                  Next
                </button>
              )}
              {activeTab === 'category' && (
                <button type="button" onClick={() => setActiveTab('address')} className="next-btn">
                  Next
                </button>
              )}
              {activeTab === 'address' && (
                 <button type="submit" className="submit-btn">
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default DonationForm;
