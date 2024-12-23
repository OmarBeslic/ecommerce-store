"use client"

import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { Fragment } from "react"
import IconButton from "./icon-button"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children
}) => {
  return (
    <Transition show={isOpen} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />
        <div className="fixed overflow-auto inset-0">
          <div className="flex items-center justify-center min-h-full text-center p-4">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">

              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg  text-left align-middle ">
                <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:pt-8 md:p-6 lg:p-8" >
                  <div className="absolute right-4 top-4">
                    <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>

          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default Modal;