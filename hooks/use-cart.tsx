import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


interface CartProps {
  items: Product[]
  addItem: (data: Product) => void
  removeItem: (id: string) => void
  removeAll: () => void
}

export const useCart = create(
  persist<CartProps>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id === data.id)

        if (existingItem) {
          return toast("Item already in cart")
        }

        set(state => ({ items: [...state.items, data] }))
        toast.success("Item added to cart")
      },
      removeItem: (id: string) => {
        set(state => ({ items: [...state.items.filter(item => item.id !== id)] }))
        toast.success("Item removed from cart")
      },
      removeAll: () => {
        set({ items: [] })
        toast.success("All items removed from cart")
      }

    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    }
  )
)

export default useCart