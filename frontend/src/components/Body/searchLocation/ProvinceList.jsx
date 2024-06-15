import React, { useEffect, useState } from 'react'
import { Combobox } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const ProvinceList = () => {

    const {updateProvinceId,provinceId, districtId, updateDistrictId, provinceList, updateProvinceList, updateDistrictList} = useContextProvider();

    const [selectedLocation, setSelectedLocation] = useState({name: "Select Province"});
    const [query , setQuery] = useState("");

    //return filtered locations
    const filteredLocations = query==""?provinceList:provinceList.filter((location)=>{
        return location.name.toLowerCase().includes(query.toLowerCase());
    });

  return (
    <div className='basis-1/3 max-w-[255px] justify-self-center'>
        <Combobox as="div" className={`relative text-black`} defaultValue={selectedLocation} onChange={setSelectedLocation}>

          <div className='relative'>

            <Combobox.Input displayValue={(location)=>location.name} className={`w-full block rounded-sm p-2`} onChange={(e)=>setQuery(e.target.value)} />

            <Combobox.Button className={`absolute top-1/4 right-0`}>
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
            </Combobox.Button>

          </div>

          <Combobox.Options className={`absolute z-10 w-full top-[115%] bg-white`}>
            {
              filteredLocations.map((location)=>{
                    const {province_id, name, alt_name} = location;
                    return (
                      <Combobox.Option key={province_id} value={location} onClick={()=>{updateProvinceId(province_id);
                      }} className={({ active})=>`cursor-pointer text-black px-2 py-1 ${active?'bg-primary-bg-color text-white':""}`}>
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

export default ProvinceList
