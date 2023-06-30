import React from 'react'
import data from "../data/data.json";
import { useTripPlanContext } from '../contextProvider/contextProvider';

const TripDetails = () => {
    const {trip_details} = data;
    const {add} = useTripPlanContext();

  return (
    <form>
      
      <h1 className='header'>
        Last few details...
      </h1>

    {
        trip_details.map((detail,i)=>{
            const {id, name, options, question, tripPlanIndex} = detail;
            return (
                <div key={id}>
                    
                    <h1 className="header2">
                        {question}
                    </h1>

                    {
                        id==1?
                        <fieldset>
                            <legend>per person for entire trip</legend>

                            <label htmlFor={name}></label>
                            <input type="text" name={name} placeholder="500 USD" required />
                        </fieldset>
                        :
                        id==2?
                        <select name={name} id={name} onClick={(e)=>{
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
                                <div key={i}>
                                    
                                    <input type="radio" name={name} id={`${name}-${i}`} onClick={()=>{
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

    </form>
  )
}

export default TripDetails
