import MultiStepForm from "./MultiStepForm";
import { Dialog } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { useStepperContext } from "../../contextProvider/StepperContextProvider";

const Modal = () => {
  const { isOpen, updateIsOpen } = useStepperContext();

  useEffect(() => {
    setTimeout(() => {
      updateIsOpen();
    }, 3000);
  }, []);

  return (
    <Transition
      show={isOpen}
      leave="transition-all duration-100"
      enter="transition-all duration-200"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <Dialog
        as="div"
        className={`fixed z-0 left-0 top-0 w-screen h-screen`}
        open={isOpen}
        onClose={() => {
          updateIsOpen();
        }}
      >
        <Dialog.Panel
          className={`container max-w-[600px] mx-auto relative top-1/2 -translate-y-1/2`}
        >
          <Transition.Child
            enter="ease-out transition-all duration-[1s]"
            enterFrom="transform scale-0"
            enterTo="transform scale-100"
            leave="ease-in duration-[1s] transition-all"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-0"
          >
            <Dialog.Description as="div" className={``}>
              {/* multi step form */}
              <MultiStepForm />
            </Dialog.Description>
          </Transition.Child>
        </Dialog.Panel>
      </Dialog>
    </Transition>
  );
};

export default Modal;
