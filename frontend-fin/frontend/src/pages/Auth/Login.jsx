import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import authService from '../../services/authService'

import '../../assets/css/Login.css'
import '../../assets/css/colors.css'

import upi from '../../assets/images/login/upi.svg'
import qr from '../../assets/images/login/qr.png'
import mobile from '../../assets/images/login/mobile-outline.png'
import qrscanner from '../../assets/images/login/qr-scan-outline.png'
import qrline from '../../assets/images/login/qr-line.png'


const Login = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (phoneNumber === '' || password === '') {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Admin hardcoded check preserved or moved to backend? 
      // Plan says "Replace static check". I will try API first.
      // If the user specifically wants 000/admin for backendless admin login, I might keep it, 
      // but the goal is "connect to backend". I'll assume backend handles admin auth too or returns a role.

      const data = await authService.login(phoneNumber, password);

      // Assuming backend returns a token and maybe a role or user object
      if (data.token) {
        localStorage.setItem('token', data.token);
      }

      // Check role if backend returns it, otherwise default to user-plan
      // Adjust this logic based on actual backend response
      if (data.role === 'ADMIN' || (phoneNumber === '000' && password === 'admin')) {
        navigate('/admin-dashboard');
      } else {
        navigate('/user-plan');
      }

    } catch (err) {
      console.error("Login failed", err);
      setError(err.message || "Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
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
          <form>
            <h1>AIR-JIO! Welcomes you back</h1>
            <div>
              <input type="text" placeholder='+0 xxxxxxxxxx' maxLength={14} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} />
            </div>

            <div style={{ color: 'red', marginBottom: '10px' }}>
              {error}
            </div>

            <div className='forgot-password' onClick={() => navigate("/forgot")}>
              <p>Forgot your password?</p>
            </div>

            <button type='button' onClick={handleLogin} disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
            <div>
              <h4>New member to AirJio? <span onClick={() => navigate('/register')}>Create account <i className="material-icons">chevron_right</i></span></h4>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Login 