import { treeDatas } from "../../utils";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

import { MdOutlineAttachFile } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";

export default function HomePage() {
  
  return (
    <div className="flex min-h-[100vh] bg-[#21212e">
       <div className="w-[8%] flex justify-center pt-12 bg-[#21212e] relative border-r-2 border-sky-700">
       <img src="/Group 87.png" className="w-[50px] h-[50px]"/>
       <FaCircleChevronRight className="absolute top-[60px] bg-white rounded-full -right-2.5 text-[25px]"/>
       </div>
       
       <div className="flex-1 topNav">

      <div className="  px-7 py-12">
        <div className="flex justify-between items-center"><div className="relative p-2 border border-sky-800 flex items-center gap-x-3 rounded-md"><GoSearch className="text-white"/><input className="relative bg-inherit" placeholder="Type Here"></input>
        
        </div>

        <div className="flex gap-x-3">
        <img src="/Group 5.png" className="w-[30px] h-[30px]"/>
        <img src="/user.png"  className="w-[30px] h-[30px]"/>
        </div></div>
       

       <div className="text-white mt-5 space-y-2">
        <p className="text-[12px] text-gray-400"> Pages  / Simplified Rules</p>
        <h1 className="text-[30px] font-medium ">Contract Management</h1>
       </div>

         </div>

          <div className="flex p-5 bg-inherit  gap-x-3 text-gray-50">
            <div className="w-[300px] space-y-6 border p-3 border-sky-700 rounded-2xl  bg-gradient-to-b from-[#3f3f7e] via-[#16162b] to-[#16162b]">
              <div>
              <h1 className="text-[21px]">Generate Rules</h1>
              <p className="text-[12px] text-gray-400">Generate a rules document to outline guidelines and procedures.</p>
              </div>

             <div className="space-y-2"> 
              <div>
              <h1 className="text-[19px]">Select Payer</h1>
              <p className="text-[12px] text-gray-400">Please select your payer from the list to proceed.</p>
              </div>

                <div className="p-2 border border-sky-600 bg-inherit rounded-md"><select className="bg-inherit outline-none w-full">
                  <option>Daman insurance</option>
                  </select>
                  </div>
                  </div>

              <div className="space-y-2"> 
              <div>
              <h1 className="text-[19px]">Type of Contract</h1>
              <p className="text-[12px] text-gray-400">Please select type of contract</p>
              </div>

                <div className="p-2 border border-sky-600 bg-inherit rounded-md"><select className="bg-inherit outline-none w-full">
                  <option>Contract Type</option>
                  </select>
                  </div>
                    </div>

                    <div className="space-y-2"> 
              <div>
              <h1 className="text-[19px]">Upload Document</h1>
              <p className="text-[12px] text-gray-400">Upload the document containing the rules and guidelines for reference.</p>
              </div>

                <div className="vector h-[90px] flex items-end">
                <div class="relative bg-black w-full max-w-sm border-2 py-1 border-dotted rounded-lg border-sky-600">
                <input 
                  type="file" 
                  id="file-upload" 
                  class="hidden" 
                  onchange="handleFileName(this)" 
                />
                
                <label 
                  for="file-upload" 
                  class="flex items-center  gap-x-2  cursor-pointer  text-white px-4 py-2 rounded-md "
                >
                  <MdOutlineAttachFile className="text-sky-600"/>
                  <span id="file-label" className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Upload File Here</span>
                </label>
              </div>
                  </div>
                    </div>

              <div className="border rounded-md p-2 space-y-1 bg-black border-gray-400">

              <div className="flex items-center gap-x-3 text-[14px] text-gray-200">
                  <img src="/Group 88.png" className="w-[15px] h-[15px]"/>
                  <p>Daman Billing.pdf</p>
                </div>

                <div className="flex justify-between">
                  <FaCheckDouble className="text-[#5aad5a]"/>
                  <RiDeleteBin6Fill className="text-[red]"/>
                </div>
              </div>

              <div className="border rounded-md p-2 space-y-1 bg-black border-gray-400">

              <div className="flex items-center gap-x-3 text-[14px] text-gray-200">
                  <img src="/Group 88.png" className="w-[15px] h-[15px]"/>
                  <p>Daman Document 2.pdf</p>
                </div>

                <div className="flex justify-between">
                  <FaCheckDouble className="text-[#5aad5a]"/>
                  <RiDeleteBin6Fill className="text-[red]"/>
                </div>
              </div>
               
              <button className="flex w-full p-1 rounded-md gap-x-2 text-[21px] font-normal justify-center items-center bg-gradient-to-r from-[#953dcf] to-[#0c90ce]"><span>Generate </span><img src="/genai.png" className="w-5 h-5"/></button>

            </div>

            <div className="flex-1 space-y-6 border p-3 border-sky-700 rounded-2xl  bg-gradient-to-b from-[#3f3f7e] via-[#16162b] to-[#16162b]">
            

                
            </div>

            

          </div>
         <div>
        
         </div>
      <div></div>
       </div>
    </div>
  );
}
