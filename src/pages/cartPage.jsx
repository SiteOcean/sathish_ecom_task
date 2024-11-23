import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Link from "next/link"
import { getContextData } from "@/store/contextData"
import ImageCarousel from "@/components/imageCarousel"
import Navbar from "@/components/navBar"

export default function CartPage() {

    const {cartData, addToCart, increaseQuantity, 
        decreaseQuantity, removeFromCart
    } = getContextData()
    const router = useRouter();
  

    if(cartData.length === 0){
        return <div className="capitalize"><Navbar/>
       <div className="flex justify-center items-center min-h-[90vh]">no more Products in cart</div> </div>
    }
  return (
   <div>
    <Navbar/>
    <div className="container mx-auto px-4 py-8" >
      <h2 className="text-2xl font-bold mb-6">Product Listing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {cartData.map((product) => (
    <div
      key={product.id}
      className="border rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 bg-white"
    >
      {/* Image Carousel */}
      <ImageCarousel images={product.images} />

      {/* Product Title */}
      <h3 className="text-xl font-semibold mt-4 text-gray-800">
        {product.title}
      </h3>

      {/* Product Description */}
      <p className="text-gray-600 text-sm mt-2 line-clamp-2">
        {product.description}
      </p>

      {/* Pricing & Actions */}
      <div className="mt-4 flex flex-wrap items-center justify-between space-y-2 sm:space-y-0">
        {/* Price */}
        <span className="text-xl font-bold text-gray-900">
          ${product.price}
        </span>

        {/* Add to Cart Button */}
        <button
          onClick={() => removeFromCart(product.id)}
          className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
        >
          Remove to Cart
        </button>

        {/* View Details Link */}
        <Link
          href={`/${product.title}?id=${product.id}`}
          className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
        >
          View 
        </Link>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center justify-between mt-4">
        <button
          onClick={() => decreaseQuantity(product.id)}
          className="px-3 py-1 bg-red-100 text-gray-600 font-bold rounded hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="text-gray-800 font-medium">{product.quantity}</span>
        <button
          onClick={() => increaseQuantity(product.id)}
          className="px-3 py-1 bg-green-100 text-gray-600 font-bold rounded hover:bg-green-600 transition"
        >
          +
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
   </div>
  );
}
