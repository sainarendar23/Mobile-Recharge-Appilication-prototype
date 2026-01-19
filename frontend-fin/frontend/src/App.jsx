import{BrowserRouter as Router,Routes,Route} from "react-router-dom";

import Landing from './pages/Auth/Landing';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import ForgotPassword from "./pages/Auth/ForgotPassword";

import Plan from './pages/User/Plan';
import Payment from './pages/User/Payment'; 

import AdminDashboard from './pages/Admin/AdminDashboard';
import ManagePlans from './pages/Admin/ManagePlans';
import TermsAndConditions from "./components/TermsAndConditions";
import Feedback from "./components/Feedback";
import Transaction from "./pages/User/Transaction";


function App(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Landing/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/forgot" element={<ForgotPassword/>}></Route>
                
                <Route path="/user-plan" element={<Plan/>}></Route>
                <Route path="/payment" element={<Payment/>}></Route>

                <Route path="/admin-dashboard" element={<AdminDashboard/>}></Route>
                <Route path="/manage-plans" element={<ManagePlans/>}></Route>
                <Route path="/tac" element={<TermsAndConditions/>}></Route>
                <Route path="/feedback" element={<Feedback/>}></Route>
                <Route path="/transaction" element={<Transaction/>}></Route>

            </Routes>
        </Router>
    )
}
export default App;