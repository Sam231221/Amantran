import React, { useContext } from 'react'
import { Btn } from './Btn';
import { StepperContext } from '../../contextProvider/StepperContextProvider';

const Transport = () => {
  const {addUserData} = useContext(StepperContext);

  return (
    <div>
      <h1 className='text-xl pb-3'>Now it's time to select your means of transportation</h1>

      <div className='flex gap-4 flex-wrap'>

        <Btn property={"transport"} value={"Hot air balloon"} />

        <Btn property={"transport"} value={"Bus"} />

        <Btn property={"transport"} value={"Helicopter"} />

        <Btn property={"transport"} value={"Jetplane"} />

      </div>
    </div>
  )
}

export default Transport
