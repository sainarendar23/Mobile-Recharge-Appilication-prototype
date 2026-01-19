import { useState } from 'react';

import Navbar from '../../components/Navbar'

import '../../assets/css/Payment.css'


const Payment = () => {
const [amount,setAmount] = useState(299);

const handleSubmit = (e) => {
    e.preventDefault();
    if(amount === '') {
        alert("Please enter amount!");
    } else {
        var options = {
            key: "rzp_test_v49iPcvulSc5Er",
            key_secret: "XVfWPeADrtRe1Gpfqu6ExKdT",
            amount: amount * 100,
            currency: "INR",
            name: "AirJio",
            description: "for mobile recharge",
            handler: function(response) {
                alert("Payment Successful");
            },
            prefill: {
                name: "AirJio",
                email: "airjio@gmail.com",
                conatct: "7708507527"
            },
            notes: {
                address: "AirJio RazorPay office"
            },
            theme: {
                color: "#e50917"
            }
        };
        var pay = new Razorpay(options); 
        pay.open();
    }
}

  return (
    <div>
        <Navbar />
        <div className="overall-payment-container">
            <div className="overall-payment-container-1">
                <i className='material-icons'>currency_exchange</i>
                <h1>RazorPay is the safer, faster way to pay</h1>
                <p>No matter where you shop, we help keep your financial information secure.</p>
            </div>

            <div className="overall-payment-container-2">
                <div className="payment-container">
                    <div>
                        <h2>YOUR SELECTED RECHARGE PLAN</h2>
                    </div>

                    <div className='p-container-bottom'>
                        <p style={{fontWeight:'bold'}}>Choosing the best payment gateway</p>
                        <p>Data validity: 28 days</p>
                        <p>Data: 1.5 GB/Day</p>
                        <p>Unlimited Voice/SMS 100 per days</p>
                    </div>

                    <div>
                        <input type="text" readOnly value={amount} onChange={(e)=> setAmount(e.target.value)} />
                    </div>

                    <div>
                        <button onClick={handleSubmit}>Pay now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment