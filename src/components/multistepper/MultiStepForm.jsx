import React, { useState } from 'react'
import Stepper from './Stepper'
import StepperControl from './StepperControl'
import Nationality from './Nationality';
import ReligionInterest from "./ReligionInterest";
import Transport from "./Transport";
import Final from "./Final";
import { useStepperContext } from '../../contextProvider/StepperContextProvider';
import { useEffect } from 'react';

const MultiStepForm = () => {

  const {currentStep} = useStepperContext();

    const displayStep = (step)=>{
    switch(step){
        case 1: 
          return <Nationality />;
        case 2:
          return <ReligionInterest />;
        case 3:
          return <Transport />;
        case 4: 
          return <Final />;
    }
    };

    function getIp() {
        fetch("https://ipinfo.io/json?token=3fddc8a6612ac2").then(
            (response) => response.json()
        ).then(
            (jsonResponse) => {
                console.log(jsonResponse)
                console.log(jsonResponse.loc)
                let loc = jsonResponse.loc
                const location = loc.split(",")
                // htmlcontent = `<ol>\
                //                     <h3>Your location Info:</h3><hr>
                //                     <li>Ip Address: ${jsonResponse.ip}</li>\
                //                     <li>City: ${jsonResponse.city}</li>\
                //                     <li>Region: ${jsonResponse.region}</li>\
                //                     <li>Country: ${jsonResponse.country}</li>\
                //                 </ol>`
            }
        )
    }

    useEffect(()=>{
      getIp();
    },[])
  return (
    <div className=' shadow-xl rounded-2xl p-8 bg-white grid gap-6'>
        {/*stepper*/}
        <div className="container mt-5">

            <Stepper />

        </div>

        {/*steps body*/}
        <form className='mt-8 mb-28'>

            {
              displayStep(currentStep)
            }
        </form>

        {/*stepper control*/}
      <StepperControl />

    </div>

  )
}

export default MultiStepForm
