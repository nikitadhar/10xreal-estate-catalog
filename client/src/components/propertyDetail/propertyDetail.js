import React,{useState} from 'react'
import "./PropertyDetail.css"
import LeftBar from '../leftBar/LeftBar'
import {Link} from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom";

export default function PropertyDetail() {
  const [data,setPosts] = useState({length:"",totalArea:"", noOfBhk:"", attached:"",furnished:"",lift:"",facing:"",breath:"",areaUnit:"",noOfFloor:"",westernToilet:"",carParking:"",electricity:""});
  const navigate = useNavigate();
  const handlePosts =()=>{
    axios({
        url: "http://localhost:3005",
        method: "POST",
        headers: {
        },
        data: data 
       
    }).then((res)=>{
        // console.log(res);
    }).catch((err)=>{
        // console.log(err);
    })
    navigate("/GeneralInfo");
}

  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius:"50%",
    border:"#FFFFFF"
  };
   

  return (
    <div id='main-container'>
      <div style={{height:"1200px"}}><LeftBar /></div>
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
<Link to="/BasicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<button id="propertyDetail"><i style={mystyle} class="bi bi-2-circle"></i> Property Detail</button>
<Link to="/GeneralInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/LocationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
 <br/>  <section>
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>

  <label>Length</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 5000' value={data.length} onChange={(e)=>{setPosts({...data, length: e.target.value})}}/></div><br/>
  <label>Total Area</label><br/>
  <div className='inputField'>
  <input placeholder='Example: 7500' value={data.totalArea} onChange={(e)=>{setPosts({...data, totalArea: e.target.value})}}/></div><br/>
  <label>No of BHK</label><br/>
  <div className='inputField'>
  <select  value={data.noOfBhk} onChange={(e)=>{setPosts({...data, noOfBhk: e.target.value})}}>
  <option>Select No of BHK</option></select>
  </div><br/>
  <label>Attached</label><br/>
  <div className='inputField'>
  <select value={data.attached} onChange={(e)=>{setPosts({...data, attached: e.target.value})}}>
    <option>Select Attached</option></select>
    </div><br/>
  <label>Furnished</label><br/>
  <div className='inputField'>
  <select  value={data.furnished} onChange={(e)=>{setPosts({...data, furnished: e.target.value})}}>
    <option>Select Furnished</option></select>
    </div><br/>
  <label>Lift</label><br/>
  <div className='inputField'>
  <select  value={data.lift} onChange={(e)=>{setPosts({...data, lift: e.target.value})}}> 
  <option>Select Lift</option></select>
  </div><br/>
  <label>Facing</label><br/>
  <div className='inputField'>
  <select  value={data.facing} onChange={(e)=>{setPosts({...data, facing: e.target.value})}}>
    <option>Select Facing</option></select>
    </div><br/>
</form>
</div>
<div className='sub-formContainer'>
<form method='POST'>
  <label>Breath</label><br/>
  <div className='inputField'>
  <input placeholder='example:1000' value={data.breath} onChange={(e)=>{setPosts({...data,breath: e.target.value})}}/></div><br/>
  <label>Area Unit</label><br/>
  <div className='inputField'>
  <select value={data.areaUnit} onChange={(e)=>{setPosts({...data, areaUnit: e.target.value})}}>
    <option>Area Unit</option></select></div><br/>
  <label>No of Floor</label><br/>
  <div className='inputField'>
  <select value={data.noOfFloor} onChange={(e)=>{setPosts({...data,noOfFloor: e.target.value})}}>
     <option>Select No of Floor</option></select></div><br/>
  <label>Western Toilet</label><br/>
  <div className='inputField'>
  <select value={data.westernToilet} onChange={(e)=>{setPosts({...data, westernToilet: e.target.value})}}>
  <option>Select Western Toilet</option></select></div><br/>
  <label>Car Parking</label><br/>
  <div className='inputField'>
  <select value={data.carParking} onChange={(e)=>{setPosts({...data, carParking: e.target.value})}}>
   <option>Select Car Parking</option></select></div><br/>
  <label>Electricity</label><br/>
  <div className='inputField'>
  <input placeholder="Example: 3 Phase" value={data.electricity} onChange={(e)=>{setPosts({...data, electricity: e.target.value})}}/></div><br/>
</form>
</div></div>
<div id="lowerBtn">
<Link to="/BasicInfo"><button className='previousBtn'><b>Previous</b></button></Link>
 <button   className='saveBtn' value="Post" onClick={handlePosts}><b>Save & Continue</b></button>

  </div></section>
   
   
    
    
    
    
    
    
    </div>
   </div>
    )}
