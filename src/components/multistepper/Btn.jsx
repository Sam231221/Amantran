import React, { useContext, useEffect } from "react";
import { useState } from "react";
// import { StepperContext } from "../contexts/StepperContextProvider";
import { StepperContext } from "../../contextProvider/StepperContextProvider";

export const Btn = ({property,value})=>{
    const {addUserData, userData} = useContext(StepperContext);

    //if already present in local storage we have to show the border of the buttons
  const [clicked, setClicked] = useState(userData[property].includes(value)?true:false);

  useEffect(()=>{
console.log(userData[property].includes(value.toLowerCase()), property, value, userData[property]);
  },[]);

  const updateClicked = ()=>{
    setClicked(!clicked);
    console.log(clicked);
  };

  return <span className={`cursor-pointer rounded-[2.5rem] border-[2px]  p-3 px-5 ${clicked?"border-primary-bg-color":""}`} onClick={()=>{addUserData(property,value); updateClicked()}}>
    {value}
  </span>
};