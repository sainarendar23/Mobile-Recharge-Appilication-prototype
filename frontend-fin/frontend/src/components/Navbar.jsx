import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

import '../assets/css/colors.css'
import '../assets/css/Navbar.css'
import logo from '../assets/images/logo.png'

const Navbar = () => {

    useEffect(()=>{

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.addEventListener("click",()=>{
        hamburger.classList.toggle("active-nav");
        navMenu.classList.toggle("active-nav");
    })
},[]);

    const navigate = useNavigate();

    return (
        <div>
            <nav className='navbar'>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="nav-contents">
                    <ul className="nav-menu">
                        <li className="nav-item" onClick={()=>navigate('/')}>Home</li>
                        <li className="nav-item" onClick={()=>navigate('/')}> <a href="#faq">Faq</a></li>
                        <li className="nav-item" onClick={()=>navigate('/user-plan')}>Prepaid packs</li>
                        <li className="nav-item" onClick={()=>navigate('/user-plan')}>Postpaid packs</li>
                        <li className="nav-item" onClick={()=>navigate('/transaction')}>History</li>

                        <li className="nav-item" onClick={() => navigate('/login')}>Login</li>
                    </ul>
                </div>

                <div className="hamburger">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

            </nav>
        </div>
    )
}

export default Navbar