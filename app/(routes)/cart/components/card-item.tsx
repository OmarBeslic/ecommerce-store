import { Product } from "@/types"
import Image from "next/image"
import { toast } from "react-hot-toast"
import { X } from "lucide-react"

import IconButton from "@/components/ui/icon-button"
import Currency from "@/components/ui/currency"
import useCart from "@/hooks/use-cart"

interface CarditemProps {
  data: Product
}

const CardItem: React.FC<CarditemProps> = ({ data }) => {
  const cart = useCart()
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          src={data.images[0].url}
          alt={data.name}
          fill
          className="object-cover origin-center"
        />
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton icon={<X size={15} />} onClick={() => cart.removeItem(data.id)} />
        </div>
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div className="flex justify-between">
            <p className="text-lg font-semibold to-black whitespace-nowrap">
              {data.name}
            </p>
          </div>
          <div className="mt-1 flex text-sm">
            <p className="to-gray-500">{data.color?.name}</p>
            <p className="to-gray-500 ml-4 border-l border-gray-200 pl-4">{data.size?.name}</p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>

    </li>
  )
}

export default CardItem
