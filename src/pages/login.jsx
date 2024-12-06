import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const router = useRouter()
  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
    router.push('/homePage')
  };

  return (
    <div  className=" p-2 py-5 login">
        <div className="w-[90%] md:w-[80%] mx-auto min-h-screen flex flex-col gap-y-9 md:flex-row md:items-center justify-end ">

    <div className="flex-1 text-white">
        <img src="/GroupStar.png" alt="" className="w-[70px] h-[70px]" />
    <h1 className="text-[35px] font-bold">Revolutionizing <br />
            Revenue Cycle Management <br />
            with AI
                </h1>

            <p className="text-[12px]">Streamlining claims, accelerating approvals, <br />
            and maximizing financial performance with precision and efficiency.</p>
    </div>


      <div className="md:w-[30%] bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-[30px] ">RCM ++</h1>
        <p className="text-[12px]">Revenue cycle management</p>
        <form className="mt-6" onSubmit={handleLogin}>
        <h2 className="text-[16px] font-semibold mb-2 text-gray-700 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">welcome to RCM</h2>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-100 py-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label htmlFor="password" className="block font-bold text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full  mt-2 py-1 bg-gray-100 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between mb-4 text-[14px]">
            <label className="flex items-center text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-2"
              />
              Remember Me
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Need Help?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 text-white font-bold rounded-md bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Click Me To Go HomePage
          </button>
        </form>

        {/* Reset Password */}
        <div className="mt-6 mb-2 text-center">
          <p className="text-sm text-gray-600">
            Forgot your credentials?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Reset Password
            </a>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
