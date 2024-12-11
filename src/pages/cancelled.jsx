import { treeDatas } from "../../utils";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

import { MdOutlineAttachFile } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function UnderReview() {


  return (
    <div className="flex min-h-[100vh] bg-[#21212e]">
       <div className="w-[8%] flex justify-center pt-12 bg-[#13132e] relative border-r-2 border-sky-900">
       <img src="/Group 87.png" className="w-[50px] h-[50px]"/>
       <FaCircleChevronRight className="absolute top-[60px] bg-white rounded-full -right-2.5 text-[25px]"/>
       </div>
       
       <div className="flex-1 topNav">

      <div className="  px-7 pt-4">
        <div className="flex justify-between items-center"><div className="relative p-1 border border-sky-800 flex items-center gap-x-3 rounded-md"><GoSearch className="text-white"/><input className="relative bg-inherit" placeholder="Type Here"></input>
        
        </div>

        <div className="flex gap-x-3">
        <img src="/Group 5.png" className="w-[30px] h-[30px]"/>
        <img src="/user.png"  className="w-[30px] h-[30px]"/>
        </div></div>
       

       <div className="text-white mt-1 space-y-0">
        <p className="text-[12px] text-gray-400"> Pages  / Claims Processing</p>
        <h1 className="text-[23px] font-medium ">Claims Processing</h1>
       </div>

         </div>

          <div className="flex p-4 pl-5 bg-inherit  gap-x-3 text-gray-50">
          
            <div className="flex-1  border relative border-sky-900 rounded-xl  bg-gradient-to-b from-[#3f3f7e] via-[#16162b] to-[#16162b]">
         
            <div className="space-y-4 p-4 pl-5">
            <div className="flex items-center gap-x-7 text-[12.5px] text-gray-400">
              <p className="border-b-2 pb-1 border-sky-600">Pending <span className="p-1 bg-white rounded-sm text-black text-[9px] bg-opacity-60">20</span></p>
              <p>Claim Submitted <span className="px-1 py-0.5 bg-[#73aa73] rounded-sm text-[#3ee72e] text-[10px]  bg-opacity-60">2</span></p>
              <p>Under Review <span className="px-1 py-0.5 bg-[#725c2b] rounded-sm text-[#ffbf34] text-[10px] bg-opacity-60">3</span></p>
              <p>Cancelled <span className="px-1 py-0.5 bg-[#471212] rounded-sm text-[#ff3636] text-[10px] bg-opacity-45">2</span></p>
            </div>

               {/* input */}
               <input type="text" placeholder="Search" className="p-1 bg-inherit border border-gray-500 rounded-md w-[35%]" />
            </div>

           

       








            </div>

            

          </div>
         <div>
        
         </div>
      <div></div>
       </div>
    </div>
  );
}
