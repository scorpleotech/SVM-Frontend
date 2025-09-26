import React, { useState, useEffect } from 'react';
import styles from './ClassCss/PranaReservationPopup.module.css';
import pranaClassApi from '../../Api/pranaClassApi';

// Bike Images and Logos
import pranaBlack from '../../Assets/Images/prana_class/prana_black.png';
import pranaBlue from '../../Assets/Images/prana_class/prana_blue.png';

import pranaLogo from '../../Assets/Images/prana_class/PranaLOGO.png';

// Create color object with single image per color
const createColorObject = (name, hex, image) => ({ name, hex, image });

// Bike Models Configuration
const DEFAULT_BIKE_MODELS = {
  Black: {
    name: 'PRANA Black',
    price: 999,
    logoImage: pranaLogo,
    availableColors: [
      createColorObject('Black', '#000000', pranaBlack),
    ],
  },
  Blue: {
    name: 'PRANA Blue',
    price: 999,
    logoImage: pranaLogo,
    availableColors: [
      createColorObject('Blue', '#1E90FF', pranaBlue),
    ],
  },
};

// Custom Alert Component
const CustomAlert = ({ isVisible, message, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 4000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className={styles.customAlertOverlay}>
      <div className={styles.customAlert}>
        <div className={styles.alertIcon}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#ff6b6b" strokeWidth="2" />
            <line x1="12" y1="8" x2="12" y2="12" stroke="#ff6b6b" strokeWidth="2" />
            <line x1="12" y1="16" x2="12.01" y2="16" stroke="#ff6b6b" strokeWidth="2" />
          </svg>
        </div>
        <div className={styles.alertContent}>
          <p className={styles.alertMessage}>{message}</p>
        </div>
        <button className={styles.alertClose} onClick={onClose}>×</button>
      </div>
    </div>
  );
};

// Main Popup Component
function PranaReservationPopup({ isOpen = false, onClose = () => {} }) {
  const [currentSelectedModel, setCurrentSelectedModel] = useState('Black');
  const [selectedColor, setSelectedColor] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [alertInfo, setAlertInfo] = useState({ isVisible: false, message: '' });
  const [formData, setFormData] = useState({ name: '', email: '', mobile: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const models = DEFAULT_BIKE_MODELS;
  const currentBike = models[currentSelectedModel];

  const selectedColorObj = selectedColor
    ? Object.values(models)
        .flatMap((model) => model.availableColors)
        .find((color) => color.hex === selectedColor)
    : null;

  const showAlert = (message) => setAlertInfo({ isVisible: true, message });
  const hideAlert = () => setAlertInfo({ isVisible: false, message: '' });

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color.hex);
  };

  const handleModelSelect = (modelKey) => {
    setCurrentSelectedModel(modelKey);
    setSelectedColor('');
  };

  const handleSubmit = async () => {
    // Validation
    if (!formData.name.trim()) {
      showAlert('Please enter your name');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      showAlert('Please enter a valid email');
      return;
    }
    if (!formData.mobile.trim()) {
      showAlert('Please enter your mobile number');
      return;
    }
    if (!selectedColor) {
      showAlert('Please select a color');
      return;
    }
    if (!agreedToTerms) {
      showAlert('Please agree to Terms & Conditions and Privacy Policy');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare reservation data
      const reservationData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        mobile: formData.mobile.trim(),
        color: selectedColor,
        colorName: selectedColorObj.name,
        price: currentBike.price,
        proceedToPayment: true
      };

      console.log('Creating PranaClass reservation:', reservationData);

      // Create reservation with payment redirect
      const response = await pranaClassApi.createReservationWithPayment(reservationData);
      
      if (response.variant === 'success') {
        showAlert(`Reservation created successfully! Redirecting to payment...`);
        
        // Redirect to payment after a short delay (same as alive)
        setTimeout(() => {
          if (response.redirectUrl) {
            window.location.href = `${process.env.REACT_APP_API_URL}${response.redirectUrl}`;
          } else {
            window.location.href = `${process.env.REACT_APP_API_URL}/payment/pranaclass/pay/${response.data._id}`;
          }
        }, 1500);
      }
    } catch (error) {
      console.error('Reservation creation error:', error);
      showAlert(error.message || 'Failed to create reservation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => e.key === 'Escape' && onClose();
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.pranaReservationPopup}>
      <div className={styles.modalOverlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className={styles.modalContainer}>
          {/* Left Panel */}
          <div className={styles.imagePanel}>
            <div className={styles.logo}>
              <img src={currentBike.logoImage} alt="Prana Logo" className={styles.logoImage} />
            </div>
            <div className={styles.mainImageContainer}>
              <img
                src={selectedColorObj ? selectedColorObj.image : currentBike.availableColors[0].image}
                alt="Bike"
                className={styles.mainImage}
              />
            </div>
          </div>

          {/* Right Panel */}
          <div className={styles.formPanel}>
            <button className={styles.closeBtn} onClick={onClose}>
              ×
            </button>
            <div className={styles.header}>
              <h2 className={styles.title}>Reserve Your Bike</h2>
              <p className={styles.subtitle}>Pay a small amount now and secure your booking</p>
            </div>

            {/* Color Picker Section */}
            <div className={styles.colorSection}>
              <label className={styles.colorLabel}>
                Color {selectedColor && selectedColorObj && `- ${selectedColorObj.name}`}
              </label>
              <div className={styles.colorOptions}>
                {Object.values(models).map((model) => {
                  const color = model.availableColors[0];
                  return (
                    <div
                      key={color.hex}
                      className={`${styles.colorCircle} ${selectedColor === color.hex ? styles.colorSelected : ''}`}
                      style={{ backgroundColor: color.hex }}
                      onClick={() => handleColorSelect(color)}
                    />
                  );
                })}
              </div>
            </div>

            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                className={styles.formInput}
                placeholder="Name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                className={styles.formInput}
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                name="mobile"
                className={styles.formInput}
                placeholder="Mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
              />
            </div>
            <p className={styles.inputHelp}>
              We will use your number to share booking updates via SMS and Whatsapp
            </p>
            <div className={styles.priceSection}>
              <div className={styles.priceMain}>
                INR {currentBike.price}.00
                <span className={styles.priceNote}>(Advance Booking)</span>
              </div>
            </div>
            <button 
              className={styles.payBtn} 
              onClick={handleSubmit}
              disabled={isSubmitting}
              style={{ 
                opacity: isSubmitting ? 0.7 : 1, 
                cursor: isSubmitting ? 'not-allowed' : 'pointer' 
              }}
            >
              {isSubmitting ? 'PROCESSING...' : 'PAY NOW'}
            </button>
            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                id="agree-terms"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
                className={styles.termsCheckbox}
              />
              <label htmlFor="agree-terms" className={styles.terms}>
                By clicking PAY NOW, you agree to our{' '}
                <a href="/terms-condition" target="_blank" rel="noreferrer">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="/policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
                .
              </label>
            </div>
          </div>
        </div>

        <CustomAlert isVisible={alertInfo.isVisible} message={alertInfo.message} onClose={hideAlert} />
      </div>
    </div>
  );
}

export default PranaReservationPopup;