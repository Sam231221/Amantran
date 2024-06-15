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

    const [guideTypeSelected, setGuideTypeSelected] = useState([]);
    const [typeSelected, setTypeSelected] = useState([]);
    const [priceSlided, setPriceSlided] = useState(10000);
    const [ratingSlided, setRatingSlided] = useState(0);
    const [ageSlided, setAgeSlided] = useState(5);

    const updateTypeSelected = (value)=>{
        // if(typeSelected.length!=0){
            // const index = typeSelected.indexOf(value);
            // setTypeSelected(typeSelected.slice(index, index+1));
            // const array = [
            //     "hello",
            //     "hi",
            //     "bye"
            // ];
            // console.log(array.slice(1));
            // console.log(typeSelected.slice(index));
            if(typeSelected.includes(value)){
                const index = typeSelected.indexOf(value);
                const newArr = [...typeSelected.slice(0,index),...typeSelected.slice(index+1)];
                setTypeSelected(newArr);
            }
            else{
                setTypeSelected(typeSelected.push(value));
            }
        // }
        console.log(value, typeof value), Array.isArray(typeSelected);
    };

    const updateGuideTypeSelected = (value)=>{
        // if(guideTypeSelected.length!=0){
            if(guideTypeSelected.includes(value)){
                const index = guideTypeSelected.indexOf(value);
                const newArr = [...guideTypeSelected.slice(0,index),...guideTypeSelected.slice(index+1)];

                // console.log(guideTypeSelected.slice(index, index+1));
                setGuideTypeSelected(newArr);
            }
            else{
                console.log(guideTypeSelected.push(value));
                setGuideTypeSelected(guideTypeSelected.push(value));
            }
        // }
    };

    const test = ()=>{
        const array = [
            "hello",
            "hi",
            "bye",
        ];

        console.log(array.includes("hello"));
        console.log(array.includes("hehe"))

    }

    useEffect(()=>{
        test();

    },[]);

    
    const filterEPByType = ()=>{
        const filteredPlaces = explorePlaces.filter((place)=>{
            const {type} = place;
            return 
        })
    };

    const filterEPByGuideType = ()=>{
        const filteredPlaces = explorePlaces.filter((place)=>{
            const {guide_type} = place;
            return 
        })
    };

    const filterEPByAge = ()=>{

    };

    const filterEPByPrice = ()=>{

    };

    const filterEPByRating = ()=>{

    };
    
    const filterEPBySideFilters = ()=>{
        const filteredPlaces = explorePlaces.filter((place)=>{
            const {guide_type} = place;
            return 
        })
    };

    useEffect(()=>{

        console.log(guideTypeSelected, typeSelected, ratingSlided, priceSlided, ageSlided);

    },[guideTypeSelected, typeSelected, ratingSlided, ageSlided, priceSlided]);

    const updatePriceSlided = (e)=>{
        setPriceSlided(e.target.value);
    };

    const updateRatingSlided = (e)=>{
        setRatingSlided(e.target.value);
    };

     const updateAgeSlided = (e)=>{
        setAgeSlided(e.target.value);
    };

    
    useEffect(()=>{
        getPlacesNearby("https://amantran.up.railway.app/api/locations/");
        getReligiousSites("https://amantran.up.railway.app/api/sites/");
        getExplorePlaces("https://amantran.up.railway.app/api/plans/");

    },[]);

    const [wasSuccessful, setWasSuccessful] = useState(false);
    const updateWasSuccessful = ()=>{
        setWasSuccessful(true);
        setTimeout(()=>{
            setWasSuccessful(false);
        },4000);

        setTimeout(()=>{
            location.reload();
        },4000);
    };
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
     filteredExplorePlaces,
     priceSlided,
     typeSelected,
     ratingSlided,
     ageSlided,
     updatePriceSlided,
     updateRatingSlided,
     updateAgeSlided,
     updateTypeSelected,
     updateGuideTypeSelected,
     wasSuccessful,
     updateWasSuccessful
     }}>
        {children}
    </amantranContext.Provider>
  )
}

export const useContextProvider = ()=>{
  return useContext(amantranContext)
};
