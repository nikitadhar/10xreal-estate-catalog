 
 import BasicInfo from "./components/basicInfo/BasicInfo";
 import {BrowserRouter, Routes,Route} from "react-router-dom";
import PropertyDetail from "./components/propertyDetail/PropertyDetail";
import GeneralInfo from "./components/generalInfo/GeneralInfo";
import LocationInfo from "./components/locationInfo/LocationInfo";
import AddProperty from "./components/addproperty/AddProperty";
import SearchBar from "./components/searchBar/SearchBar";
// import Login from "./components/login/Login";
// import Signup from "./components/signup/Signup";
 
import React, { useState } from "react";
export const PassData=React.createContext({})



 



function App() {
  const[condata,setcondata]=useState({});
  return (
     <div className="App">
      <PassData.Provider value={{condata,setcondata}}>
      <BrowserRouter>
    <Routes>
     <Route path="/" element={<BasicInfo/>}/>
     {/* <Route path="/Login" element={<Login/>}/>
     <Route path="/Signup" element={<Signup/>}/> */}
      <Route path="/AddProperty" element={<AddProperty/>}/>
      <Route path="/PropertyDetail" element={<PropertyDetail/>}/> 
      <Route path="/GeneralInfo" element={<GeneralInfo/>}/>
      <Route path="/LocationInfo" element={<LocationInfo/>}/>
      <Route path="/BasicInfo" element={<BasicInfo/>}/>  
      <Route path="/AddProperty" element={<AddProperty/>}/>
      <Route path="/SearchBar" element={<SearchBar/>} />
       <Route/>
    </Routes>
    </BrowserRouter>
 
      </PassData.Provider>
   
    </div>
  );
}

export default App;
