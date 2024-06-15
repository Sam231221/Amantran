import React, { useEffect, useState } from 'react'
import ProvinceList from './ProvinceList';
import DistrictList from './DistrictList';
import CityList from './CityList';
import { useContextProvider } from '../../../contextProvider/ContextProvider';

const SearchLocation = () => {
  const {provinceId, districtId, cityId, provinceList, districtList, cityList, updateFEPByPDC} = useContextProvider();

  const [provinceSelected, setProvinceSelected] = useState("");
  const [districtSelected, setDistrictSelected] = useState("");
  const [citySelected, setCitySelected] = useState("");

  useEffect(()=>{
    if(provinceId!=null && cityId!=null && districtId!=null){

      const [{name:provinceChoosed}] = provinceList.filter((province)=>province.province_id==provinceId);
      setProvinceSelected(provinceChoosed);

      const [{name:districtChoosed}] = districtList.filter((district)=>district.district_id==districtId);
      setDistrictSelected(districtChoosed);

      const [{name:cityChoosed}] = cityList.filter((city)=>city.city_id==cityId);
      setCitySelected(cityChoosed);
      // console.log(provinceList[provinceId-1], districtList[districtId-1], cityList[cityId-1])
    }
    console.log((provinceSelected));
    console.log(provinceId, districtId, cityId);
    console.log(provinceList,districtList, cityList);
  },[provinceId, cityId, districtId]);

  const search= ()=>{
    if(provinceSelected!="" && districtSelected!="" && citySelected!=""){

      updateFEPByPDC({province:provinceSelected, district:districtSelected, city:citySelected});
      
      console.log("Searching with values"+ provinceSelected + " " + districtSelected + " " + citySelected);
    }
  }


  return (
    <div className='flex flex-col md:flex-row justify-items-center gap-4 justify-around w-full max-w-[1000px] mx-auto'>
      
      <ProvinceList />

      <DistrictList />

      <CityList />

      <div>
        <button className='bg-primary-bg-color text-white py-2 px-5 rounded-[0.2rem]' onClick={search}>Search</button>
      </div>

    </div>
  )
}

export default SearchLocation
