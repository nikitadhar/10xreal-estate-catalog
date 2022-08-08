import React from 'react'
import LeftBar from '../leftBar/LeftBar'
import "./GeneralInfo.css"
import {Link} from "react-router-dom"
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
 
 export default function GeneralInfo() {
  const [data,setPosts] = useState({name:"",postedBy:"",image:"", featuredPackage:"", mobile:"",saleType:"",ppdPackage:""});
const navigate = useNavigate();
const [setvalue] = useState("No File Chosen")
const convertbase64 = (file)=> new Promise((res,rej)=>{
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = () => res(reader.result)
  reader.onerror = (err) =>rej(err)
})

const afterUpload = async (e)=>{
  console.log("Hello")
  const file = e.target.files[0]
  const base64 = await convertbase64(file)
  setPosts({...data,image:base64})
  setvalue(e.target.value)
}

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
  navigate("/LocationInfo");
}
  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius:"50%",
    border:"#FFFFFF"
  };
   

  return (
    <div id='main-container'>
      <div><LeftBar /></div>
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
<Link to="/BasicInfo"><button className='sub-btn'><i class="bi bi-1-circle"></i> Basic Info</button></Link>
<Link to="/PropertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
<button  id="generalInfo"><i style={mystyle} class="bi bi-3-circle"></i> General Info</button>
<Link to="/LocationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link></nav> 
   <br/>
   <section>
   <div id="form-container">
<div className='sub-formContainer'>
<form method='POST'>
  <label>Name</label><br/>
  <div className='inputField'>
  <select value={data.name} onChange={(e)=>{setPosts({...data,name: e.target.value})}}><option>Owner</option></select></div><br/>
  <label>Posted by</label><br/>
  <div className='inputField'>
  <select value={data.postedBy} onChange={(e)=>{setPosts({...data,postedBy: e.target.value})}}><option>posted by</option></select></div><br/>
  <label>Featured Package</label><br/>
  <div className='inputField'>
  <select value={data.featuredPackage} onChange={(e)=>{setPosts({...data,featuredPackage: e.target.value})}}><option>Please Select</option></select></div><br/>
   
</form>
</div>
<div className='sub-formContainer'>
<form>
  <label>Mobile</label><br/>
  <div className='inputField'>
  <input  value={data.mobile} onChange={(e)=>{setPosts({...data,mobile: e.target.value})}} placeholder='Enter Mobile Number'/></div><br/>
  <label>Sale Type</label><br/>
  <div className='inputField'>
  <select value={data.saleType} onChange={(e)=>{setPosts({...data,saleType: e.target.value})}}><option>Please Select</option></select></div><br/>
  <label>PPD Package </label><br/>
  <div className='inputField'>
  <select value={data.ppdPackage} onChange={(e)=>{setPosts({...data,ppdPackage: e.target.value})}}><option>Please Select</option></select></div><br/>
   </form>
</div>
</div>
 
    <br/>
    <input type="file" style={{display:"none"}} value={data.image} onChange={(e)=>{setPosts({...data,image: e.target.value})}} name="image-upload" id="input" accept='image/*'/>
<div className='label'>
  <label htmlFor='input' className='image-upload'>
  <div id="camera">
  <i class="bi bi-camera"></i></div>
Add Photo
  </label>
</div>

<div id="lowerBtn">
<Link to="/PropertyDetail"><button className='previousBtn'><b>Previous</b></button></Link>
<button onClick={handlePosts} className='saveBtn'><b>Save & Continue</b></button>
</div>
   
   
  </section> 
   
    
    
    
    
    
    
    </div>
   </div>
   
    )}
