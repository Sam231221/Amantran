import React, { useState } from 'react'

export default function ViewBtn({month, year, clicked}) {
    // const [clicked,setClicked] = useState(false);
    // const updateClicked = ()=>{
    //     setClicked(!clicked);
    // };

  return (
    <div className={` py-3 grid grid-rows-2 text-center gap-3 font-bold text-lg border-[1px] border-gray-400 rounded-[0.5rem] ${clicked?"bg-primary-bg-color text-white":"bg-white text-black"}`}>
      
      <span className='whitespace-nowrap'>
        {month}
      </span>

      <span>
        {year}
      </span>
    </div>
  )
}
