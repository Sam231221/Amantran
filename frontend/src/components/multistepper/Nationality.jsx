import React, { Fragment, useEffect, useState } from 'react';
import { useContext } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import {FaAngleDown, FaCheck} from "react-icons/fa";
import { StepperContext } from '../../contextProvider/StepperContextProvider';

const Nationality = () => {
  const {userData, finalData, setUserData, addUserData} = useContext(StepperContext);

  const options = [
    {id:1, name:"Select nationality"},
    {id:2, name: "Nepali"},
    {id:3, name: "Other"},
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  useEffect(()=>{
    console.log(selectedOption);
  },[])

  return (
    <div>
      
      <h1 className='text-5xl font-medium mb-6'>Hi, there!</h1>

      <div className='flex items-center'>

        <span className='text-xl pr-3'>
          Are you a 
        </span>

        <Listbox as="span" value={selectedOption} className="relative" name="nationality" onChange={setSelectedOption}>

          <Listbox.Button className={`flex text-xl items-center gap-2 p-2`}>
            
            <span>
              {userData.nationality==""?selectedOption.name:userData.nationality}
            </span>

            <span>
              <FaAngleDown />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">

            <Listbox.Options className={`absolute left-0`}>

              {
                options.map(option=>(
                  // const {id,name} = option;
                    <Listbox.Option key={option.id} className={({active})=>`${active?"bg-primary-bg-color text-white":""} cursor-pointer p-2 whitespace-nowrap text-xl`} onClick={(e)=>{
                    if(option.name!="Select nationality"){
                      addUserData("nationality", option.name);
                    }
                    else{
                      addUserData("nationality", "");
                    }
                  }} value={option}>
                      {
                        ({selected})=>(
                          <>

                          <span>
                            {option.name}
                          </span>

                          </>
                        )
                      }
                    </Listbox.Option>
                ))
              }
            </Listbox.Options>

          </Transition>


        </Listbox>

      </div>

    </div>
  )
}

export default Nationality
