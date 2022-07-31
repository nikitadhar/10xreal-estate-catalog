import React from 'react'
import "./locationInfo.css"
import LeftBar from '../leftBar/leftBar'
import {Link} from "react-router-dom"
import axios from 'axios'

export default function locationInfo() {
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
      <div><LeftBar  /></div>
      <div id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"750px"}}><i class="bi bi-person"></i> User Name  </p>
            <div class="dropdown">
  <span>  <i class="bi bi-chevron-down"></i> </span>
  <div class="dropdown-content">
  <p>LogOut</p>
  </div>
</div>

            <br /></div><br /><hr />
          <div><br />
            <p style={{marginLeft:"40px"}}><b>ADD NEW PROPERTY</b></p></div>
        </header>
<nav>
<Link to="/basicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/propertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button id="locationInfo"><i style={mystyle} class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>

  <label>Email</label><br/>
  <div className='inputField'>
  <input placeholder='Email' name='email'/></div><br/>
  <label>Area</label><br/>
  <div className='inputField'>
  <input placeholder='Select Area' name='area'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Address</label><br/>
  <div className='inputField'>
  <input placeholder="Address" name='address'/></div><br/>
  <label>Latitude</label><br/>
  <div className='inputField'>
  <input placeholder="Latitude" name='latitude'/><br/></div>
  
</form>
</div>
<div className='sub-formContainer'>
<form method='POST'>
  <label>City</label><br/>
  <div className='inputField'>
  <input placeholder='Select City' name='city'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Pincode</label><br/>
  <div className='inputField'>
  <input placeholder='Select Pincode' name='pincode'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Landmark</label><br/>
  <div className='inputField'>
  <input placeholder='Landmark' name='landmark'/></div><br/>
  <label>Longitude</label><br/>
  <div className='inputField'>
  <input placeholder="Longitude" name='longitude'/></div><br/>
  </form>
</div>
</div>
<div id="lowerBtn">
<Link to="/generalInfo"><button className='previousBtn'><b>Previous</b></button></Link>
<button onClick={handleClick} className='saveBtn'><b>Add Property</b></button>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
