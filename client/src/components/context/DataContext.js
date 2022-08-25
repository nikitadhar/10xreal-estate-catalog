import React, { useState } from "react";
const PassData=React.createContext({})
 

  function DataContext(props) {
    const [data,setdata]=useState({})
    const updatedata=(newData)=>{
        setdata({...data, ...newData})
    }
  return (
    <>
    <PassData.Provider value={{data,updatedata}} >
   {props.children}
    </PassData.Provider>
    </>
  )
}
export {DataContext,PassData}