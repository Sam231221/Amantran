import React, {useEffect, useState} from 'react'
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const DistrictList = () => {
    const {provinceId, updateDistrictId, districtList, updateDistrictList, districtId, updateCityList} = useContextProvider();

    const [selectedLocation, setSelectedLocation] = useState({name: "Select District"});
    const [query , setQuery] = useState("");

    //return filtered locations
    const filteredLocations = query==""?districtList:districtList.filter((location)=>{
        return location.name.toLowerCase().includes(query.toLowerCase());
    });

    
  return (
    <div  className='basis-1/3 max-w-[255px] justify-self-center'>

        <Combobox defaultValue={selectedLocation} onChange={setSelectedLocation} as="div" className={`relative text-black`}>

          <div className='relative'>

            <Combobox.Input className={`w-full block p-2`} displayValue={(location)=>location.name} onChange={(e)=>setQuery(e.target.value)} />

            <Combobox.Button className={`absolute absolute top-1/4 right-0`}>
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </Combobox.Button>

          </div>

          <Combobox.Options className={`absolute z-10 w-full top-[115%] bg-white`}>

              {
                  filteredLocations.map((location)=>{
                      const {district_id, name, alt_name} = location;
                      return (
                          <Combobox.Option key={district_id} value={location} onClick={()=>{updateDistrictId(district_id);
                          }} className={({active})=>`cursor-pointer px-2 py-1 ${active?'bg-primary-bg-color text-white':""}`}>
                              {name}
                          </Combobox.Option>
                      )
                  })
              }
          </Combobox.Options>
          
        </Combobox>

    </div>
  )
}

export default DistrictList
