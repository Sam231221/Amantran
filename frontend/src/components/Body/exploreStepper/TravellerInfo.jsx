import React, { useState } from 'react'
import data from "../../../../data.json";
import { useContextProvider } from '../../../contextProvider/ContextProvider';
const TravellerInfo = () => {
    const {traveller_info} = data;
    const {add} = useContextProvider();

    //index for options containing radio in the form
    let count= 3;

  return (
    <div className='m-4'>
      
      <div>

        <h1 className="header">
            Great User! Now to the most important part, your upcoming trip.
        </h1>

        <p>
            Please give us all your trip ideas and thoughts. Based on your input we'll connect you with a travel expert, suiting your needs.
        </p>

      </div>

        {/* form*/}
      <div>

        {
            traveller_info.map((info,i)=>{
                const {id, tripPlanIndex, options, question, explanations,name} = info;

                return <div key={id}>
                    
                    <h1 className='header2 my-3'>
                        {question}
                    </h1>

                    {
                        id==1 ?
                        <select name="country" className='w-[80%] p-2 border-gray-200 border-[1px]' id={name} onClick={(e)=>{e.target.value!="Select country"?add({index:tripPlanIndex, value:e.target.value}):
                        ()=>{}
                        }}>
                            {options.map((option,i)=>{
                                return (
                                    <option key={i}>
                                        {option}
                                    </option>
                                )
                            })}
                        </select>
                        :
                        options.map((option,i)=>{

                            return (
                                <div key={i} className='grid grid-cols-[max-content_auto] items-center gap-4 text-lg'>

                                    <input name={name} type="radio" className='w-5 h-5 block' id={`${name}-${i}`} onClick={()=>{add({index:tripPlanIndex, value:option})}} />
                                    
                                    <label htmlFor={`${name}-${i}`} className='cursor-pointer flex flex-col' onClick={()=>{add({index:tripPlanIndex, value:option})}}>
        
                                        <span className='text-lg'>
                                            {option}
                                        </span>
        
                                        <span className='text-gray-400'>
                                            {explanations[i]}
                                        </span>
                                    </label>
        

                                </div>
                            )
                        })
                    }
                </div>
            })
        }

      </div>


    </div>
  )
}

export default TravellerInfo
