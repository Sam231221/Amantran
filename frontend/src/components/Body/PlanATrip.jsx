import React, { useState } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer/Footer'
import {MultiStepperForm} from "./exploreStepper/MultiStepperForm";
import SecondModal from '../multistepper/SecondModal';

export default function PlanATrip({color}) {

  return (
    <div className='p-0 m-0'>

        <Navbar color="black" />

        {/*explore section*/}
        <section className='mb-12'>

  
            {/*main body section*/}
            <div className=''>

              <MultiStepperForm />

              <SecondModal />

            </div>


        </section>

        <Footer />

    </div>
  )
}
