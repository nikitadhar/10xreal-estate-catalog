
import React, {useState,useContext } from 'react'
import LeftBar from '../leftBar/LeftBar'
import "./BasicInfo.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import {PassData} from "../../App"
function BasicInfo() {
const {condata,setcondata}=useContext(PassData);
const [data, setPosts] = useState({ propertyType: "", price: "", propertyAge: "", propertyDescription: "", ownership: "", negotable: "", propertyApproved: "", bankLoan: "" });
  const navigate = useNavigate();
  const handlePosts =()=>{
  setcondata({...condata,...data})
    navigate("/PropertyDetail");
}

  const mystyle = {
    color: "#1F1F1F",
    background: "#FFFFFF",
    borderRadius: "50%",
    borderColor: "#FFFFFF",
    borderDisplay: "none"
  };
  return (
    <div id='main-container'>
      <div><LeftBar /></div>
      <div id='rightBar'>
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
        </header>
        <nav>
          <Link to="/BasicInfo"><button id="basicInfoBtn"><i style={mystyle} class="bi bi-1-circle"></i>{" "} Basic Info</button></Link>
          <Link to="/PropertyDetail"><button className='sub-btn'><i class="bi bi-2-circle"></i> Property Detail</button></Link>
          <Link to="/GeneralInfo"><button className='sub-btn'><i class="bi bi-3-circle"></i> General Info</button></Link>
          <Link to="/LocationInfo"><button className='sub-btn'><i class="bi bi-4-circle"></i> Locatoin Info </button></Link>



        </nav>
        <br />
        <section>
          {/* <userContext.Provider> */}
          <div id="form-container">
            <div className='sub-formContainer'>
              <form method='POST'>
                <label>Property Type</label><br />

                <div className='inputField'>

                  <select id="selectField" name="propertyType" value={data.propertyType} onChange={(e) => { setPosts({ ...data, propertyType: e.target.value }) }}><option>select property type</option>
                    <option>Plot</option>
                    <option>House</option>
                  </select></div>
                <br />
                <label>Price</label><br />
                <div className='inputField'>
                  <input placeholder='select price' name="price" value={data.price} onChange={(e) => { setPosts({ ...data, price: e.target.value }) }} type="text" /></div><br />
                <label>Property Age</label><br />
                <div className='inputField'>
                  {/* <input placeholder="select property age" type="text"  /><i class="bi bi-chevron-down"></i> */}
                  <select id="selectField" name='propertyAge' value={data.propertyAge} onChange={(e) => { setPosts({ ...data, propertyAge: e.target.value }) }}>
                    <option>select property age</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>

                </div><br />
                <label>Property Description</label><br />
                <div className='inputField'>
                  <input placeholder='select property description' name="propertyDescription" value={data.propertyDescription} onChange={(e) => { setPosts({ ...data, propertyDescription: e.target.value }) }} /></div><br />
              </form>
            </div>
            <div className='sub-formContainer'>
              <form method='POST'>
                <label>Negotable</label><br />
                <div className='inputField'>
                  {/* <input placeholder='select negotable'/><i class="bi bi-chevron-down"></i> */}
                  <select id="selectField" name='negotable' value={data.negotable} onChange={(e) => { setPosts({ ...data, negotable: e.target.value }) }}>
                    <option>select negotable</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                </div><br />
                <label>Ownership</label><br />
                <div className='inputField'>
                  {/* <input placeholder='select ownership'/> <i class="bi bi-chevron-down"></i> */}
                  <select id="selectField" name="ownership" value={data.ownership} onChange={(e) => { setPosts({ ...data, ownership: e.target.value }) }}>
                    <option>select Ownership</option>
                    <option>Yes</option>
                    <option>No</option>

                  </select>

                </div><br />
                <label>Property Approved </label><br />
                <div className='inputField'>
                  {/* <input placeholder='select property approved'/><i class="bi bi-chevron-down"></i> */}
                  <select id="selectField" name='propertyApproved' value={data.propertyApproved} onChange={(e) => { setPosts({ ...data, propertyApproved: e.target.value }) }}>
                    <option>select property approved</option>
                    <option> Yes</option>
                    <option>No</option>

                  </select>

                </div><br />
                <label>Bank Loan</label><br />
                <div className='inputField'>
                  {/* <input placeholder="bank loan"/><i class="bi bi-chevron-down"></i> */}
                  <select id="selectField" name='bankLoan' value={data.bankLoan} onChange={(e) => { setPosts({ ...data, bankLoan: e.target.value }) }}>
                    <option>select bank loan</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                </div>
              </form>
            </div>
          </div>
          {/* </userContext.Provider> */}
          <div id="lowerBtn">
            <button className='cancelBtn'><b>Cancel</b></button>
            <button className='saveBtn' value="Post" onClick={handlePosts}><b>Save & Continue</b></button>


          </div>
        </section>





      
 
      </div>
       
       

</div>     
    )
   
     
     
}
export default BasicInfo;

