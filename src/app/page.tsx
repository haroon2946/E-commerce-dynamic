





import ProductsPage from "./products/page";
import Hero from "@/components/hero";
import Brand from "@/components/brand";
import Product from "@/components/product";
import Benefit from "@/components/benefit";
import Touch from "@/components/touch";


export default function Home() {
  return (
    <>
      <Hero/>
      <Brand/>
      <ProductsPage />
      <Product/>
      <Benefit/>
      <Touch/>
    </>
  );
}