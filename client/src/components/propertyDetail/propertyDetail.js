import React from 'react'
import "./propertyDetail.css"
import LeftBar from '../leftBar/leftBar'
import {Link} from "react-router-dom"

export default function PropertyDetail() {

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
<button id="propertyDetail"><i class="bi bi-2-circle"></i> Property Detail</button>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form>

  <label>Length</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 5000'/></div><br/>
  <label>Total Area</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 7500'/></div><br/>
  <label>No of BHK</label><br/>
  <div className='inputField'>
  <input placeholder="Select No of BHK"/></div><br/>
  <label>Attached</label><br/>
  <div className='inputField'>
  <input placeholder="Select Attached"/><br/></div>
  <label>Furnished</label><br/>
  <div className='inputField'>
  <input placeholder="Select Furnished"/></div><br/>
  <label>Lift</label><br/>
  <div className='inputField'>
  <input placeholder="Select Lift"/></div><br/>
  <label>Facing</label><br/>
  <input placeholder='Select Facing'/><br/>
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>Breath</label><br/>
  <div className='inputField'>
  <input placeholder='example 1000'/></div><br/>
  <label>Area Unit</label><br/>
  <div className='inputField'>
  <input placeholder='Area Unit'/></div><br/>
  <label>No of Floor</label><br/>
  <div className='inputField'>
  <input placeholder='Select No of Floor'/></div><br/>
  <label>Western Toilet</label><br/>
  <div className='inputField'>
  <input placeholder="Select Western Toilet"/></div><br/>
  <label>Car Parkinh</label><br/>
  <div className='inputField'>
  <input placeholder="Select Car Parking"/></div><br/>
  <label>Electricity</label><br/>
  <div className='inputField'>
  <input placeholder="Example 3 Phase"/></div><br/>
</form>
</div>
</div>
<div id="lowerBtn">
<Link to="/basicInfo"><button className='previousBtn'><b>Previous</b></button></Link>
<button className='saveBtn'><b>Save & Continue</b></button>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
