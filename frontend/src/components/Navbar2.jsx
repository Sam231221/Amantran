import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";

const Navbar = ({color}) => {
    const [openSidebar, setOpenSidebar] = useState(false);

    const updateOpenSidebar = ()=>{
        setOpenSidebar(!openSidebar);
    };

  return (

        <div className={`sticky top-0 md:block bg-transparent text-white z-10`}>{/*this container is to be made sticky*/}
        <div className='flex gap-2 md:flex-row justify-between font-bold items-center px-4 whitespace-nowrap'>
            
            {/*logo company*/}
            <div className='min-w-[255px]'>
                
                {/* <img src="" alt="logo" />

                <h1 className=''>Amantran</h1> */}

                {
                    color=="white"?
                    <>
                    <img src="./images/Logo.png" className={`h-[3.5rem] hidden w-full md:block`} alt="" />
    
                    <img src="./images/logo-black.png" className={`h-[2rem] md:h-[3rem] w-full md:hidden`} alt="" />
                    
                    </>:
                    <>
                    <img src="./images/logo-black.png" className={`h-[3.5rem] w-full md:block`} alt="" />
    
                    {/* <img src="./images/Logo.png" className={`h-[2rem] md:h-[3rem] w-full md:hidden`} alt="" /> */}
                    </>
                }



            </div>                
                
            {/*links*/}

            <ul className={`flex flex-col md:flex-row items-center gap-3 md:bg-transparent fixed md:p-0 md:relative bg-white md:shadow-[unset] shadow-lg h-screen md:h-auto right-0 top-0 py-12 px-12 justify-items-start transform transition-all duration-200 ${openSidebar?"translate-x-0 md:translate-x-0":"translate-x-full md:translate-x-0"}`}>

                <li>
                    <Link className='p-1' to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link className='p-1' to="/">
                        About Us
                    </Link>
                </li>

      
                    <Link className='p-1' to="/explore">
                        Explore
                    </Link>
         

                <li>
                    <Link className='p-1' to="/">
                        Events
                    </Link>
                </li>

                <li>
                    <Link className='p-1' to="/planTrip">
                        Plan a Trip
                    </Link>
                </li>

                <li className='absolute top-3 text-2xl right-3 cursor-pointer md:hidden' onClick={updateOpenSidebar}>
                    <FaTimes />
                </li>

            </ul>

            {/*login sign up*/}
            <div className='divide-x-8 divide-transparent flex items-center'>

                <button className='p-2'>
                    Login
                </button>

                <button className='p-2 px-6 ml-4 border-2 cursor-pointer md:border-white' style={{border:"2px solid", borderRadius:"2rem"}}>
                    SignUp
                </button>

                <div className='md:hidden text-2xl cursor-pointer ml-2' onClick={updateOpenSidebar}>
                    <FaBars />
                </div>
                
            </div>


        </div>         
    </div>

    


  )
}

export default Navbar
