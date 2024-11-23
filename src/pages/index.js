import localFont from "next/font/local";
import Navbar from "@/components/navBar";
import ProductList from "@/components/productListing";


export default function Home() {
  return (
    <div>
      <Navbar/>
      <ProductList/>
    </div>
  );
}
