"use client"

import Container from "@/components/ui/Container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import CardItem from "./components/card-item";
import Summary from "./components/summary";

export default function CartPage() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold to-black">Shopping cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 gap-x-12 lg:items-start">
            <div className="lg:col-span-7">
              {!cart.items.length && <p className="text-neutral-500">Your cart is empty.</p>}
              <ul>
                {cart.items.map((item) => (
                  <CardItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  )
}