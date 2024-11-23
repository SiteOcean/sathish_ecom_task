import Loader from "@/components/loader";
import Navbar from "@/components/navBar";
import { getContextData } from "@/store/contextData";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {

    const router = useRouter()
    const { productName, id } = router.query;
    const {cartData, addToCart, setOrder} = getContextData()
    
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        if(!id) return;

        fetch('https://dummyjson.com/products/'+id)
        .then(res => res.json())
        .then(data => setProduct(data));
            
    },[id])

        if(!product){
            return <Loader/>
        }

        const handelOrder=()=>{
            setOrder(product)
            router.push('/getCustomerDetails')
        }
    return (
    <div>  
        <Navbar/>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 md:mt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
      {/* Product Image */}
      <div>
    
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-80 object-cover rounded-md"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">
            ${product.price}
          </p>
        </div>
        <div className="flex gap-4 mt-6">
          <button onClick={()=>addToCart(product)} className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Add to Cart
          </button>
          <button onClick={handelOrder} className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div></div>
    );
  }
  