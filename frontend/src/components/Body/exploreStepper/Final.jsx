import React from 'react'
import { useContextProvider } from '../../../contextProvider/ContextProvider';
const Final = () => {
  const {tripPlanArr} = useContextProvider();

  return (
    <div className='m-8'>
      
      <h1 className='font-bold text-2xl'>You selected the followings:-</h1>

      <ul className='list-disc my-3'>
        {
          tripPlanArr.map((item,i)=>{
            return (
              <li key={i} className='text-lg py-2'>
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
