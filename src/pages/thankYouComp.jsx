import { useRouter } from "next/router";

export default function ThankYou({ setThankYou, productName, customerName }) {
    const router = useRouter()
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg text-center">
          <h1 className="text-3xl font-bold text-green-600">Thank You for Your Purchase, <span className="block text-blue-600">{customerName}!</span></h1>
          <p className="text-lg mt-4">
            Your order has been successfully placed.
          </p>
       
            <p className="text-md mt-2 text-gray-700">
              Your order number is: <span className="font-semibold">{Math.random()}</span>
            </p>
         
          {productName && (
            <p className="text-md mt-2 text-gray-700">
              You purchased: <span className="font-semibold">{productName}</span>
            </p>
          )}
         
          <div className="mt-6">
            <button
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }
  