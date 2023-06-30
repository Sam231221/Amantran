import React from 'react'
import places_data from "../../data/places.json";
// import { useStepperContext } from '../contexts/StepperContextProvider';
import { useStepperContext } from '../../contextProvider/StepperContextProvider';

const Places = () => {
    const {showPlaces, userData} = useStepperContext();
    const {places} = places_data;
    console.log(userData);

    const recommended_places = places.filter((place)=>{
        const {nationality, religion, interest, transport} = place;

        return (
            nationality.toLowerCase()==userData.nationality.toLowerCase() &&
            religion.toLowerCase() == userData.religion.toLowerCase() && userData.interest.every((item)=>
            interest.includes(item.toLowerCase())) && userData.transport.every((item)=>transport.includes(item.toLowerCase()))
        )
    });

  return (

    <div>
        {
            showPlaces &&
            <div>
            
                {
                    recommended_places.length!=0?
                    
                    recommended_places.map((place,i)=>{
                        const {recommended_places} = place;

                        return (
                            <ul key={i}>
                                
                                {
                                    recommended_places.map((singleDestiny,i)=>{
                                        return(
                                            <li key={i}>
                                                {singleDestiny}
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    })
                    :
                    <h1>
                        Sorry, No places were found according to your choices
                    </h1>
                }
    
            </div>
        }

    </div>
  )
}

export default Places
