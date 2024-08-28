"use client"

import Button from "@/components/ui/Button"
import IconButton from "@/components/ui/icon-button"
import { Color, Size } from "@/types"
import { Dialog, DialogPanel } from "@headlessui/react"
import { Plus, X } from "lucide-react"
import { useState } from "react"
import FilterComponent from "./filter"

interface MobileFiltersProps {
  colors: Color[]
  sizes: Size[]
}
const MobileFilters: React.FC<MobileFiltersProps> = ({
  colors,
  sizes
}) => {
  const [open, setOpen] = useState(false)
  const onOpen = () => setOpen(true)
  const onClose = () => setOpen(false)
  return (
    <>

      <Button className="flex items-center gap-x-2 lg:hidden" onClick={onOpen}>Filters <Plus size={20} /></Button>
      <Dialog open={open} onClose={onClose} as="div" className="relative z-40 lg:hidden">
        <div className="fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto w-full h-full max-w-sm rounded flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl ">
            <div className="=flex items-center justify-end px-4">
              <IconButton icon={<X size={15} />} onClick={onClose} />
            </div>
            <div className="p-4">
              <FilterComponent valueKey="sizeId" name="Sizes" data={sizes} />
              <FilterComponent valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>


        </div>
      </Dialog>
    </>
  )
}

export default MobileFilters