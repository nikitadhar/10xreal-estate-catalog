import React from 'react'
import LeftBar from '../leftBar/leftBar'
import "./generalInfo.css"
import {Link} from "react-router-dom"

export default function GeneralInfo() {

  return (
    <div id='main-container'>
      <div><LeftBar /></div>
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
<Link to="/propertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<button  id="generalInfo"><i class="bi bi-3-circle"></i> General Info</button>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form>
  <label>Name</label><br/>
  <div className='inputField'>
  <input placeholder='Owner'/></div><br/>
  <label>Posted by</label><br/>
  <div className='inputField'>
  <input placeholder='Posted By'/></div><br/>
  <label>Featured Package</label><br/>
  <div className='inputField'>
  <input placeholder="Please Select"/></div><br/>
   
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>Mobile</label><br/>
  <div className='inputField'>
  <input placeholder='Enter Mobile Number'/></div><br/>
  <label>Sale Type</label><br/>
  <div className='inputField'>
  <input placeholder='Please Select'/></div><br/>
  <label>PPD Package </label><br/>
  <div className='inputField'>
  <input placeholder='Please Select'/></div><br/>
   </form>
</div>
</div>
<div id="addPhoto">
    <div id='camera'><i class="bi bi-camera"></i></div><br/><br/>
    <p><b>Add Photo</b></p>
</div>
<div id="lowerBtn">
<Link to="/propertyDetail"><button className='previousBtn'><b>Previous</b></button></Link>
<Link to="/locationInfo"><button className='saveBtn'><b>Save & Continue</b></button></Link>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
