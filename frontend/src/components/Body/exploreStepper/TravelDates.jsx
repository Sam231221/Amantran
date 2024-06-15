import React from 'react'
import data from "../../../../data.json";
import {TbCalendarCheck, TbCalendarCog, TbCalendarTime} from "react-icons/tb";
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const TravelDates = () => {
    const {travel_dates} = data;
    const icons = [
        <TbCalendarCheck />,
        <TbCalendarTime />,
        <TbCalendarCog />,
    ];

    const {add, remove} = useContextProvider();

  return (
    <div>

        <h1 className="header">
            When will you be traveling?
        </h1>
      
        <div>

            {
                travel_dates.map((date_item,i)=>{
                    const {id, title} = date_item;

                    return (
                        <div className='cursor-pointer text-center border-[1px] border-gray-200 hover:border-primary-bg-color active:border-primary-bg-color' onClick={()=>{
                            add({index:1, value:title})
                        }} key={id}>
                            
                            <div className='my-6'>
                                <span   className='text-[5rem] text-button text-center [&>*]:mx-auto'>
                                    {icons[i]}
                                </span>

                            </div>

                            <span className='text-xl font-bold block mb-3 capitalize text-center'>
                                {title}
                            </span>
                            
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default TravelDates
