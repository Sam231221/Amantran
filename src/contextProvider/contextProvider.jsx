import { createContext , useContext, useState, useEffect } from "react";

const amantranContext = createContext(null);

import React from 'react'

export default function ContextProvider({children}) {
    //all context for the app here

    //hero and navbar


    //context for explore page stepper
     const [tripPlanArr, setTripPlanArr] = useState([]);

    const add = (obj)=>{
        const {index, value}= obj;
        const newArr = [...tripPlanArr];
        newArr[index] = value;
        setTripPlanArr(newArr);
    };

    const remove = ()=>{
        setTripPlanArr(arr=>arr.pop());
    };

    //contexts for explore section search functionality
    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    const [cityId, setCityId] = useState(null);
    
    //lists
    const [provinceList, setProvinceList] = useState([]);
    const updateProvinceList = (list) =>{
        setProvinceList(list);
    };

    const [districtList, setDistrictList] = useState([]);
    const updateDistrictList = (list)=>{
        setDistrictList(list);
    };

    const [cityList, setCityList] = useState([]);
    const updateCityList =(list)=>{
        setCityList(list);
    };

    const updateProvinceId = (id)=>{
        setProvinceId(id);
        // console.log("province id", id);
    };

    const updateDistrictId = (id)=>{
        setDistrictId(id);
        // console.log("district id", id);
    };

    const updateCityId = (id)=>{
        setCityId(id);
        // console.log("city id", id);
    };

    //get province list
    const getProvinces = async ()=>{
        const response = await fetch('https://nepallocation.com.np/api/v1/province/list', {
          method: 'get',
          headers: new Headers({ 
             'Authorization': 'Bearer ' + 'Y3etD88-6lerz-wVJNVr75Rd'
     ,
             'Content-Type': 'application/json'
          }),
        });

        const message = await response.json();
        const province_list = await message.data.data;
        // console.log(message);
        // console.log(province_list, Array.isArray(province_list));
        // return province_list;
        updateProvinceList(province_list);
    };

        //get district
    const getDistricts = async (id)=>{
        const response = await fetch(`https://nepallocation.com.np/api/v1/province/${id}/district`, {
          method: 'get',
          headers: new Headers({ 
             'Authorization': 'Bearer ' + 'Y3etD88-6lerz-wVJNVr75Rd'
     ,
             'Content-Type': 'application/json'
          }),
        });
        const message = await response.json();
        const district_list = await message.data;
        updateDistrictList(district_list);
        // setSelectedLocation(district_list[0]);
        // console.log(message, district_list);
    };

    useEffect(()=>{
      if(provinceId!=null){
          getDistricts(provinceId);
      }
    },[provinceId]);

    useEffect(()=>{
        getProvinces();
        // console.log(selectedLocation);
        // console.log(provinceList);
    },[]);

    //when provinceId changes reset the default value for combobox
   //get city
    const getCities = async (id)=>{
        const response = await fetch(`https://nepallocation.com.np/api/v1/district/${id}/cities`, {
            method: 'get',
            headers: new Headers({ 
                'Authorization': 'Bearer ' + 'Y3etD88-6lerz-wVJNVr75Rd'
        ,
                'Content-Type': 'application/json'
            }),
        });
        const message = await response.json();
        const city_list = await message.data;
        console.log(message, city_list);
        updateCityList(city_list);
        // setSelectedLocation(city_list[0]);
        // return district_list;
    };

    useEffect(()=>{
        if(districtId!=null){
            getCities(districtId);
        }
        else{
            updateCityList([]);
        }
    },[districtId]);

    //places nearby you section 
    const [placesNearby, setPlacesNearby] = useState([]);
    const getPlacesNearby = async (url)=>{
        try{
            const response = await fetch(url);
            const places = await response.json();
            const filteredPlaceExceptPokhara = places.filter((place)=>place.name.toLowerCase()!="pokhara");
            setPlacesNearby(filteredPlaceExceptPokhara);
            console.log(places);
        }
        catch(error){
            console.log(error + " occurred !!!");
        }
    };

    
    //religious sites near you
    const [religiousSites, setReligiousSites] = useState([]);
    const getReligiousSites = async (url)=>{
        try{
            const response = await fetch(url);
            const places = await response.json();
            const filteredPlaces = places.filter((place)=>{
                const {site_type} = place;
                return site_type.length!=0 && site_type.some((item)=>item.title.toLowerCase()=="religious"||item.title.toLowerCase()=="cultural")
            });

            const filteredForPkr = filteredPlaces.filter((place)=>place.location==1);

            setReligiousSites(filteredForPkr);
            console.log(places);
        }
        catch(error){
            console.log(error + " occurred !!!");
        }
    };

    useEffect(()=>{
        console.log(religiousSites);
    },[religiousSites]);

    const [filteredReligiousSites, setFilteredReligiousSites] = useState([]);
    const getReligiousSitesByCityId = (id)=>{
        const newSites = religiousSites.filter((site,i)=>{
            return site.location_id == id;
        });
        if(newSites.length!=0)
        setFilteredReligiousSites(newSites);
    };

    //explore page data items for each placeitem component
    const [explorePlaces, setExplorePlaces] = useState([]);
    const [filteredExplorePlaces, setFilteredExplorePlaces] = useState([]);
    const [isExploreItemsLoading, setIsExploreItemsLoading] = useState(true);
    const getExplorePlaces = async (url)=>{
        try{
            const response = await fetch(url);
            const places = await response.json();
            setExplorePlaces(places);
            setFilteredExplorePlaces(places);
            setIsExploreItemsLoading(false);
            console.log(places);
        }
        catch(error){
            setIsExploreItemsLoading(true);
            console.log(error + " occurred !!!");
        }
    };

    //update filteredExplorePlaces by province, district and city
    const updateFEPByPDC = ({province, district, city})=>{
        const filteredPlaces = explorePlaces.filter((place)=>{
            return place.province.toLowerCase()==province.toLowerCase() && place.district.toLowerCase()==district.toLowerCase() && place.city.toLowerCase() == city.toLowerCase();
        });

        setFilteredExplorePlaces(filteredPlaces);
    };

    useEffect(()=>{
        console.log(filteredExplorePlaces);
    },[filteredExplorePlaces]);
    
    useEffect(()=>{
        getPlacesNearby("https://amantran.up.railway.app/api/locations/");
        getReligiousSites("https://amantran.up.railway.app/api/sites/");
        getExplorePlaces("https://amantran.up.railway.app/api/plans/");

    },[]);

  return (

    <amantranContext.Provider value={{add, remove, tripPlanArr,provinceId,
     districtId,
     cityId, 
     updateCityId, 
     updateDistrictId,
     updateProvinceId,
     provinceList,
     updateProvinceList,
     districtList,
     updateDistrictList,
     cityList,
     updateCityList,
     getCities,
     getDistricts,
     getProvinces,
     placesNearby,
     religiousSites,
     filteredReligiousSites,
     getReligiousSitesByCityId,
     explorePlaces,
     isExploreItemsLoading,
     updateFEPByPDC,
     filteredExplorePlaces
     }}>
        {children}
    </amantranContext.Provider>
  )
}

export const useContextProvider = ()=>{
  return useContext(amantranContext)
};
