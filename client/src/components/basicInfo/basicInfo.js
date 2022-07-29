import React from 'react'
import LeftBar from '../leftBar/leftBar'
import "./basicInfo.css"
import {Link} from "react-router-dom"

export default function BasicInfo() {

  return (
    <div id='main-container'>
      <div><LeftBar /></div>
      <div id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"750px"}}><i class="bi bi-person"></i> User Name</p>
          
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
<Link to="/basicInfo"><button id="basicInfoBtn"><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/propertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<Link to="/generalInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form>
  <label>Property Type</label><br/>
  <div className='inputField'>
  <input placeholder='select property type'/></div><br/>
  <label>Price</label><br/>
  <div className='inputField'>
  <input placeholder='select price'/></div><br/>
  <label>Property Age</label><br/>
  <div className='inputField'>
  <input placeholder="select property age"/></div><br/>
  <label>Property Description</label><br/>
  <input/><br/>
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>Negotable</label><br/>
  <div className='inputField'>
  <input placeholder='select negotable'/></div><br/>
  <label>Ownership</label><br/>
  <div className='inputField'>
  <input placeholder='select ownership'/></div><br/>
  <label>Property Approved </label><br/>
  <div className='inputField'>
  <input placeholder='select property approved'/></div><br/>
  <label>Bank Loan</label><br/>
  <div className='inputField'>
  <input placeholder="bank loan"/></div>
</form>
</div>
</div>
<div id="lowerBtn">
<button className='cancelBtn'><b>Cancel</b></button>
<Link to="/generalInfo"><button className='saveBtn'><b>Save & Continue</b></button></Link>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
