import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css"
import "./leftBar.css"


export default function LeftBar() {
    const mystyle = {
        color: "black",
         fontSize:"40px"
      };
    return (  
<div id='container'><br />
<p style={mystyle}><b>Logo</b></p>
<ul>
<div className='icons' style={{ color: "blue" }}> <i class="bi bi-house"></i> <li> Property</li> </div><br />
<div className='icons' style={{ color: "#AAAAAA" }}><li><i class="bi bi-bell"></i></li> <li>Assistance</li></div><br />
<div className='icons' style={{ color: "#AAAAAA" }}><li><i class="bi bi-download"></i></li><li>Received Interest</li></div><br />
<div className='icons' style={{ color: "#AAAAAA" }}><li><i class="bi bi-upload"></i></li><li>Sent Interest</li> </div><br />
<div className='icons' style={{ color: "#AAAAAA" }}><li><i class="bi bi-eye"></i></li><li>Property Views</li> </div><br />
<div className='icons' style={{ color: "#AAAAAA" }}><li><i class="bi bi-tag"></i></li><li>Tariff Plan</li>  </div><br />
</ul>
</div>
)}
