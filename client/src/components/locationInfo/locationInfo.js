import React from 'react'
import "./locationInfo.css"
import LeftBar from '../leftBar/leftBar'
import {Link} from "react-router-dom"

export default function locationInfo() {

  return (
    <div id='main-container'>
      <div><LeftBar  /></div>
      <div id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"820px"}}><i class="bi bi-person"></i> User Name <i class="bi bi-chevron-down"></i> </p>
            <br /></div><br /><hr />
          <div><br />
            <p style={{marginLeft:"40px"}}><b>ADD NEW PROPERTY</b></p></div>
        </header>
<nav>
<Link to="/basicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/propertyInfo"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button id="locationInfo"><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form>

  <label>Email</label><br/>
  <div className='inputField'>
  <input placeholder='Email'/></div><br/>
  <label>Area</label><br/>
  <div className='inputField'>
  <input placeholder='Select Area'/></div><br/>
  <label>Address</label><br/>
  <div className='inputField'>
  <input placeholder="Address"/></div><br/>
  <label>Latitude</label><br/>
  <div className='inputField'>
  <input placeholder="Latitude"/><br/></div>
  
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>City</label><br/>
  <div className='inputField'>
  <input placeholder='Select City'/></div><br/>
  <label>Pincode</label><br/>
  <div className='inputField'>
  <input placeholder='Select Pincode'/></div><br/>
  <label>Landmark</label><br/>
  <div className='inputField'>
  <input placeholder='Landmark'/></div><br/>
  <label>Longitude</label><br/>
  <div className='inputField'>
  <input placeholder="Longitude"/></div><br/>
  </form>
</div>
</div>
<div id="lowerBtn">
<Link to="/generalInfo"><button className='previousBtn'><b>Previous</b></button></Link>
<button className='saveBtn'><b>Add Property</b></button>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
