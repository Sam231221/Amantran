import React from 'react'
import {BsStarFill, BsStarHalf, BsCheckCircleFill, BsCheckLg} from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function ExplorePILoading() {
  return (
    <div className='w-[80%] md:w-full mx-auto shadow-lg'>

      <div className='grid gap-6 xl:grid-cols-[35%_auto_15%]'>

        {/*left images*/}
        <div className='h-[325px] w-full skeleton'>
            <img  className='h-full w-full object-cover object-center' alt="" />
        </div>


        {/*middle showin some detailed info*/}
        <div className='grid gap-3 p-4 xl:pb-4'>
            
            <h1 className='text-[1.4rem] capitalize font-bold'>{}</h1>

            <div className='flex gap-2'>
                {
                    Array(Math.floor(4)).fill("").map((_,i)=>{
                        return (
                            <span className='text-xl skeleton-star text-yellow-500' key={i}>
                                <BsStarFill />
                            </span>
                        )
                    })
                }
                {
                    Array(1).fill("").map((_,i)=>{
                        return (
                            <span className='text-xl skeleton-star text-yellow-500' key={i}>
                                <BsStarHalf />
                            </span>
                        )
                    })
                }
            </div>

            <div className='text-fortery-bg-color'>

                <p className='flex items-center gap-2 mb-2'>
                    <span className='text-xl text-secondary-bg-color skeleton-star'>
                        <BsCheckLg />
                    </span>
                    <span className='text-xl skeleton'>
                        Trip customizable
                    </span>
                </p>

                <p className='flex items-center gap-2'>
                    <span className='text-xl text-secondary-bg-color skeleton-star '>
                        <BsCheckLg />
                    </span>
                    <span className='text-xl skeleton'>
                        Best price guaranteed
                    </span>
                </p>

            </div>

            {/*grid container*/}
            <div className=''>
                
                {/*left*/}

                <div className='divide-y-4 divide-transparent'>

                    {/* {
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
                    } */}
                </div>

            </div>

            <div className='flex items-center gap-2'>
                <span className='text-xl text-secondary-bg-color skeleton-star'>
                    <BsCheckCircleFill />
                </span>
                <span className='text-lg skeleton'>
                    Tour with flexible booking policy
                </span>
            </div>


        </div>

        {/*right showing prices*/}
        <div className='grid gap-6 p-4 xl:p-0 xl:grid-rows-[max-content_max-content]'>
            
            <div className='grid grid-cols-2'>

                {/*left*/}
                <div className='grid self-start skeleton grid-row-[max-content_max-content]'>
                    <span className='text-xl font-medium'>Days</span>
                    <span className='text-2xl font-'>0000</span>
                </div>

                {/*right*/}
                <div className='grid self-start grid-row-2 skeleton'>
                    <span className='text-xl font-medium'>From</span>
                    <span className='text-2xl font-bold'>NRs 00000</span>
                </div>

            </div>
            
            {/*button*/}
            <Link to="" className='block bg-primary-bg-color py-3 text-xl text-center  h-max skeleton'>
                <button className=''>
                    View Tour
                </button>
            </Link>


        </div>

      </div>

    </div>
  )
}
