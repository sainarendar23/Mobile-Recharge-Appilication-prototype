import '../assets/css/Feedback.css'
import Navbar from './Navbar'
import Footer from './Footer'
const Feedback = () => {
  return (
    <div>
        <Navbar />
      <div className="feedback-container">
        <h1>Feedback</h1>
        <h3>Connect with us!</h3>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Email' />
        <textarea type="text" placeholder='Message' />
        <button>Send</button>
      </div>
      <Footer />
    </div>
  )
}

export default Feedback
