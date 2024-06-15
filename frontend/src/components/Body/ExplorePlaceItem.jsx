import React, { useEffect, useState } from 'react'
import {BsStarFill, BsStarHalf, BsCheckCircleFill, BsCheckLg} from "react-icons/bs";
import { Link } from 'react-router-dom';
import data from "../../../data.json";
import ViewBtn from './ViewBtn';
import { useContextProvider } from '../../contextProvider/ContextProvider';

export default function ExplorePlaceItem({place,explore_item}) {
    const {id, title,img_url, rating,starting_price, duration, tagline} = place;
    const {array1, array2} = explore_item;

    const [openOptions, setOpenOptions] = useState(false);
    const updateOpenOptions = ()=>{
        setOpenOptions(!openOptions);
    };

    const {availability} = data;
    const {wasSuccessful,
     updateWasSuccessful} = useContextProvider();

    const initialDatesClicked = ()=>{
        const newArr = [];
        for(let i=0; i<availability.length; i++){
            newArr.push(false);
        }

        return newArr;
    }
    const [datesClicked, setDatesClicked] = useState(initialDatesClicked);

    const updateDatesClicked = (index)=>{
        const newArr = [];
        for(let i=0; i<availability.length;i++){
            newArr.push(false);
        }
        newArr[index]=true;
        setDatesClicked(newArr);
    };




    // useEffect(()=>{
    //     console.log(id,title)
    // },[]);

  return (
    <div className='w-[80%] md:w-full mx-auto shadow-lg'>

      <div className='grid gap-6 xl:grid-cols-[35%_auto_15%]'>

        {/*left images*/}
        <div className='h-[325px] w-full'>
            <img src={img_url} className='h-full w-full object-cover object-center' alt="" />
        </div>


        {/*middle showin some detailed info*/}
        <div className='grid gap-3 p-4 xl:pb-4'>
            
            <h1 className='text-[1.4rem] capitalize font-bold'>{title}</h1>

            <div className='flex gap-2'>
                {
                    Array(Math.floor(rating)).fill("").map((_,i)=>{
                        return (
                            <span className='text-xl text-yellow-500' key={i}>
                                <BsStarFill />
                            </span>
                        )
                    })
                }
                {
                    Array(Math.round(rating - Math.floor(rating))).fill("").map((_,i)=>{
                        return (
                            <span className='text-xl text-yellow-500' key={i}>
                                <BsStarHalf />
                            </span>
                        )
                    })
                }
            </div>

            <div className='text-fortery-bg-color'>

                <p className='flex items-center gap-2'>
                    <span className='text-xl text-secondary-bg-color'>
                        <BsCheckLg />
                    </span>
                    <span className='text-xl'>
                        Best price guaranteed
                    </span>
                </p>

            </div>

            {/*grid container*/}
            <div className=''>
                
                {/*left*/}

                <div className='divide-y-4 divide-transparent'>

                    {
                        array1.map((_,i)=>{
                            return (
                                <div key={i} className='grid
                                grid-cols-2'>
                                    
                                    <span className='text-fortery-bg-color '>
                                        {array1[i]}
                                    </span>

                                    <span>
                                        {array2[i]}
                                    </span>

                                </div>
                            )
                        })
                    }
                </div>

            </div>

            <div className='flex items-center gap-2'>
                <span className='text-xl text-secondary-bg-color'>
                    <BsCheckCircleFill />
                </span>
                <span className='text-lg text-secondary-card-color'>
                    Tour with flexible booking policy
                </span>
            </div>


        </div>

        {/*right showing starting_prices*/}
        <div className='grid gap-6 p-4 xl:p-0 xl:grid-rows-[max-content_max-content]'>
            
            <div className='grid grid-cols-2 gap-2'>

                {/*left*/}
                <div className='grid self-start grid-row-[max-content_max-content]'>
                    <span className='text-lg font-medium'>Duration</span>
                    <span className='text-2xl font-bold'>{duration}</span>
                </div>

                {/*right*/}
                <div className='grid self-start grid-row-2'>
                    <span className='text-lg font-medium'>From</span>
                    <span className='text-2xl font-bold'>NRs {starting_price}</span>
                </div>

            </div>
            
            {/*button*/}
                <button className='block bg-primary-bg-color py-3 text-xl text-center text-white h-max' onClick={updateOpenOptions}>
                    Check Availability
                </button>

                <div className={`relative ${openOptions?"block":"hidden"}`}>

                    <div className={`grid grid-cols-2 gap-4`}>
                        {
                            availability.map((date,i)=>{
                                return (
                                    <div key={i} className='cursor-pointer'  onClick={()=>{updateDatesClicked(i);}}>
                                        <ViewBtn clicked={datesClicked[i]} {...date} />
                                    </div>
                                )
                            })
                        }
                    </div>

                    <button onClick={datesClicked.some(date_item=>date_item==true)?updateWasSuccessful:()=>{}} className='p-2 my-2 border-[1px] rounded-sm border-primary-bg-color hover:bg-primary-bg-color hover:text-white'>
                        OK!
                    </button>


                </div>

        </div>

      </div>

    </div>
  )
}
