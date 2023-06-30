import React from 'react'
import {MdFamilyRestroom} from "react-icons/md";
import {ImManWoman } from "react-icons/im";
import {IoIosPeople, IoMdMan} from "react-icons/io";
import data from "../data/data.json";
import { useTripPlanContext } from '../contextProvider/contextProvider';

const GroupType = () => {
    const icons=[
        <IoMdMan />,
        <ImManWoman />,
        <MdFamilyRestroom />,
        <IoIosPeople />,
    ];

    const {group_type} = data;

    const {add, remove} = useTripPlanContext();

  return (
    <div>
        
        <h1 className='header'>How many people are traveling</h1>

        <div>

            {
                group_type.map((item,i)=>{
                    const {id, title} = item;

                    return (
                        <div className='cursor-pointer' onClick={()=>{
                            add({index:0, value:title});
                            
                        }} key={id}>

                            <input type="radio" id={`group-type${id}`} name="group-type" required />

                            <label htmlFor={`group-type${id}`}>

                                <span>
                                    {icons[i]}
                                </span>

                                <span>
                                    {title}
                                </span>

                            </label>
                            
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default GroupType
