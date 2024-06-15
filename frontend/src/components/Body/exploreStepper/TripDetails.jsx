import React from 'react'
import data from "../../../../data.json";
import { useContextProvider } from '../../../contextProvider/ContextProvider';
const TripDetails = () => {
    const {trip_details} = data;
    const {add} = useContextProvider();

  return (
    <div className='m-4'>
      
      <h1 className='header'>
        Last few details...
      </h1>

    {
        trip_details.map((detail,i)=>{
            const {id, name, options, question, tripPlanIndex} = detail;
            return (
                <div key={id}>
                    
                    <h1 className="header2 my-2">
                        {question}
                    </h1>

                    {
                        id==1?
                        <fieldset>
                            <legend>per person for entire trip</legend>

                            <label htmlFor={name}></label>
                            <input type="text" className='w-[80%] p-2 border-gray-200 border-[1px]' name={name} placeholder="500 USD" required />
                        </fieldset>
                        :
                        id==2?
                        <select className='w-[80%] p-2 border-gray-200 border-[1px]' name={name} id={name} onClick={(e)=>{
                            if(!e.target.value.includes("Select one of"))
                                add({index:tripPlanIndex, value: e.target.value});
                            }}>
                            {
                                options.map((option, i)=>{
                                    return (
                                        <option key={i}>
                                            {option}
                                        </option>
                                    )
                                })
                            }
                        </select>
                        :
                        options.map((option,i)=>{
                            return (
                                <div key={i}  className='grid grid-cols-[max-content_auto] items-center gap-4 text-lg'>
                                    
                                    <input type="radio"  className='w-5 h-5 block' name={name} id={`${name}-${i}`} onClick={()=>{
                                        add({index:tripPlanIndex, value:option})
                                    }} />

                                    <label htmlFor={`${name}-${i}`} className='cursor-pointer' onClick={()=>{
                                        add({index:tripPlanIndex, value:option})
                                    }}>
                                        {option}
                                    </label>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
    }

    </div>
  )
}

export default TripDetails
