import React,{useState,useEffect} from 'react'
import "./AddProperty.css"
import LeftBar from '../leftBar/LeftBar';
import SearchBar from '../searchBar/SearchBar';

export default function AddProperty() {
    const [user,setUser]=useState([]);
     useEffect(()=>{
    fetch("http://localhost:3005",{
     }).then((data)=>data.json()).then((user)=>{
      setUser(user.data)}) },[])
    return (<>
    <div id='mainContainer'>
      <div style={{height:"1200px"}} className='subContainer1'><LeftBar/></div>
      <div className='subContainer2'> 
      <header>
          <div className='userName'>
            <p>User ID : 06PPD125</p>
            <p style={{ marginLeft: "750px" }}><i class="bi bi-person"></i> User Name</p>

            <div class="dropdown">
              <span>  <i class="bi bi-chevron-down"></i> </span>
              <div class="dropdown-content">
                <p>LogOut</p>
              </div>
            </div><br />
          </div><br /><hr />
          <div><br />
            <p style={{ marginLeft: "40px" }}><b>ADD NEW PROPERTY</b></p></div>
        </header><br/>
        <div><SearchBar/></div><br/>
        
        <table>
            <div id='headings'>
<tr>
    <th> PPD id</th>
    <th>Image</th>
    <th>Property</th>
    <th>Contact</th>
    <th>Area</th>
    <th>views</th>
    <th>Status</th>
    <th>Days Left</th>
    <th>Active</th>
</tr></div>
<div className='valueTable'>
    {user.map((data)=>(
      <tr>
       
<td>PPD1202</td>
<td><i style={{color:"#817F7F"}} class="bi bi-images"></i></td>
<td>{data.propertyType}</td>
<td>{data.mobile}</td>
<td>{data.area}</td>
<td>02</td>
<td>Unsold</td>
<td>05</td>
<td><i class="bi bi-eye-fill"></i><i class="bi bi-pencil-fill"></i></td>
   </tr>
) )}
</div>
        </table>
       
       
       
       
        </div>



    </div>
    </>)
  
}
