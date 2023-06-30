import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import CarouselImage from '../components/CarouselImage'
import data from "../../data.json";
import Footer from '../components/Footer/Footer';
import StepperContextProvider from '../contextProvider/StepperContextProvider';
import SecondModal from '../components/multistepper/SecondModal';
import Modal from '../components/multistepper/Modal';
import Places from '../components/multistepper/Places';
import { useContextProvider } from '../contextProvider/ContextProvider';


export default function FirstPage() {
    const {posts, places_nearby, religious_cultural_sites} = data;

    const {placesNearby, religiousSites, filteredReligiousSites, getReligiousSitesByCityId} = useContextProvider();

  return (
    <div>
      
      <Navbar color="white" />

      <Hero />

      {/*stepper*/}
        <StepperContextProvider>
        
        <Places />

        <>
        
          <Modal />

          <SecondModal />

        </>

      </StepperContextProvider>

      {/*trusted section*/}

      <section className='w-[80%] mx-auto my-12'>

        <h1 className='font-bold text-center text-xl mb-8'>
            Trusted by the largest travel brands
        </h1>


        <div>

            <CarouselImage />

        </div>

        <div className="grid grid-cols-2 gap-2 md:grid-cols-3 xl:grid-cols-4 ">

            <div className='text-center divide-y-[0.85rem] divide-transparent p-2'>
                <div className='text-center'>
                    <img src="../images/first.png" className='mx-auto' alt="" />
                </div>

                <h1 className='font-bold  uppercase'>Best tours</h1>

                <p>A strict screening process ensures that we only offer the best tours and trip packages globally.</p>
            </div>

            <div className='text-center divide-y-[0.85rem] divide-transparent p-2'>
                <div className='text-center'>
                    <img src="../images/second.png" className='mx-auto' alt="" />
                </div>

                <h1 className='font-bold  uppercase'>Best price</h1>

                <p>A strict screening process ensures that we only offer the best tours and trip packages globally.</p>
            </div>

            <div className='text-center divide-y-[0.85rem] divide-transparent p-2'>
                <div className='text-center'>
                    <img src="../images/third.png" className='mx-auto' alt="" />
                </div>

                <h1 className='font-bold  uppercase'>sustainable tours</h1>

                <p>A strict screening process ensures that we only offer the best tours and trip packages globally.</p>
            </div>

            <div className='text-center divide-y-[0.85rem] divide-transparent p-2'>
                <div className='text-center'>
                    <img src="../images/fourth.png" className='mx-auto' alt="" />
                </div>

                <h1 className='font-bold  uppercase'>customers love us</h1>

                <p>A strict screening process ensures that we only offer the best tours and trip packages globally.</p>
            </div>

        </div>


      </section>

      {/*works section*/}
      <section className='w-[80%] mx-auto my-12'>

        <h1 className='font-bold text-3xl mb-8'>Place nearby you</h1>


        <div className='grid md:grid-cols-2 mx-auto gap-3 xl:grid-cols-3 justify-items-stretch'>
                {placesNearby.map((place,i)=>{
                    const {id, name, description, img_url} = place;
                    return(
                        <div key={id} className={`relative ${i==2?"md:col-start-1 xl:col-start-auto xl:col-end-auto md:col-end-3":""} h-[400px]`}>
                            
                            <img src={img_url} alt="place-nearby" className='w-full h-full object-cover object-center' />

                            <div className='absolute text-white top-[65%] left-[1rem]'>
                                <h1 className='font-extrabold text-[2rem] uppercase'>
                                    {name}
                                </h1>
                                <p className='text-xl capitalize'>
                                    {description.slice(0,25)}...
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
      </section>

        {/*religious and cultural sites*/}
      <section className='w-[80%] mx-auto my-12'>

      <h1 className='font-bold text-3xl mb-8'>Religious and cultural sites near you</h1>

        <div className='grid md:grid-cols-2 mx-auto gap-8 xl:grid-cols-3 justify-items-stretch'>
                {religiousSites.map((site,i)=>{
                    const {id, title, description, img_url, name} = site;
                    return(
                        <div key={id} className={`shadow-lg p-4`}>
                            
                            <div className='relative divide-y-8 divide-transparent'>

                                <img src={img_url} alt="place-nearby" className='w-full h-[400px] object-cover object-center pb-4' />

                                <div className='absolute text-white top-[75%] left-[2rem]'>
                                    <button className='bg-white text-black font-bold py-2 px-4 rounded-md'>
                                        {name}
                                    </button>
                                </div>

                            </div>

                            <div>
                                <h1 className='font-bold text-2xl pb-4'>
                                    {title}
                                </h1>
                                <p className='text-lg'>
                                    {description.slice(0,100)}...
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>

        
      </section>

      <section className='w-full'>

        <div className='mx-auto p-16 mb-12 py-20 xl:flex-row bg-[url("../images/kathmandu-temple 1.png")] text-white flex flex-col gap-6' style={{backgroundImage:"url('../images/kathmandu-temple 1.png')"}}>

            {/*left*/}

            <div>

                <div className='text-[1.75rem]'>
                    <span className='text-primary-bg-color font-bold pr-2'>
                        Sign Up 
                    </span>

                    <span>for Our NewsLetters</span>
                </div>

                <p>
                    Unlock discounts globally. Save up to 50% on tours and trips.
                </p>
                <p>
                    Get instant access to lower prices.
                </p>

            </div>

            {/*right*/}
            <div>
                
                <form className='flex '>
                    <input type="text" className='py-2 px-4 w-[50%] xl:w-[450px]' placeholder='Enter your Email Address' />
                    <button className='bg-primary-bg-color font-bold py-2 px-4 uppercase'>Subscribe</button>
                </form>
            </div>

        </div>
        <Footer />
      </section>

    </div>
  )
}
