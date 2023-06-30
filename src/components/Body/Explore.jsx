import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import SearchLocation from './searchLocation/SearchLocation'
import data from "../../../data.json";
import ExplorePlaceItem from './ExplorePlaceItem';
import ExplorePILoading from './ExplorePILoading';
import { useContextProvider } from '../../contextProvider/ContextProvider';

export default function Explore({color}) {
    const {explore_section} = data;
    const [priceSlided, setPriceSlided] = useState(10000);
    const [ratingSlided, setRatingSlided] = useState(0);
    const [ageSlided, setAgeSlided] = useState(5);
    const {isExploreItemsLoading, explorePlaces, filteredExplorePlaces}  = useContextProvider();

    const updatePriceSlided = (e)=>{
        setPriceSlided(e.target.value);
    };

    const updateRatingSlided = (e)=>{
        setRatingSlided(e.target.value);
    };

     const updateAgeSlided = (e)=>{
        setAgeSlided(e.target.value);
    };

    const guide_type = [
        "Group tours",
        "Small group tours",
        "Private tours"
    ];

    const type = [
        "Safari",
        "Boating",
        "Bunjee jumping",
        "Trekking"
    ]

  return (
    <div className='p-0 m-0'>

        <Navbar color="black" />

        {/*explore section*/}
        <section className='mb-12'>

            {/*top section*/}
            <div className='mx-auto p-16 py-24 xl:py-40 mb-12 xl:flex-row justify-between bg-[url("../images/kathmandu-temple 1.png")] text-white flex flex-col gap-6' style={{backgroundImage:"url('../images/kathmandu-temple 1.png')"}}>

                <SearchLocation />

            </div>

            
            {/*main body section*/}
            <div className='xl:grid xl:grid-cols-[20%_auto] xl:gap-8 xl:w-[95%] mx-auto'>

                {/*left container to be shown in large screens*/}
                {/*filter options here*/}
                <div className='border-[1px] shadow-lg border-gray-50 hidden xl:block'>
                    
                    <h1 className='text-2xl font-bold p-3'>Filter by</h1>

                    {/*guide type filter*/}
                    <div className='p-3'>

                        <h1 className='text-lg font-medium my-3'>Guide type</h1>

                        <div>

                            {guide_type.map((type,i)=>{
                                return (
                                    <div key={i} className='flex items-center'>
                                        
                                        <input type="checkbox" name="group_type" id={`group-type-${i}`} className='w-6 h-6' />

                                        <label className='text-lg pl-2' htmlFor={`group-type-${i}`}>
                                            {type}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*type filter*/}
                    <div className='p-3'>

                        <h1 className='text-lg font-medium my-3'>Guide type</h1>

                        <div>

                            {type.map((item,i)=>{
                                return (
                                    <div key={i} className='flex items-center'>
                                        
                                        <input type="checkbox" name="group_type" id={`group-type-${i}`} className='w-6 h-6' />

                                        <label className='text-lg pl-2' htmlFor={`group-type-${i}`}>
                                            {item}
                                        </label>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*rating*/}
                    <div className='p-3'>

                        <h1 className='text-lg font-medium my-3'>Rating</h1>

                        <div className='relative'>
                            <input type="range" className='w-full' value={ratingSlided} min={0} max={5} onChange={updateRatingSlided} />

                            <div className="flex justify-between">
                                <span className='text-lg'>0</span>
                                <span className='-translate-x-[3.5rem] text-lg'>5</span>
                            </div>
                        </div>
                    </div>

                    {/*price*/}
                    <div className='p-3'>

                        <h1 className='text-lg font-medium my-3'>Price</h1>

                        <div>
                            <input className='w-full' type="range" min={10000} max={1000000} value={priceSlided} onChange={updatePriceSlided} />

                            <div className="flex justify-between">
                                <span className='text-lg'>10000</span>
                                <span className='-translate-x-1/2 text-lg'>1000000</span>
                            </div>
                        </div>
                    </div>

                    {/*age*/}
                    <div className='p-3'>

                        <h1 className='text-lg font-medium my-3'>Age</h1>

                        <div>
                            <input className='w-full' type="range" min={5} max={99} value={ageSlided} onChange={updateAgeSlided} />

                            <div className="flex justify-between">
                                <span className='text-lg'>5</span>
                                <span className='-translate-x-1/2 text-lg'>99</span>
                            </div>
                        </div>
                    </div>


                </div>

                {/*right container showing places list*/}
                <div className={`md:grid ${filteredExplorePlaces.length!=0?"md:grid-cols-2":""}  xl:grid-cols-1 md:gap-6 md:w-[90%] xl:w-full mx-auto`}>

                    {
                        (isExploreItemsLoading)?
                        Array(11).fill("").map((_,i)=>{
                            return (
                                <ExplorePILoading key={i} />
                            )
                        })
                        :
                        <>
                        
                        {
                            filteredExplorePlaces.length!=0 ?

                            filteredExplorePlaces.map((placeInfo, i)=>{
                                return (
                                    <ExplorePlaceItem place={placeInfo} key={i} explore_item={explore_section[i]} />
                                )
                            })

                            :
                            <p className='text-center font-bold text-xl whitespace-nowrap'>
                                Sorry No Places were found according to your choices!!
                            </p>

                        }
                        
                        </>
                    }
                </div>

            </div>


        </section>

        <Footer />

    </div>
  )
}
