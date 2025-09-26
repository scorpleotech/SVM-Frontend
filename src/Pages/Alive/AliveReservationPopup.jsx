import React, { useState, useEffect } from 'react';
import './AliveCss/AliveReservationPopup.css';

// Import bike images
import liteBlackImage from '../../Assets/Images/Alive/lite.png';
import plusWhiteImage from '../../Assets/Images/Alive/plus.png';
import eliteGreyImage from '../../Assets/Images/Alive/elite.png';
import eliteRedImage from '../../Assets/Images/Alive/Elite_red.png';

// Default images & logos
import liteDefaultImage from '../../Assets/Images/Alive/lite.png';
import plusDefaultImage from '../../Assets/Images/Alive/plus.png';
import eliteDefaultImage from '../../Assets/Images/Alive/elite.png';
import liteLogo from '../../Assets/Images/Alive/png set/alive_lite_logo.png';
import plusLogo from '../../Assets/Images/Alive/png set/alive_plus_logo.png';
import eliteLogo from '../../Assets/Images/Alive/png set/alive_elite_logo.png';

// API Base
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5003';

const createColorObject = (name, hex, image) => ({ name, hex, image });

// Default bike models
const DEFAULT_BIKE_MODELS = {
  Lite: {
    name: 'ALIVE Lite',
    price: 999,
    image: liteDefaultImage,
    logoImage: liteLogo,
    availableColors: [createColorObject('Grey', '#595757ff', liteBlackImage)]
  },
  Plus: {
    name: 'ALIVE Plus',
    price: 999,
    image: plusDefaultImage,
    logoImage: plusLogo,
    availableColors: [createColorObject('White', '#FFFFFF', plusWhiteImage)]
  },
  Elite: {
    name: 'ALIVE Elite',
    price: 999,
    image: eliteDefaultImage,
    logoImage: eliteLogo,
    availableColors: [
      createColorObject('Dark Grey', '#A9A9A9', eliteGreyImage),
      createColorObject('Red', '#FF0000', eliteRedImage),
    ]
  }
};

// API call
const createReservationAPI = async (reservationData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/alive/reserve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reservationData)
    });
    const result = await response.json();
    if (!response.ok) throw new Error(result.message || 'Failed to create reservation');
    return result;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Custom Alert
const CustomAlert = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const t = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(t);
    }
  }, [isVisible, onClose]);
  if (!isVisible) return null;

  return (
    <div className="custom-alert-overlay">
      <div className="custom-alert">
        <div className="alert-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ff6b6b" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="#ff6b6b" strokeWidth="2" />
            <line x1="12" y1="16" x2="12.01" y2="16" stroke="#ff6b6b" strokeWidth="2" />
          </svg>
        </div>
        <div className="alert-content">
          <p className="alert-message">{message}</p>
        </div>
        <button className="alert-close" onClick={onClose}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="13.5" y1="4.5" x2="4.5" y2="13.5" stroke="#666" strokeWidth="1.5" />
            <line x1="4.5" y1="4.5" x2="13.5" y2="13.5" stroke="#666" strokeWidth="1.5" />
          </svg>
        </button>
      </div>
    </div>
  );
};

