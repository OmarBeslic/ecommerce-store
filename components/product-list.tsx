import { Product } from "@/types";
import NoResults from "./ui/no-results";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string
  items: Product[]
}
const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold">{title}</h3>
      {
        Boolean(!items.length) && <NoResults />
      }
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
          items.map(item => {
            return (
              <ProductCard key={item.id} product={item} />
            )
          })
        }
      </div>
    </div>
  );
}

export default ProductList;