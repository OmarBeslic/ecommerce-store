import getProduct from "@/actions/get-product"
import getProducts from "@/actions/get-products"
import Gallery from "@/components/gallery"
import Info from "@/components/gallery/info"
import ProductList from "@/components/product-list"
import Container from "@/components/ui/Container"


interface ProductPageProps {
  params: {
    productId: string
  }
}
const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params?.productId)
  const allProducts = await getProducts({
    categoryId: product?.category?.id
  })
  const suggestedProducts = allProducts.filter((p) => p.id !== product?.id)
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
            <Gallery images={product?.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Similar Products" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}

export default ProductPage;