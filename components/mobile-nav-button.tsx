"use client"
import useMobileNav from "@/hooks/use-mobile-nav";
import { Menu } from "lucide-react";
import IconButton from "./ui/icon-button";


export default function MobileNavButton() {
  const mobileNavStore = useMobileNav()
  const openSideMenu = () => {
    mobileNavStore.onOpen()

    console.log(mobileNavStore.open)
  }

  return (
    <div className="flex items-center justify-end px-4 lg:hidden">
      <IconButton icon={<Menu size={15} />} onClick={openSideMenu} />
    </div>
  )
}
