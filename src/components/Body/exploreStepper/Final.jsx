import React from 'react'
import { useTripPlanContext } from '../contextProvider/contextProvider'

const Final = () => {
  const {tripPlanArr} = useTripPlanContext();

  return (
    <div>
      
      <h1>You selected the followings:-</h1>

      <ul>
        {
          tripPlanArr.map((item,i)=>{
            return (
              <li key={i}>
                {item}
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Final
