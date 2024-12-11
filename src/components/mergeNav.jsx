import React, { Children } from 'react';
import { FaCircleChevronRight } from 'react-icons/fa6';

export default function MergeNav ({children}){

    return( <div className="space-y-[60px] bg-[#cecee7] flex">
        <div className="flex min-h-[100vh] bg-[#21212e]">
          <div className="w-[20%] flex justify-center pt-12 bg-[#13132e] relative border-r-2 border-sky-700">
          <img src="/Group 87.png" className="w-[50px] h-[50px]"/>
          <FaCircleChevronRight className="absolute top-[60px] bg-white rounded-full -right-2.5 text-[25px]"/>
          </div>
          </div>

          {/*  */}
          <div className='w-[80%] overflow-hidden'>{children}</div>
          </div>
    )

}