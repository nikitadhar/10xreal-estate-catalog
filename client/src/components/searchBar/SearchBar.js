import React from 'react'
import "./SearchBar.css"

export default function SearchBar() {
  return (
    <div id='mainContainer'>
      <div className='subContainer'>
        <input className='searchBtn' type="search" placeholder='Search PPD ID'   />
    <div className='icon'>
       <hr className='hrLower'/>
        <i class="bi bi-search"></i>
    </div>
    
      </div>



<div id='addProDiv'>
<button id='addBtn'>+ Add Property</button>

</div>



    </div>
  )
}
