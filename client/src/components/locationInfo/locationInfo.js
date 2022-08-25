import React,{useState,useContext} from 'react'
import "./LocationInfo.css"
import LeftBar from '../leftBar/LeftBar'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import { PassData } from '../context/DataContext';
 
import axios from 'axios';
 export default function LocationInfo() {
    
  const [data,setPosts] = useState({email:"",area:"", address:"", latitude:"",city:"",pincode:"",landmark:"",longitude:""});
  const navigate = useNavigate();
  const {updatedata}=useContext(PassData);
 
  // const [storeData, setStoreData]=useState([])
  
  // setStoreData(formData.data)
  // console.log(storeData)
  
  const handlePosts =()=>{
   setPosts(updatedata)
    console.log("new :" + updatedata)
    axios({
        url: "http://localhost:3005",
        method: "POST",
        headers: {
        },
        data: data
       
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
   
    navigate("/AddProperty");
}


  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius:"50%",
    border:"#FFFFFF"
  };

  
   return ( 
    <div id='main-container'>
      <div style={{height:"800px"}}><LeftBar  /></div>
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
<Link to="/BasicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/PropertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<Link to="/GeneralInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
<Link to="/LocationInfo"><button id="locationInfo"><i style={mystyle} class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>

  <label>Email</label><br/>
  <div className='inputField'>
  <input value={data.email} onChange={(e)=>{setPosts({...data,email: e.target.value})}} placeholder='Email' name='email'/></div><br/>
  <label>Area</label><br/>
  <div className='inputField'>
  <select value={data.area} onChange={(e)=>{setPosts({...data,area: e.target.value})}}><option>Select Area</option>
  <option>1600</option>
  <option>2500</option>
  <option>3600</option>
  </select></div><br/>
   
  <label>Address</label><br/>
  <div className='inputField'>
  <input value={data.address} onChange={(e)=>{setPosts({...data,address: e.target.value})}} placeholder="Address" name='latitude'/></div><br/>
  <label>Latitude</label><br/>
  <div className='inputField'>
  <input value={data.latitude} onChange={(e)=>{setPosts({...data,latitude: e.target.value})}} placeholder="Latitude" name='latitude'/><br/></div>
  
</form>
</div>
<div className='sub-formContainer'>
<form method='POST'>
  <label>City</label><br/>
  <div className='inputField'>
  <select value={data.city} onChange={(e)=>{setPosts({...data,city: e.target.value})}}>
    <option>Select city</option>
    <option>Bhopal</option>
    <option>Indore</option>
    <option>Hydrabad</option>
    <option>pune</option>
    </select></div><br/>
   
  <label>Pincode</label><br/>
  <div className='inputField'>
  <select value={data.pincode} onChange={(e)=>{setPosts({...data,pincode: e.target.value})}}>
    <option>Select Pincode</option>
    <option>46098</option>
    <option>67940</option>
    <option>642003</option>
    </select></div><br/>
  <label>Landmark</label><br/>
  <div className='inputField'>
  <input value={data.landmark} onChange={(e)=>{setPosts({...data,landmark: e.target.value})}} placeholder='Landmark' name='landmark'/></div><br/>
  <label>Longitude</label><br/>
  <div className='inputField'>
  <input value={data.longitude} onChange={(e)=>{setPosts({...data,longitude: e.target.value})}} placeholder="Longitude" name='longitude'/></div><br/>
  </form>
</div>
</div>
<div id="lowerBtn">
<Link to="/GeneralInfo"><button className='previousBtn'><b>Previous</b></button></Link>
<button onClick={handlePosts}  className='saveBtn' ><b>Add Property</b></button>
</div>
   
   
   
   
    
    
    
    
    
    
    </div>
   </div>
    
    )}
