import { useContext, useState, Fragment } from 'react';
import React  from 'react'
import { StepperContext } from '../../contextProvider/StepperContextProvider';
import { Listbox, Transition } from '@headlessui/react';
import {FaAngleDown, FaCheck} from "react-icons/fa";
import { Btn } from './Btn';

const ReligionInterest = () => {
const {addUserData,finalData, userData} =useContext(StepperContext);

  const options = [
  {id:1, name:"Select religion"},
  {id:2, name: "hinduism"},
  {id:3, name: "buddhism"},
  {id:4, name: "christianity"},
  ];

  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div>

      {/*select religion*/}
      <div>
        <div className='flex gap-3 font-medium items-center text-xl'>Your religion is: 

          <Listbox as="span" value={selectedOption} className="relative" name="nationality" onChange={setSelectedOption}>

          <Listbox.Button className={`flex text-xl capitalize items-center gap-2 p-2`}>
            
            <span>
              {userData.religion==""?selectedOption.name:userData.religion}
            </span>

            <span>
              <FaAngleDown />
            </span>
          </Listbox.Button>

          <Transition as={Fragment} leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">

            <Listbox.Options className={`absolute left-0 bg-white`}>

              {/*remember to use () parenthesis instead of {}braces after => in .map functions in headlessui*/}
              {
                options.map(option=>(
                    <Listbox.Option key={option.id} className={({active})=>`${active?"bg-primary-bg-color text-white":""} capitalize cursor-pointer p-2 whitespace-nowrap text-xl`} onClick={(e)=>{
                    if(option.name!="Select religion"){
                      addUserData("religion", option.name);
                    }
                    else{
                      addUserData("religion", "");
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

      {/*select interest*/}
      <div className='mt-3 divide-y-8 divide-transparent'>
        
        <h1 className='text-xl'>You are interesting in which of the following activities:-</h1>

        <div className='flex gap-4 flex-wrap'>

          <Btn property={"interest"} value={"Sky diving"} />

          <Btn property={"interest"} value={"Bunjee jumping"} />
          <Btn property={"interest"} value={"Boating"} />
          <Btn property={"interest"} value={"Paraglyding"} />

        </div>
      </div>
    </div>
  )
}

export default ReligionInterest
