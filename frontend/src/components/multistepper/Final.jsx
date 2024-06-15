import React, { useContext, useEffect, useState } from 'react'
import { StepperContext } from '../../contextProvider/StepperContextProvider';

const Final = () => {

  const {userData} = useContext(StepperContext);

  useEffect(()=>{
    // setuserData(localStorage.getItem("userData"));
    console.log(userData);
  },[userData]);

  return (
    <div className='divide-y-[1rem] divide-transparent'>

      <div className='flex items-center gap-3'>
        <span className='font-medium text-lg'>
          Nationality:
        </span>
        <span>
          {userData["nationality"]}
        </span>
      </div>

      <div className='flex items-center gap-3'>
        <span className='font-medium text-lg'>
          Religion:
        </span>
        <span>
          {userData["religion"]}
        </span>
      </div>

      <div className='flex items-center gap-3 flex-wrap'>
        <span className='font-medium text-lg'>
          You are interested in: 
        </span>
        <p className='flex gap-4'>
          {
            userData["interest"].map((item,i)=>{
              return (
                <span key={i}  className={`block cursor-pointer border-[1px] border-fortery-bg-color p-3 px-5 rounded-[3rem] hover:border-primary-bg-color`}>
                  {item}
                </span>
              )
            })
          }
        </p>
      </div>

       <div className='flex items-center gap-3 flex-wrap'>
        <span className='font-medium text-lg'>
          Your transportation selected mediums: 
        </span>
        <p className='flex gap-4'>
          {
            userData["transport"].map((item,i)=>{
              return (
                <span key={i} className={`cursor-pointer block border-[1px] border-fortery-bg-color p-3 px-5 rounded-[3rem] hover:border-primary-bg-color`}>
                  {item}
                </span>
              )
            })
          }
        </p>
      </div>
    </div>
  )
}

export default Final
