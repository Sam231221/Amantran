import React, { useState } from 'react'
import data from "../data/data.json";
import { useTripPlanContext } from '../contextProvider/contextProvider';

const TravellerInfo = () => {
    const {traveller_info} = data;
    const {add} = useTripPlanContext();

    //index for options containing radio in the form
    let count= 3;

  return (
    <div>
      
      <div>

        <h1 className="header">
            Great Ram! Now to the most important part, your upcoming trip.
        </h1>

        <p>
            Please give us all your trip ideas and thoughts. Based on your input we'll connect you with a travel expert, suiting your needs.
        </p>

      </div>

        {/* form*/}
      <form action="" method="">

        {
            traveller_info.map((info,i)=>{
                const {id, tripPlanIndex, options, question, explanations,name} = info;

                return <div key={id}>
                    
                    <h1 className='header2'>
                        {question}
                    </h1>

                    {
                        id==1 ?
                        <select name="country" id={name} onClick={(e)=>{e.target.value!="Select country"?add({index:tripPlanIndex, value:e.target.value}):
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
                                <div key={i}>

                                    <input name={name} type="radio" id={`${name}-${i}`} onClick={()=>{add({index:tripPlanIndex, value:option})}} />
                                    
                                    <label htmlFor={`${name}-${i}`} className='cursor-pointer' onClick={()=>{add({index:tripPlanIndex, value:option})}}>
        
                                        <span>
                                            {option}
                                        </span>
        
                                        <span className='text-gray-400 text-sm'>
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

      </form>


    </div>
  )
}

export default TravellerInfo
