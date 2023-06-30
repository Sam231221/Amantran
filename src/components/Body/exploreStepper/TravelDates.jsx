import React from 'react'
import data from "../data/data.json";
import {TbCalendarCheck, TbCalendarCog, TbCalendarTime} from "react-icons/tb";
import { useTripPlanContext } from './contextProvider/contextProvider';

const TravelDates = () => {
    const {travel_dates} = data;
    const icons = [
        <TbCalendarCheck />,
        <TbCalendarTime />,
        <TbCalendarCog />,
    ];

    const {add, remove} = useTripPlanContext();

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
                        <div className='cursor-pointer' onClick={()=>{
                            add({index:1, value:title})
                        }} key={id}>
                            
                            <span>
                                {icons[i]}
                            </span>

                            <span>
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
