import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../../assets/css/Login.css';

import upi from '../../assets/images/login/upi.svg';
import qr from '../../assets/images/login/qr.png';
import mobile from '../../assets/images/login/mobile-outline.png';
import qrscanner from '../../assets/images/login/qr-scan-outline.png';
import qrline from '../../assets/images/login/qr-line.png';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobileNumber: '',
    network: '',
    password: ''
  });

  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.mobileNumber.trim() || formData.mobileNumber.length < 10 || !formData.network.trim() || !formData.password.trim() || formData.password.length < 8) {
      setError('Fill all fields correctly and password must be atleast 8 characters long');
    } else {
      console.log('Form submitted:', formData);
      navigate("/login")
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error message when user starts typing
    setError('');
  };

  return (
    <div>
      <div className="login-container">
        <div className="left-side">
          <div className="left-side-images">
            <div className="qr-img-container">
              <img src={qr} alt="qr" />
            </div>
            <div className="mobile-img-container">
              <div className="upi-container">
                <img src={upi} alt="upi" />
              </div>
              <img src={mobile} alt="mobile" />
              <div className="h5-tags">
                <h5><i className="material-icons">verified </i> To anyone, anytime</h5>
                <h5><i className="material-icons">verified</i> 24/7 recharges</h5>
                <h5><i className="material-icons">verified </i> Lightspeed payments</h5>
                <h5><i className="material-icons">verified </i> Safe & Secure</h5>
              </div>
              <div className="qr-scanner-container">
                <img src={qrscanner} alt="qrscanner" />
                <div className="qr-line-container">
                  <img src={qrline} alt="qrline" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <form onSubmit={handleSubmit}>
            <h1>Create your free AirJio account</h1>
            <div>
              <input
                type="text"
                placeholder="Mobile Number"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
              />
            </div>
            <div>
              <select
                className="input-field"
                name="network"
                value={formData.network}
                onChange={handleChange}
              >
                <option value="">-- select network --</option>
                <option value="RELIANCE JIO">RELIANCE JIO</option>
                <option value="AIRTEL">AIRTEL</option>
                <option value="BSNL">BSNL</option>
                <option value="Vi">Vi</option>
              </select>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            {error && <div style={{ color: 'red', marginBottom: '10px' }}>{error}</div>}
            <button type="submit">Register</button>
            <div>
              <h4>
                Existing user?{' '}
                <span onClick={() => navigate('/login')}>
                  Login here <i className="material-icons">chevron_right</i>
                </span>
              </h4>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;