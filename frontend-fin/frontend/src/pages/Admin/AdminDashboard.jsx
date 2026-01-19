import { useEffect } from 'react';
import "../../assets/css/AdminDashboard.css"
import { useNavigate } from 'react-router-dom';


const AdminDashboard = () => {

    const navigate = useNavigate();

    useEffect(() => {
        let list = document.querySelectorAll(".navigation li");

        function activeLink() {
            list.forEach((item) => {
                item.classList.remove("hovered");
            });
            this.classList.add("hovered");
        }

        list.forEach((item) => item.addEventListener("mouseover", activeLink));

        let toggle = document.querySelector(".toggle");
        let navigation = document.querySelector(".navigation");
        let main = document.querySelector(".main");

        toggle.onclick = function () {
            navigation.classList.toggle("active");
            main.classList.toggle("active");
        };
    }, [])

    return (
        <div className="container">
            <div className="navigation">
                <ul>
                    <li>
                        <a href="#">
                            <span class="title">AIR-JIO</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>grid_view</i>
                            </span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>account_circle</i>
                            </span>
                            <span class="title">Customers</span>
                        </a>
                    </li>

                    <li onClick={()=>navigate('/manage-plans')}>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>manage_accounts</i>
                            </span>
                            <span class="title">Manage</span>
                        </a>
                    </li>

                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>feedback</i>
                            </span>
                            <span class="title">FeedBack</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span class="icon">
                                <i className='material-icons'>logout</i>
                            </span>
                            <span class="title" onClick={()=>navigate('/login')}>Sign Out</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="main">
                <div className="topbar">
                    <div className="toggle">
                        <i className='material-icons'>menu</i>
                    </div>
                    <div className="search">
                        <label>
                            <input type="text" placeholder="Search here" />
                        </label>
                    </div>

                </div>

                <div className="cardBox">
                    <div class="card">
                        <div>
                            <div class="numbers">1,504</div>
                            <div class="cardName">Daily Views</div>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">180</div>
                            <div class="cardName">Network Package</div>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">284</div>
                            <div class="cardName">Feedback</div>
                        </div>
                    </div>

                    <div class="card">
                        <div>
                            <div class="numbers">₹7,842</div>
                            <div class="cardName">Earning</div>
                        </div>

                        <div class="iconBx">
                            <ion-icon name="cash-outline"></ion-icon>
                        </div>
                    </div>
                </div>

                <div className="details">
                    <div class="recentOrders">
                        <div class="cardHeader">
                            <h2>Recent Reacharge History</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <td>Customer Name</td>
                                    <td>Price</td>
                                    <td>Package</td>
                                    <td>Network</td>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Prabha</td>
                                    <td>₹1200</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Yuvi</td>
                                    <td>₹110</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Bala</td>
                                    <td>₹1200</td>
                                    <td>prepaid</td>
                                    <td>AIRTEL</td>
                                </tr>

                                <tr>
                                    <td>Sundar</td>
                                    <td>₹620</td>
                                    <td>prepaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Kumar</td>
                                    <td>₹1200</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Nagesh</td>
                                    <td>₹110</td>
                                    <td>postpaid</td>
                                    <td>AIRTEL</td>
                                </tr>

                                <tr>
                                    <td>Suresh</td>
                                    <td>₹1200</td>
                                    <td>postpaid</td>
                                    <td>JIO</td>
                                </tr>

                                <tr>
                                    <td>Mahi</td>
                                    <td>₹620</td>
                                    <td>postpaid</td>
                                    <td>AIRTEL</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="recentCustomers">
                        <div class="cardHeader">
                            <h2>Recent Customers</h2>
                        </div>

                        <table>
                            <tr>
                                <td>
                                    <h4>Vivinprabhu <br /> <span>JIO</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sai <br /> <span>AIRTEL</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Rishi <br /> <span>AITEL</span></h4>
                                </td>
                            </tr>

                            <tr>

                            </tr>

                            <tr>
                                <td>
                                    <h4>Sam <br /> <span>JIO</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Sakthi Bala <br /> <span>vi</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Yuvaraj <br /> <span>Jio</span></h4>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <h4>Akilesh <br /> <span>BSNL</span></h4>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;