import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import '../../assets/css/colors.css'
import '../../assets/css/Landing.css'

import landingImg1 from '../../assets/images/landing-image-1.png'
import landingImg2 from '../../assets/images/landing-image-2.png'

import offer from '../../assets/images/offer.png'
import customercare from '../../assets/images/customer-care.png'

const Landing = () => {

  return (
    <div>
      <Navbar />
      <section>
        <div className="section-1 margin">
          <h1>The fastest way to send mobile top-up worldwide.</h1>
          <h3>Fast, Safe and Guaranteed</h3>
          <img src={landingImg2} alt="landingImg2" className='imgfox' />
          <img src={landingImg1} alt="landingImg1" className='imgbox' />
        </div>
      </section>

      <section className='margin'>
        <div className="section-2">
          <h1>OUR SECRET SAUCE</h1>
          <h3>Here is what makes AirJio the smarter wireless choice</h3>
        </div>

        <div className="overall-open-sauce-container">
          <div className="open-secret-sauce-container">
            <div className="icon-container">
              <i className='material-icons'>highlight_off</i>
            </div>
            <div className="open-secret-heading">
              <h3>NO EXTRA OVERHEAD</h3>
              <p>We don’t have stores or sales people and sell direct to you online to keep prices as low as they can go.</p>
            </div>
          </div>
          <div className="open-secret-sauce-container">
            <div className="icon-container">
              <i className='material-icons'>emoji_emotions</i>
            </div>
            <div className="open-secret-heading">
              <h3>FLEXIBLE PLAN OPTIONS</h3>
              <p>Choose the monthly data amount that is right for you. If you are not using it all, you can switch to a lower data plan and save even more.</p>
            </div>
          </div>
          <div className="open-secret-sauce-container">
            <div className="icon-container">
              <i className='material-icons'>add_shopping_cart</i>
            </div>
            <div className="open-secret-heading">
              <h3>BRING YOUR OWN EVERYTHING</h3>
              <p>Your unlocked device and current phone number are always welcome at Air-Jio.</p>
            </div>
          </div>
          <div className="open-secret-sauce-container">
            <div className="icon-container">
              <i className='material-icons'>groups</i>
            </div>
            <div className="open-secret-heading">
              <h3>24/7 SUPPORT</h3>
              <p>We are ready to support our users and customers every 24/7 and gave them a effective solution for their problem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='margin'>
        <div className="section-3">
          <div className="section-3-left-side">
            <h1>Top-up wherever, whenever</h1>
            <h4>Get the Air-Jio for the fastest, easiest way to top-up any phone.</h4>
          </div>
          <div className="section-3-right-side">
            <img src={offer} alt="offer" />
          </div>
        </div>
      </section>

      <section className='margin' id='faq'>
        <div className="section-4">
          <h1>Have a question about sending mobile recharge with AIR-JIO?</h1>

          <details>
            <summary>What is AirJio</summary>
            <p>AirJio is the world is leading international mobile top-up platform. <br /> With AirJio, you can buy mobile top-ups for your own phone or send a prepaid mobile recharge online to someone else. You can send a top-up online whether it IS in app or online, and you can do it at any time or on any device that suits you.</p>
          </details>
          <details>
            <summary>What is an international top-up?</summary>
            <p>An international mobile top-up or mobile recharge is the process of adding balance to a prepaid phone that has run out of credit. When the balance reaches the phone, it will be available to make calls, send messages or surf the internet. <br /> Mobile top-ups have different meanings in different countries. You may know it as mobile top-up, airtime recharge, mobile load, balance, refill, minutes, or credit. No matter what you call it, with Ding you can send international recharge online, and it will be received in under 3 seconds.</p>
          </details>
          <details>
            <summary>Can I send mobile recharges from abroad?</summary>
            <p>Yes, Air-Jio is an international top-up service so you can send mobile top-up from the USA, Mexico, Canada, Jamaica, or any other country in the world.</p>
          </details>
          <details>
            <summary>How to send a top-up online</summary>
            <p>With Air-Jio, you can buy airtime online for any mobile network. It can be done in three quick steps, at any time or on any device that suits you. <br /> 1) Select the country and enter the prepaid number to recharge (the country code will be already preselected) <br /> 2) Select an amount of credit or plan to send <br /> 3) Choose your payment method. Once purchased, the mobile recharge is received in 3 seconds!</p>
          </details>
          <details>
            <summary>What are the most popular mobile operators?</summary>
            <p>
              <ul>
                Currently you can send top-up to over 700 operator networks globally. Popular choices include:
                <li>Airtel</li>
                <li>Jio</li>
                <li>Vi</li>
                <li>BSNL</li>
              </ul>
            </p>
          </details>
          <details>
            <summary>Can I pay for a mobile recharge with my credit card?</summary>
            <p>Yes, we support all major payment methods when you buy airtime online, including credit cards, debit cards, Google Pay, Apple Pay, and PayPal.</p>
          </details>
        </div>
      </section>

      <section className='margin'>
        <div className="section-5">
          <div className="section-5-left-side">
            <img src={customercare} alt="customercare" />
          </div>
          <div className="section-5-right-side">
            <h1>CUSTOMER CARE THAT ACTUALLY CARES</h1>
            <h4>We understand the importance of having customer service</h4>
            <p> <i className='material-icons'>done_outline</i> Super short wait times (typically under 5-10 minutes)</p>
            <p> <i className='material-icons'>done_outline</i> Easy to speak with an actual human (unlike every other wireless company)</p>
            <p> <i className='material-icons'>done_outline</i> Self-service options (videos, FAQs, 24/7 support)</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing