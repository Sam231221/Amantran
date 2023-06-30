import React, { useState } from 'react'


const List = (props) => {
    //update2ndId will only be used for province list


  return (
    <div>
      
      <Combobox value={name} >

        <Combobox.Input onChange={(e)=>setQuery(e.target.value)} />

        <Combobox.Options>

            {
                filteredLocations.map((location)=>{
                    const {} = location;
                    return (
                        <Combobox.Option key={}>

                        </Combobox.Option>
                    )
                })
            }
        </Combobox.Options>
        
      </Combobox>
    </div>
  )
}

export default List
