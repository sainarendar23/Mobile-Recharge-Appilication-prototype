import { useNavigate } from 'react-router-dom'
import '../../assets/css/ManagePlans.css'

const ManagePlans = () => {

  const navigate = useNavigate();

  const submitAddedPlan = () => {
    alert("Plan added successfully")
    navigate('/admin-dashboard')
  }

  return (
    <div>
      <div className="manage-plans-container">
        <div className="mp-container">
          <h1>Add Plans</h1>

          <input type="text" placeholder='price'/>
          <select>
            <option value="">-- data --</option>
            <option value="">1.5GB/Day</option>
            <option value="">2.5GB/Day</option>
            <option value="">3/Day</option>
          </select>

          <select>
            <option value="">-- plan type --</option>
            <option value="">Postpaid</option>
            <option value="">Prepaid</option>
          </select>

          <select>
            <option value="">-- valdity days --</option>
            <option value="">28 days</option>
            <option value="">30 days</option>
            <option value="">84 days</option>
            <option value="">90 days</option>
            <option value="">128 days</option>
            <option value="">365 days</option>
          </select>
          

          <textarea cols="30" rows="10" placeholder='Description....'></textarea>

          <button onClick={submitAddedPlan}>Add plan</button>
        </div>
      </div>
    </div>
  )
}

export default ManagePlans
