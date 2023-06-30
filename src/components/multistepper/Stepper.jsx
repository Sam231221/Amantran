import React, { useEffect, useRef, useState } from 'react';
import { useStepperContext } from '../../contextProvider/StepperContextProvider';

const Stepper = () => {
    const {currentStep, steps} = useStepperContext();
    const stepRef= useRef();
    const [newStep, setNewStep] = useState([]);

    const updateStep=(stepNumber, steps)=>{
        const newSteps = [...steps];
        let count =0;

        while(count < newSteps.length){

            //current step
            if(count == stepNumber){

                newSteps[count]={...newSteps[count],highlighted: true,selected: true,completed: true,
                };
                count++;
            }

            //step completed
            else if(count < stepNumber){
                newSteps[count]={...newSteps[count],highlighted: false,selected: true,completed: true,
                };
                count++;
            }
            //step pending
            else{
                newSteps[count]={...newSteps[count],highlighted: false,selected: false,completed: false,
                };
                count++;
            }
        }
        return newSteps;
    };

    useEffect(()=>{
        const stepsState = steps.map((step,index)=>{
            return Object.assign({},{description: step,completed: false,highlighted: index==0?true:false,selected: index==0?true:false,
            });
        });

        stepRef.current = stepsState;
        // console.log(stepsState, stepRef.current);
        
        const current = updateStep(currentStep-1, stepRef.current);
        setNewStep(current);

    },[steps,currentStep]);

    const displaySteps =newStep.map((step,index)=>{
        const {highlighted, description, completed,selected} = step;

        return (
            <div key={index} className={`flex items-center ${index!=newStep.length-1?"basis-full":""}`}>
                <div className='relative flex flex-col items-center text-teal-600'>
    
                    {/*number or tick mark*/}
                    <div className={`rounded-full transition duration-500 ease-in-out border-2 border-gray-300 h-12 w-12 flex items-center justify-center ${selected?"bg-primary-bg-color text-white font-bold border border-primary-bg-color":""}`}>

                        {
                            completed?(
                                <span className='text-white font-bold text-xl'>
                                    &#10003;
                                </span>
                            ):
                            index+1
                        }
                    </div>
    
                    {/* display description or title of current step*/}
                    <div className={`absolute hidden sm:block top-full mt-2 text-center w-32 text-xs font-medium uppercase ${highlighted?"text-gray-900":"text-gray-400"}`}>
                        {description}
                    </div>
                    
                </div>
    
                {/* display line*/}
                <div className={`basis-full border-t-2 transition duration-500 ease-in-out ${completed?"border-primary-bg-color":"border-gray-300"}`}>
    
                </div>
            </div>
        );
    });

    useEffect(()=>{
        // console.log(displaySteps);
    },[displaySteps])

  return (
    <div className='flex justify-between items-center'>
      
        {displaySteps}

    </div>
  )
}

export default Stepper
