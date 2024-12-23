"use client";
import { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSearchParams } from "next/navigation";
import Button from "@/components/ui/Button";
import Currency from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";

const Summary = () => {
  const items = useCart(state => state.items);
  const removeAll = useCart(state => state.removeAll);
  const searchParams = useSearchParams();
  const totalPrice = items.reduce((total, item) => total + Number(item.price), 0);

  const onCheckout = async () => {
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_URL}/checkout`, {
        productIds: items.map(item => item.id),
      });
      window.location = res.data.url
    } catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Order placed successfully");
      removeAll();
    }

    if (searchParams.get("canceled")) {
      toast.error("Something went wrong");
    }
  }, [searchParams, removeAll]);

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>
      <div className="mt-6 space-y-4">

        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-bse font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button
        onClick={onCheckout}
        className="mt-6 w-full"
        disabled={items.length === 0}
      >
        Checkout
      </Button>
    </div>
  );
}

export default Summary;