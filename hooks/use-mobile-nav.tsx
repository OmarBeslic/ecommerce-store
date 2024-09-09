import { create } from "zustand";


interface MobileNavProps {

  open: boolean
  onClose: () => void
  onOpen: () => void
}

export const useMobileNav = create<MobileNavProps>((set) => ({
  open: false,
  onClose: () => set({ open: false }),
  onOpen: () => set({ open: true }),
}))

export default useMobileNav