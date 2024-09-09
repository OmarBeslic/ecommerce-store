"use client"
import { Category } from "@/types"
import { usePathname } from "next/navigation"
import { Dialog, DialogPanel } from "@headlessui/react"
import { X } from "lucide-react"
import IconButton from "./icon-button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import useMobileNav from "@/hooks/use-mobile-nav"

interface MainNavProps {
  data: Category[]
}
const MobileNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname()
  const mobileNavStore = useMobileNav()
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`
  }))
  return (
    <Dialog open={mobileNavStore.open} onClose={mobileNavStore.onClose} as="div" className="relative z-40 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25" />
      <div className="fixed inset-0 z-40 flex">
        <DialogPanel className="relative mr-auto pl-10 w-full h-full sm:max-w-[260px] rounded flex flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl ">
          <div className="=flex items-center justify-end">
            <IconButton icon={<X size={15} />} onClick={mobileNavStore.onClose} />
          </div>
          <nav className="my-6  flex items-left flex-col gap-3">
            {
              routes.map(route => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-black",
                    route.active ? "text-black" : "text-neutral-500"
                  )}
                  onClick={mobileNavStore.onClose}
                >
                  {route.label}
                </Link>
              ))
            }
          </nav>
        </DialogPanel>


      </div>
    </Dialog>
  )
}

export default MobileNav