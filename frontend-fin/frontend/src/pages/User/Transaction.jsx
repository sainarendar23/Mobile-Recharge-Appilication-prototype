import '../../assets/css/Transaction.css'
import Navbar from '../../components/Navbar'


const Transaction = () => {
  return (
    <div>
      <Navbar />
      <div className="transaction-container" style={{marginTop:"8%"}}>
        <p>Recharged Date: 24/03/2024</p>
        <p>Transaction id: iybhd4567bdg</p>
        <p>Price: 299</p>
        <p>Plan type: Prepaid</p>
        <p>Payment status: Successful</p>
      </div>
      <div className="transaction-container">
        <p>Recharged Date: 24/03/2024</p>
        <p>Transaction id: iybhd4567bdg</p>
        <p>Price: 499</p>
        <p>Plan type: Prepaid</p>
        <p>Payment status: Successful</p>
      </div>
      <div className="transaction-container">
        <p>Recharged Date: 21/03/2024</p>
        <p>Transaction id: iybgdg567bdg</p>
        <p>Price: 299</p>
        <p>Plan type: Prepaid</p>
        <p>Payment status: Successful</p>
      </div>
      <div className="transaction-container" style={{marginBottom:"5%"}}>
        <p>Recharged Date: 21/03/2024</p>
        <p>Transaction id: iyd4567bdg</p>
        <p>Price: 299</p>
        <p>Plan type: Prepaid</p>
        <p>Payment status: Successful</p>
      </div>
    </div>
  )
}

export default Transaction
