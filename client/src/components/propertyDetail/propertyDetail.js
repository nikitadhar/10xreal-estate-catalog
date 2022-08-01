import React from 'react'
import "./propertyDetail.css"
import LeftBar from '../leftBar/leftBar'
import {Link} from "react-router-dom"
import axios from 'axios'

export default function PropertyDetail() {
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius:"50%",
    border:"#FFFFFF"
  };
  const url1 = "http://localhost:3005/";
  const handleClick=(req,res)=>{
    
    axios.post(url1)
    .then((response) => {
      console.log(response);
    });
  
  }


  return (
    <div id='main-container'>
      <div><LeftBar /></div>
      <div  id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"700px"}}><i class="bi bi-person"></i> User Name </p>
            <div class="dropdown">
  <span>  <i class="bi bi-chevron-down"></i> </span>
  <div class="dropdown-content">
  <p>LogOut</p>
  </div>
</div>
            <br /></div><br /><hr />
          <div><br />
            <p style={{marginLeft:"40px"}}><b>ADD NEW PROPERTY</b></p>
           

            </div>
        </header>
        
<nav>
<Link to="/basicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<button id="propertyDetail"><i style={mystyle} class="bi bi-2-circle"></i> Property Detail</button>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
 <br/>  <section>
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>

  <label>Length</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 5000'/></div><br/>
  <label>Total Area</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 7500'/></div><br/>
  <label>No of BHK</label><br/>
  <div className='inputField'>
  <input placeholder="Select No of BHK"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Attached</label><br/>
  <div className='inputField'>
  <input placeholder="Select Attached"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Furnished</label><br/>
  <div className='inputField'>
  <input placeholder="Select Furnished"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Lift</label><br/>
  <div className='inputField'>
  <input placeholder="Select Lift"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Facing</label><br/>
  <div className='inputField'>
  <input placeholder='Select Facing'/></div><br/>
</form>
</div>
<div className='sub-formContainer'>
<form method='POST'>
  <label>Breath</label><br/>
  <div className='inputField'>
  <input placeholder='example 1000'/></div><br/>
  <label>Area Unit</label><br/>
  <div className='inputField'>
  <input placeholder='Area Unit'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>No of Floor</label><br/>
  <div className='inputField'>
  <input placeholder='Select No of Floor'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Western Toilet</label><br/>
  <div className='inputField'>
  <input placeholder="Select Western Toilet"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Car Parkinh</label><br/>
  <div className='inputField'>
  <input placeholder="Select Car Parking"/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Electricity</label><br/>
  <div className='inputField'>
  <input placeholder="Example 3 Phase"/></div><br/>
</form>
</div></div>
<div id="lowerBtn">
<Link to="/basicInfo"><button className='previousBtn'><b>Previous</b></button></Link>
<Link to="/generalInfo"><button onClick={handleClick} className='saveBtn'><b>Save & Continue</b></button></Link>

  </div></section>
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
