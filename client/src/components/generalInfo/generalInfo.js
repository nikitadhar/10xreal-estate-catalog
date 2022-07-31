import React from 'react'
import LeftBar from '../leftBar/leftBar'
import "./generalInfo.css"
import {Link} from "react-router-dom"
import axios from 'axios'

export default function GeneralInfo() {
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
      <div id='LeftBar1'><LeftBar /></div>
      <div id='rightBar'>
        <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{marginLeft:"750px"}}><i class="bi bi-person"></i> User Name </p>
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
<Link to="/propertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<button  id="generalInfo"><i style={mystyle} class="bi bi-3-circle"></i> General Info</button>
<Link to="/locationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <br/>
   <section>
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>
  <label>Name</label><br/>
  <div className='inputField'>
  <input placeholder='Owner'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Posted by</label><br/>
  <div className='inputField'>
  <input placeholder='Posted By'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>Featured Package</label><br/>
  <div className='inputField'>
  <input placeholder="Please Select"/><i class="bi bi-chevron-down"></i></div><br/>
   
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>Mobile</label><br/>
  <div className='inputField'>
  <input placeholder='Enter Mobile Number'/></div><br/>
  <label>Sale Type</label><br/>
  <div className='inputField'>
  <input placeholder='Please Select'/><i class="bi bi-chevron-down"></i></div><br/>
  <label>PPD Package </label><br/>
  <div className='inputField'>
  <input placeholder='Please Select'/><i class="bi bi-chevron-down"></i></div><br/>
   </form>
</div>
</div>
{/* <div id="addPhoto">
    <div id='camera'><i class="bi bi-camera"></i></div><br/><br/>
    <p style={{color: "#7D7D7D"}}><b>Add Photo</b></p>
    </div> */}
    <br/>
    <input type="file" style={{display:"none"}} name="image-upload" id="input" accept='image/*'/>
<div className='label'>
  <label htmlFor='input' className='image-upload'>
  <div id="camera">
  <i class="bi bi-camera"></i></div>
Add Photo
  </label>
</div>

<div id="lowerBtn">
<Link to="/propertyDetail"><button className='previousBtn'><b>Previous</b></button></Link>
<Link to="/locationInfo"><button onClick={handleClick}className='saveBtn'><b>Save & Continue</b></button></Link>
</div>
   
   
  </section> 
   
    
    
    
    
    
    
    </div>
   </div>
    )}
