import Features from "@/components/Features";
import ProductsTab from "@/components/products/productsTab";
import { getFetch } from "@/utils/fetch";

export default async function Home() {
  const productsTab = await getFetch('/products/products-tabs');
  // console.log(productsTab);

  return (
    <>
      <Features />
      <ProductsTab tabList={productsTab.tabList} tabPanel={productsTab.tabPanel} />
    </>
  )
}
