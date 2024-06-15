import { Dialog, Transition } from '@headlessui/react'
import React, { useContext,Fragment, useEffect } from 'react'
import { useStepperContext } from '../../contextProvider/StepperContextProvider';
import { Link } from 'react-router-dom';


export default function SecondModal() {
    const {openSecondModal, OSMFalse, updateShowPlaces, updateLocalStorage, userData} =useStepperContext();
    useEffect(()=>{
        console.log(openSecondModal);
    },[]);

    useEffect(()=>{
        console.log(openSecondModal);
    },[openSecondModal]);

  return (
<Transition show={openSecondModal}>

    <Dialog as="div" className={`fixed z-0 left-0 top-0 w-screen h-screen shadow-lg`} open={openSecondModal} onClose={OSMFalse}>
        

        <Transition.Child leave='transition-all duration-100' enter="transition-all duration-200" enterFrom='opacity-0' enterTo='opacity-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
            <div className='w-screen fixed h-screen bg-white bg-opacity-5'></div>
        </Transition.Child>

        <Transition.Child as={Fragment} leave='transition-all duration-300' enter="transition-all duration-300" enterFrom="transform scale-0" enterTo='transform scale-100' leaveFrom='transform scale-100' leaveTo="transform scale-0" >

            <Dialog.Panel as="div" className={`max-w-[600px] mx-auto bg-white w-max p-6 relative top-1/2 -translate-y-1/2`}>

                    <Dialog.Title className={`text-lg font-medium`}>
                        Thanks for submitting the form, we will contact you later soon for further process
                    </Dialog.Title>

                    <Dialog.Description className={`text-lg my-3`}>
                        Note: your details won't be shared with anyone
                    </Dialog.Description>

                    <Link to="/explore">

                        <button onClick={()=>{OSMFalse(); updateShowPlaces(); updateLocalStorage(userData)}} className='bg-blue-100 p-2 text-blue-600 text-lg'>
                            OK! Thanks
                        </button>

                    </Link>
            </Dialog.Panel>
        </Transition.Child>

    </Dialog>
</Transition>
  )
}
