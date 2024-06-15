import { createContext, useContext, useState, useEffect } from "react";

export const StepperContext = createContext(null);

import React from 'react'

export default function StepperContextProvider({children}) {
 const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({nationality:"", religion:"", interest:[], transport:[]});
    const [finalData, setFinalData] = useState([]);

    //for second modal
    const [openSecondModal, setOpenSecondModal] = useState(false);

    const updateOpenSecondModal = ()=>{
      setTimeout(()=>{
        setOpenSecondModal(!openSecondModal);
      },1000);
    };

    const OSMFalse = ()=>{
      setOpenSecondModal(!openSecondModal);
    };


    const addUserData = (key,value)=>{
      const newUserData = {...userData};
        if(key=="interest"||key=="transport"){
          console.log(value);
          if(!userData[key].includes(value))
            newUserData[key].push(value);
          else{
            const index = userData[key].indexOf(value);
            newUserData[key].splice(index,1);
          }
        }
        else{
          newUserData[key] = value;
        }
        setUserData(newUserData);
    };

    useEffect(()=>{
      setUserData(JSON.parse(localStorage.getItem("userData"))?JSON.parse(localStorage.getItem("userData")):{nationality:"", religion:"", interest:[], transport:[]});
      console.log(userData);
      // localStorage.setItem("userData",JSON.stringify(userData));
      // setFinalData(JSON.parse(localStorage.getItem("userData")));
    },[])

    useEffect(()=>{
      // console.log(userData);
      // localStorage.setItem("userData",JSON.stringify(userData));
      // setFinalData(JSON.parse(localStorage.getItem("userData")));
      // console.log(localStorage.getItem("userData"));
    }, [userData]);

    const steps = [
        "Nationality",
        "Religion, interest",
        "transportation",
        "final"
    ];


    const handleClick = (direction)=>{
      let newStep = currentStep;

      direction=="next"?newStep++ : newStep--;

      newStep>0 && newStep<=steps.length && setCurrentStep(newStep);
    };

    const checkUserDataFilled = (direction)=>{
      if(currentStep==1 && userData["nationality"]=="") {
        setCurrentStep(currentStep);
      }
      else if(currentStep==2 && (userData.religion=="" || userData.interest.length==0)){
        setCurrentStep(currentStep);
      }
      else if(currentStep==3 && userData.transport.length==0)
      {
        setCurrentStep(currentStep);
      }
      else{
        handleClick(direction);
      }
    }

    //first modal
    const [isOpen, setIsOpen] = useState(false);

    const updateIsOpen = ()=>{
        setIsOpen(!isOpen);
    };

    //for places show
    const [showPlaces, setShowPlaces] = useState(false);
    const updateShowPlaces = ()=>{
      setShowPlaces(true);
    };

    const updateLocalStorage = (data)=>{
      localStorage.setItem("userData",JSON.stringify(data));
    };

    //contexts for explore section stepper
    

  return (
    <StepperContext.Provider value={{
      userData,
      finalData,
      setUserData,
      addUserData,
      handleClick,
      setFinalData,
      openSecondModal,
      updateOpenSecondModal,
      OSMFalse,
      currentStep, 
      steps,
      checkUserDataFilled,
      isOpen,
      updateIsOpen,
      showPlaces,
      updateShowPlaces,
      updateLocalStorage
    }}>
        {children}
    </StepperContext.Provider>
  )
}

export const useStepperContext = ()=>{
    return useContext(StepperContext);
};

