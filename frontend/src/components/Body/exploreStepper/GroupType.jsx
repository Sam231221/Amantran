import React from 'react'
import {MdFamilyRestroom} from "react-icons/md";
import {ImManWoman } from "react-icons/im";
import {IoIosPeople, IoMdMan} from "react-icons/io";
import data from "../../../../data.json";
import { useContextProvider } from '../../../contextProvider/ContextProvider';
const GroupType = () => {
    const icons=[
        <IoMdMan />,
        <ImManWoman />,
        <MdFamilyRestroom />,
        <IoIosPeople />,
    ];

    const {group_type} = data;

    const {add, remove} = useContextProvider();

  return (
    <div>
        
        <h1 className='header'>How many people are traveling</h1>

        <div className='grid grid-cols-2 gap-4'>

            {
                group_type.map((item,i)=>{
                    const {id, title} = item;

                    return (
                        <div className='cursor-pointer text-center border-[1px] border-gray-200 hover:border-primary-bg-color active:border-primary-bg-color' onClick={()=>{
                            add({index:0, value:title});
                            
                        }} key={id}>

                            <input type="radio" id={`group-type${id}`} name="group-type" className='cursor-pointer invisible' required  />

                            <label className='cursor-pointer text-center'  htmlFor={`group-type${id}`}>

                                <span className='text-[5rem] text-button text-center [&>*]:mx-auto'>
                                    {icons[i]}
                                </span>

                                <span className='text-xl font-bold capitalize text-center'>
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
