import React, { useEffect, useState } from 'react'
import data from '../../../../data.json';
import {BsCheck2All} from "react-icons/bs";
// import {FaPeopleGroup} from "react-icons/fa";
import GroupType from './GroupType';
import TravelDates from './TravelDates';
import TravellerInfo from './TravellerInfo';
import TripDetails from './TripDetails';
import Final from './Final';
import { useContextProvider } from '../../../contextProvider/ContextProvider';
import { useStepperContext } from '../../../contextProvider/StepperContextProvider';

export const MultiStepperForm = () => {
    //1 means 0 of array index
    const [currentStepNumber, setCurrentStepNumber] = useState(1);
    const {stepDetails} = data;
    const [stepperState, setStepperState] = useState(stepDetails);
    const {tripPlanArr} = useContextProvider();
    const {OSMFalse} = useStepperContext();
    
    const increaseStepNumber = ()=>{
        setCurrentStepNumber((stepNum)=>{
            return (stepNum < stepperState.length? stepNum+1:stepperState.length);
        });
    };

    const decreaseStepNumber = ()=>{
        setCurrentStepNumber((stepNum)=>{
            return (stepNum==1?1:stepNum-1);
        });
    };

    const updateStepperState = ()=>{
        const newstepperState = stepperState.map((singleStep)=>{
            const {step_number} = singleStep;
            
            //current step case
            if(step_number==currentStepNumber){
                return {...singleStep, isCurrentStep: true, completed:false};
            }
            //already completed
            else if(step_number < currentStepNumber){
                return {...singleStep, isCurrentStep:false, completed: true};
            }
            //pending
            else{
                return {...singleStep, isCurrentStep:false, completed:false};
            }
        });

        setStepperState(newstepperState);
    };
    
    useEffect(()=>{
        updateStepperState();
        // console.log(stepperState[0]);
        // console.log(tripPlanArr, Array.isArray(tripPlanArr));
    },[]);

    useEffect(()=>{
        console.log(tripPlanArr);
    }, [tripPlanArr])

    useEffect(()=>{
        updateStepperState();
        console.log(currentStepNumber);
    },[currentStepNumber]);


  return (
    <div className=''>
        
        <div className='shadow-md pb-8'>

            {/*step number and headings*/}
            <div className='flex w-[80%] mx-auto p-6'>
                
                {
                    stepperState.map((singleStep,i)=>{
                        const {step_title, step_number, isCurrentStep, completed} = singleStep;
                        
                        return (
                            <div key={step_number} className={`flex items-center ${i!=stepperState.length-1?"basis-full":""}`} style={{}}>

                                {/*step number and head*/}
                                <div className='relative'>

                                    {
                                        <span className={`w-8 h-8 ${completed ||currentStepNumber==i+1?i==stepperState.length-1?"bg-white text-blue-500 border-[5px] border-blue-500":"bg-primary-bg-color text-white":i==stepperState.length-1?"bg-white text-blue-500 border-[5px] border-blue-500":"bg-gray-300 text-gray-600 "} text-center rounded-full transition-all duration-300 grid items-center justify-center`}>
                                            {
                                                i!=stepperState.length-1?
                                                step_number
                                                :
                                                <BsCheck2All />
                                                }
                                        </span>

                                    }

                                    <span className={`absolute  ${completed ||currentStepNumber==i+1?
                                        i==stepperState.length-1?
                                        "text-blue-500"
                                        :
                                        "text-primary-bg-color"
                                        :
                                        i==stepperState.length-1?"text-blue-500":
                                        "text-gray-300"} uppercase whitespace-nowrap left-1/2 transform -translate-x-1/2 font-medium translate-y-1/2`}>{step_title}</span>

                                </div>

                                {/*line only*/}
                                {
                                    i!=stepperState.length-1 &&
                                        <div className={`${step_number!=stepperState.length-1?`${completed?"border-primary-bg-color ":"border-gray-300"}`:`border-blue-500`} border-t-[7px]  basis-full transition-all duration-300`}></div>
                                }

                            </div>
                        )
                    })
                }
            </div>

        </div>

        {/*stepper body*/}
        <div className='mt-16 w-[80%] mx-auto p-6 flex gap-5 justify-between'>
            
            {/*left form to be filled by user and stepper control here*/}
            <form className=' shadow-lg basis-[70%]'>

                {/*actual forms*/}
                <div>
                    {
                        currentStepNumber==1?
                        <GroupType />
                        : currentStepNumber==2?
                            <TravelDates />
                        :currentStepNumber==3?
                            <TravellerInfo />
                        :currentStepNumber==4?
                            <TripDetails />
                        :currentStepNumber == 5?
                            <Final />
                        :<></>
                    }
                </div>



                {/*stepper control*/}
                <div className='relative'>

                    {
                        currentStepNumber!=stepperState.length ?
                        <div className='grid grid-cols-2'>
                            <button onClick={()=>{decreaseStepNumber(); }} className='text-primary-bg-color border-primary-bg-color border-[1px] bg-white p-2 m-2 hover:bg-primary-bg-color hover:text-white'>
                                Back
                            </button>

                            <button type="submit" onClick={(e)=>{  e.preventDefault(); increaseStepNumber();  }} className='bg-primary-bg-color text-white hover:bg-primary-bg-color/100 p-2 m-2'>
                                Next
                            </button>
                        </div>
                        :
                        <button type="submit" className='bg-primary-bg-color text-white p-2 m-2' onClick={(e)=>{e.preventDefault(); OSMFalse();}}>
                            Submit
                        </button>

                    }
                </div>

            </form>

            {/*right container containing contents filled according to user responses*/}
            <div className=' shadow-lg basis-[30%]'>

                {/*image shown here*/}
                <div>
                    <img src="" alt="" />
                </div>

                <div className='m-4'>
                    <h1 className='font-medium text-xl pb-3 border-b-[1px] border-gray-400'>
                        List to be displayed here...
                    </h1>
                    {
                        tripPlanArr.map((item,i)=>{
                            // const {value} = item;
                            return (
                                <ol key={i} className='flex gap-2 items-center my-2 list-disc divide-y-2 divide-gray-300'>
                                    {
                                        item &&
                                        <li className='flex w-full gap-2 items-center py-2 border-b-[1px] border-gray-400 '>
                                            <span className='text-lg '>
                                                {item}
                                            </span>

                                            <span className='text-2xl font-bold  text-primary-bg-color'>
                                                <BsCheck2All />
                                            </span>
                                        </li>

                                    }
                                </ol>
                            )
                        })
                    }
                </div>

            </div>

        </div>

    </div>
  )
}

