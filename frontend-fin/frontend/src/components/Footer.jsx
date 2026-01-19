import { useNavigate } from 'react-router-dom';
import '../assets/css/Footer.css'

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div>
      <footer>
        <h1>Get in touch !</h1>
        <div className='footer margin'>
            <div>
                <h3 style={{color:'white'}}>Privacy</h3>
                <ul>
                    <li onClick={()=>navigate("/tac")}>Terms and Conditon</li>
                    <li onClick={()=>navigate('/')} ><a href="#faq" style={{color:'black'}}>Faq</a></li>
                    <li onClick={()=>navigate("/tac")}>Privacy Policy</li>
                </ul>
            </div>
            <div>
            <h3 style={{color:'white'}}>AirJio</h3>
                <ul>
                    <li onClick={()=>navigate("/")}>Blog</li>
                    <li onClick={()=>navigate("/feedback")}>Contact us</li>
                    <li onClick={()=>navigate("/")}>About us</li>
                </ul>
            </div>
            <div>
                <h3 style={{color:'white'}}>Partners</h3>
                <ul>
                    <li><a href="https://www.airtel.com/" style={{color:'black'}}>Airtel</a></li>
                    <li><a href="https://www.jio.com/" style={{color:'black'}}>Jio</a></li>
                    <li><a href="https://www.myvi.in/" style={{color:'black'}}>VI</a></li>
                </ul>
            </div>
            <div>
                <h3 style={{color:'white'}}>Recharge</h3>
                <ul>
                    <li><a href="https://www.airtel.com/" style={{color:'black'}}>Airtel</a></li>
                    <li><a href="https://www.jio.com/" style={{color:'black'}}>Jio</a></li>
                    <li><a href="https://www.myvi.in/" style={{color:'black'}}>VI</a></li>
                </ul>
            </div>
            <div>
                <h3 style={{color:'white'}}>Social</h3>
                <ul>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Github</li>
                </ul>
            </div>
        </div>
        <div className='copyright'>
            Copyright <i className='material-icons'>copyright</i>  2024. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default Footer
