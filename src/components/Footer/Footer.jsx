import React from 'react'
import data from "../../../data.json";

export default function Footer() {
    const {footer} = data;
  return (
    <div className=''>

        <div className='bg-slate-50 pt-6'>

            <div className='w-[80%] mx-auto flex gap-8'>

                <div>

                    <img src="../images/logo-black.png" alt="footer-logo" className='h-[3rem] min-w-[200px]' />

                    <p>Pokhara, Nepal</p>
                    <p>Tel: 061 77434</p>

                </div>


                <div className='grid grid-cols-2 gap-4 xl:grid-cols-4'>

                    {
                        footer.map((item,i)=>{
                            const {head, array} = item;

                            return (
                                <div key={i}>

                                    <h1 className='font-bold text-lg'>{head}</h1>

                                    <div>
                                        {
                                            array.map((arr_item,i)=>{
                                                return (
                                                    <p key={i}>{arr_item}</p>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>   
            </div> 

        </div>


        <div className='p-8 w-[80%] mx-auto flex justify-between'>
            <p>
                2023  Copyright  ALL Rights  Reserved By Amantran Pvt Ltd
            </p>

            <p>
                Amantran Pvt Ltd
            </p>
        </div>



    </div>
  )
}
