import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import planService from "../../services/planService";

import "../../assets/css/Plan.css";

import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import talk from '../../assets/images/unlimited-talk.webp'

const Plan = () => {

  const navigate = useNavigate();

  const [selectedItem, setSelectedItem] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to track popup open/close
  const [selectedCard, setSelectedCard] = useState(null);

  const handleInfoClick = (item) => {
    setSelectedCard(item);
    setShowPopup(true);
  };
  const handlePopupOpen = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  const handleItemClick = (index) => {
    setSelectedItem(index);
  };
  const [popularRechargePacksData, setPopularRechargePacksData] = useState([]);
  const [herounlimited, setHerounlimited] = useState([]);
  const [unlimited, setUnlimited] = useState([]);
  // ... (keep other states or initialize them similarly if needed)

  // Hardcoded Fallback Data (optional, kept for reference or initial state if preferred, but usually we start empty or with skeleton)
  // For this tasks, I'll just load from API and if API fails/empty, it shows empty. 
  // But to preserve UI if backend isn't ready, I should perhaps keep the hardcoded data as default state?
  // The user wants to "connect", so replacing is better.

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const data = await planService.getAllPlans();
        // Assuming data is an array of plans with a 'category' or similar field
        // Example logic:
        // setPopularRechargePacksData(data.filter(p => p.category === 'popular'));
        // setHerounlimited(data.filter(p => p.category === 'hero_unlimited'));

        // If the backend returns just a flat list and we don't know the categories, we might just dump them all in one or map them blindly.
        // For demonstration of connection, I will set all of them to the fetched data if checking connection is the goal.
        // But better:
        console.log("Fetched plans:", data);
        if (Array.isArray(data)) {
          setPopularRechargePacksData(data.filter(plan => plan.category === 'POPULAR') || []);
          setHerounlimited(data.filter(plan => plan.category === 'HERO_UNLIMITED') || []);
          setUnlimited(data.filter(plan => plan.category === 'UNLIMITED') || []);
          // ... map others
        }
      } catch (error) {
        console.error("Failed to fetch plans", error);
      }
    };

    fetchPlans();
  }, []);


  return (
    <>
      <Navbar />
      <div className="first"> </div>
      <div className="split-page">
        <div className="left-section">
          <div className="side-navbar">
            <ul className="nav--menu">
              <li
                onClick={() => { handleItemClick(0) }}
                className={selectedItem === 0 ? "active" : ""}
              >
                <hr />
                <a href="#prp">popular recharge packs</a>
              </li>
              <li
                onClick={() => { handleItemClick(1) }}
                className={selectedItem === 1 ? "active" : ""}
              >
                <hr />
                <a href="#hu">hero unlimited</a>
              </li>
              <li
                onClick={() => { handleItemClick(2) }}
                className={selectedItem === 2 ? "active" : ""}
              >
                <hr />
                <a href="#unlimited">unlimited</a>
              </li>
              <li
                onClick={() => handleItemClick(3)}
                className={selectedItem === 3 ? "active" : ""}
              >
                <hr />
                <a href="#disney">disney + hotstar</a>
              </li>
              <li
                onClick={() => handleItemClick(4)}
                className={selectedItem === 4 ? "active" : ""}
              >
                <hr />
                <a href="#combo">combo / validity</a>
              </li>
              <li
                onClick={() => handleItemClick(5)}
                className={selectedItem === 5 ? "active" : ""}
              >
                <hr />
                <a href="#data">data</a>
              </li>
              <li
                onClick={() => handleItemClick(6)}
                className={selectedItem === 6 ? "active" : ""}
              >
                <hr />
                <a href="#others">others</a>
              </li>
              <li
                onClick={() => handleItemClick(7)}
                className={selectedItem === 7 ? "active" : ""}
              >
                <hr />
                <a href="#topup">top up</a>
              </li>
              <li
                onClick={() => handleItemClick(8)}
                className={selectedItem === 8 ? "active" : ""}
              >
                <hr />
                <a href="#planvoucher">postpaid</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-section">
          <div className="container-plan">
            <h3>Air-Jio Unlimited Plans</h3>
            <h5>TALK UNLIMITED</h5>
            <h6>Our best plans,our best prices,<br />on the best network</h6>
            <img src={talk} alt="talk" />
          </div>
          <div id="prp">
            <h1>popular recharge packs</h1>
            <div>
              {popularRechargePacksData.map((item, index) => (
                <div key={index} className="card">
                  <h3>{item.rate}</h3>
                  <h5>Data<br />{item.data}</h5>
                  <h6>Validity<br />{item.validity} Days</h6>
                  <div className="split-line"></div>
                  <p>{item.description}</p>
                  <i className="material-icons" onClick={handlePopupOpen}>info</i>
                  <button className="buy-btn" onClick={() => navigate('/payment')}>Recharge</button>
                </div>
              ))}

              {/* Popup component */}
              {isPopupOpen && (
                <div className="popup">
                  <div className="popup-content">
                    <span className="close" onClick={handlePopupClose}>&times;</span>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div id="hu">
            <h1>hero unlimited</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="unlimited">
            <h1>unlimited</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="disney">
            <h1>disney + hotstar</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="combo">
            <h1>combo / validity</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="data">
            <h1>data</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="others">
            <h1>others</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="topup">
            <h1>top up</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
          <div id="planvoucher">
            <h1>postpaid</h1>
            {herounlimited.map((item, index) => (
              <div key={index} className="card">
                <h3>{item.rate}</h3>
                <h5>Data<br />{item.data}</h5>
                <h6>Validity<br />{item.validity} Days</h6>
                <div className="split-line"></div>
                <p>{item.description}</p>
                <i className="material-icons">info</i>
                <button className="buy-btn">Recharge</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Plan;