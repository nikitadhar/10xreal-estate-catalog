 
 import BasicInfo from "./components/basicInfo/basicInfo";
 import {BrowserRouter, Routes,Route} from "react-router-dom";
import PropertyDetail from "./components/propertyDetail/propertyDetail";
import GeneralInfo from "./components/generalInfo/generalInfo";
import LocationInfo from "./components/locationInfo/locationInfo";


function App() {
  return (
     <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<BasicInfo/>}/>
      <Route path="/propertyDetail" element={<PropertyDetail/>}/>
      <Route path="/generalInfo" element={<GeneralInfo/>}/>
      <Route path="/locationInfo" element={<LocationInfo/>}/>
      <Route path="/basicInfo" element={<BasicInfo/>}/>
      

      


      <Route/>
    </Routes>
    </BrowserRouter>
 
    </div>
  );
}

export default App;
