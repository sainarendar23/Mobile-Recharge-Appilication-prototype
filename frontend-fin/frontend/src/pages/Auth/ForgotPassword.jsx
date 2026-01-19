import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import '../../assets/css/Login.css'
import '../../assets/css/colors.css'

import upi from '../../assets/images/login/upi.svg'
import qr from '../../assets/images/login/qr.png'
import mobile from '../../assets/images/login/mobile-outline.png'
import qrscanner from '../../assets/images/login/qr-scan-outline.png'
import qrline from '../../assets/images/login/qr-line.png'


const ForgotPassword = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [error,setError] = useState('');

  const handleLogin = () => {
    if (phoneNumber === '' || password === ''|| cpassword === '' ) {
      setError("Please fill all fields and the charcters should be ateast 8 characters");
    }
    else{
        navigate('/login')
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
            <h1>Forgot Password</h1>
            <div>
              <input type="text" placeholder='+0 xxxxxxxxxx' maxLength={14} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
            </div>
            <div>
              <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} minLength={8}/>
            </div>
            <div>
              <input type="password" placeholder='Confirm Password' value={cpassword} onChange={(e) => setCPassword(e.target.value)} minLength={8}/>
            </div>

            <div style={{ color: 'red' , marginBottom: '10px' }}>
              {error}
            </div>

            <button type='button' onClick={handleLogin}>Reset Password</button>
            <div>
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}

export default ForgotPassword