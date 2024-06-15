import React from 'react'
import { useStepperContext } from '../../contextProvider/StepperContextProvider';
const StepperControl = () => {

  const {checkUserDataFilled, handleClick, currentStep, steps, updateIsOpen, updateOpenSecondModal} = useStepperContext();

  return (
    currentStep!=steps.length?(
    <div className=' flex justify-around'>

        {/*back button*/}
        <button onClick={()=>handleClick("back")} className={`bg-white text-slate-400 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep==1?"opacity-50 cursor-not-allowed":""}`}>
            Back
        </button>

        {/*next button*/}
        <button onClick={()=>checkUserDataFilled("next")} className={`bg-primary-bg-color text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out`}>
            {
              currentStep==steps.length-1?"Confirm":"Next"
            }
        </button>

    </div>)
    :
    <>
    <button className={`bg-primary-bg-color text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out w-max`} onClick={()=>{updateIsOpen();}}>
        Submit
    </button>
    </>
  )
}

export default StepperControl
