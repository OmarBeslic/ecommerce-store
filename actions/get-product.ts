import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_URL}/products`;

const getProduct = async (id:String): Promise<Product> => {
  const res = await fetch(`${URL}/${id}`);
   return res.json();

}
export default getProduct