import getBillboard from "@/actions/bet-billboard";
import getproducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/Container";

export const revalidate = 0
const HomePage = async () => {
  const billboard = await getBillboard("abd07cce-1d85-4b48-8fc8-e189e138146f")
  const products = await getproducts({ isFeatured: true })

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-x-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
}

export default HomePage;