import React, { useEffect } from 'react'
import {BsStarFill, BsStarHalf, BsCheckCircleFill, BsCheckLg} from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function ExplorePlaceItem({place,explore_item}) {
    const {id, title,img_url, rating,starting_price, duration, tagline} = place;
    const {array1, array2} = explore_item;


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
                        Trip customizable
                    </span>
                </p>

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
            
            <div className='grid grid-cols-2'>

                {/*left*/}
                <div className='grid self-start grid-row-[max-content_max-content]'>
                    <span className='text-xl font-medium'>Duration</span>
                    <span className='text-2xl font-bold'>{duration}</span>
                </div>

                {/*right*/}
                <div className='grid self-start grid-row-2'>
                    <span className='text-xl font-medium'>From</span>
                    <span className='text-2xl font-bold'>NRs {starting_price}</span>
                </div>

            </div>
            
            {/*button*/}
            <Link to="" className='block bg-primary-bg-color py-3 text-xl text-center text-white h-max'>
                <button className=''>
                    View Tour
                </button>
            </Link>


        </div>

      </div>

    </div>
  )
}