// Main Popup
function AliveReservationPopup({ isOpen = false, onClose = () => {}, selectedModel = 'Plus', bikeModels = {} }) {
  const [currentSelectedModel, setCurrentSelectedModel] = useState(selectedModel);
  const [selectedColor, setSelectedColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ isVisible: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });

  const models = Object.keys(bikeModels).length > 0 ? bikeModels : DEFAULT_BIKE_MODELS;
  const currentBike = models[currentSelectedModel] || models['Plus'];
  const selectedColorObj = selectedColor ? currentBike.availableColors.find(c => c.hex === selectedColor) : null;

  const autoSelectColorIfSingle = (bike) => {
    if (bike?.availableColors?.length === 1) setSelectedColor(bike.availableColors[0].hex);
    else setSelectedColor('');
  };

  useEffect(() => {
    if (selectedModel && models[selectedModel]) {
      setCurrentSelectedModel(selectedModel);
      autoSelectColorIfSingle(models[selectedModel]);
    }
  }, [selectedModel, models]);

  useEffect(() => {
    autoSelectColorIfSingle(currentBike);
  }, [currentBike]);

  useEffect(() => {
    const esc = (e) => e.key === 'Escape' && onClose();
    if (isOpen) {
      document.addEventListener('keydown', esc);
    }
    return () => {
      document.removeEventListener('keydown', esc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const showAlert = (m) => setAlertInfo({ isVisible: true, message: m });
  const hideAlert = () => setAlertInfo({ isVisible: false, message: '' });

  const handleSubmit = async () => {
    if (!formData.name.trim()) return showAlert('Please enter your name');
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return showAlert('Please enter a valid email');
    if (!formData.mobile.trim()) return showAlert('Please enter your mobile number');

    // Mobile validation: exactly 10 digits
    if (!/^\d{10}$/.test(formData.mobile.trim())) return showAlert('Mobile number must be 10 digits');

    if (!selectedColor) return showAlert('Please select a color');
    if (!agreedToTerms) return showAlert('Please agree to Terms & Privacy Policy');

    setLoading(true);
    const reservationData = {
      ...formData,
      model: currentSelectedModel,
      color: selectedColor,
      colorName: selectedColorObj?.name || selectedColor,
      price: currentBike.price,
      proceedToPayment: true,
      created_user: { id: 'web-user', name: formData.name }
    };

    try {
      const result = await createReservationAPI(reservationData);
      if (result.variant === 'success') {
        onClose();
        setFormData({ name: '', email: '', mobile: '' });
        setSelectedColor('');
        setAgreedToTerms(false);
        window.location.href = result.redirectUrl
          ? `${API_BASE_URL}${result.redirectUrl}`
          : `${API_BASE_URL}/payment/alive/pay/${result.data._id}`;
      } else showAlert(result.message || 'Error creating reservation');
    } catch {
      showAlert('Error creating reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Prevent non-numeric input in mobile field
  const handleMobileInput = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // remove non-numeric
    if (value.length <= 10) setFormData({ ...formData, mobile: value });
  };

  return (
    <div className="alive-reservation-popup">
      <div className="modal-overlay" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal-container">
          {/* Left */}
          <div className="image-panel">
            <div className="logo">
              <img src={currentBike.logoImage} alt={`${currentBike.name} logo`} className="logo-image" />
            </div>
            <div className="main-image-container">
              <img src={selectedColorObj?.image || currentBike.image} alt={currentBike.name} className="main-image" />
            </div>
          </div>
          {/* Right */}
          <div className="form-panel">
            <button className="close-btn" onClick={onClose} disabled={loading}>×</button>
            <div className="header">
              <h2 className="title">Reserve Your Bike</h2>
              <p className="subtitle">Pay a small amount now and secure your booking</p>
            </div>
            <div className="model-selector">
              {Object.keys(models).map((m) => (
                <button key={m} className={`model-btn ${currentSelectedModel === m ? 'active' : ''}`} onClick={() => setCurrentSelectedModel(m)} disabled={loading}>{m}</button>
              ))}
            </div>
            <div className="color-section">
              <label className="color-label">Color {selectedColorObj && <span>- {selectedColorObj.name}</span>}</label>
              <div className="color-options">
                {currentBike.availableColors.map((c, i) => (
                  <div key={i} className={`color-circle ${selectedColor === c.hex ? 'selected' : ''}`} style={{ backgroundColor: c.hex }} onClick={() => currentBike.availableColors.length > 1 && setSelectedColor(c.hex)} />
                ))}
              </div>
            </div>
            <div className="form-group"><input type="text" name="name" className="form-input" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} disabled={loading} /></div>
            <div className="form-group"><input type="email" name="email" className="form-input" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} disabled={loading} /></div>
            <div className="form-group"><input type="tel" name="mobile" className="form-input" placeholder="Mobile (WhatsApp)" value={formData.mobile} onChange={handleMobileInput} disabled={loading} /><p className="input-help">We’ll share booking updates via SMS & WhatsApp</p></div>
            <div className="price-section"><div className="price-main">INR {currentBike.price}.00 <span className="price-note">(Advance)</span></div></div>
            <button className={`pay-btn ${loading ? 'disabled' : ''}`} onClick={handleSubmit} disabled={loading}>{loading ? 'PROCESSING...' : 'PAY NOW'}</button>
            <div className="terms-container">
              <input type="checkbox" id="agree-terms" checked={agreedToTerms} onChange={(e) => setAgreedToTerms(e.target.checked)} className="terms-checkbox" disabled={loading} />
              <label htmlFor="agree-terms" className="terms">By clicking PAY NOW, you agree to our <a href="/terms-condition" target="_blank" rel="noopener noreferrer">Terms & Conditions</a> and <a href="/policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.</label>
            </div>
          </div>
        </div>
      </div>
      <CustomAlert isVisible={alertInfo.isVisible} message={alertInfo.message} onClose={hideAlert} />
    </div>
  );
}

export default AliveReservationPopup;
