import { useEffect, useState } from "react"
import Loader from "./loader"
import ImageCarousel from "./imageCarousel"
import { getContextData } from "@/store/contextData"
import { useRouter } from "next/router"
import Link from "next/link"

export default function ProductList() {

    const [products, setProducts] = useState(null)
    const {cartData, addToCart} = getContextData()
    const router = useRouter();
    const fetchProducts=async()=>{
        let products = await fetch("https://dummyjson.com/products")
        let jsonData = await products.json()
        setProducts(jsonData.products)
        
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    if(!products){
        return <Loader/>
    }
    console.log(cartData)
  return (
    <div className="container mx-auto px-4 py-8" >
      <h2 className="text-2xl font-bold mb-6">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg shadow-sm hover:shadow-md transition-shadow p-4"
          >
            <ImageCarousel images={product.images}/>
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-gray-600 text-sm">{product.description}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">${product.price}</span>
              <button onClick={()=>addToCart(product)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
              </button>
              <Link href={`/${product.title}?id=${product.id}`} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                View
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
