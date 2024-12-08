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

export default function Table() {
  
  const headings = ["Patient ID", "Name", "Payer", "Date", "Status"];
  const patientRecords = [
    {
      patientId: "P001",
      name: "John Doe",
      payer: "Insurance A",
      date: "2024-12-01",
      status: "Pending",
    },
    {
      patientId: "P002",
      name: "Jane Smith",
      payer: "Self-Pay",
      date: "2024-12-03",
      status: "Completed",
    },
    {
      patientId: "P003",
      name: "Emily Davis",
      payer: "Insurance B",
      date: "2024-12-05",
      status: "In Progress",
    },
    {
      patientId: "P004",
      name: "Michael Brown",
      payer: "Insurance A",
      date: "2024-12-07",
      status: "Cancelled",
    },
    {
      patientId: "P005",
      name: "Vadivel",
      payer: "Insurance A",
      date: "2024-12-05",
      status: "Cancelled",
    },
  ];
  const data = [
    {
      key1: "Medical necessity",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "General Exclusions ",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Eligibility & Prior Authorization Rules",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Billing Rules",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Payer Rules",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Regulator Rules",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "General Rules ",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Non-covered diagnosis/service validation and alert",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Coding Rules in line with local regulations",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Contract Rules (Provider & Payor) ",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
    {
      key1: "Rejection trend-based rules",
      key2: "Verification completed successfully with no issues found.",
      key3: "Confidence Score: 8/10",
    },
   
  ];
  

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

            <div className="flex items-center justify-between py-3 pl-5 pr-8 text-[14px] bg-[#caffca]">
              <div  className="text-[#20bd20] flex items-center "><FaCheckCircle className="mr-1"/> Claim Scrubbing Process Completed</div>

              <div className="flex items-center gap-x-7">
                <span className="text-[#ffba3a] flex items-center"><span className="px-1 py-0.5 bg-[#ffba3a] rounded-full h-[19px] text-center w-[19px] text-[white] mr-1 text-[10px]">2</span> Claims Under Review</span>
                <span className="text-[#e0522e] flex items-center"><span className="px-1 py-0.5 bg-[#e0522e] rounded-full h-[19px] text-center w-[19px] text-[white] mr-1 text-[10px]">1</span> Claims Cancelled</span>
                <span className="text-[#2cca2c] flex items-center"><span className="px-1 py-0.5 bg-[#2cca2c] rounded-full text-[white] mr-1 text-[10px]">17</span> Claims Submit <FaArrowRight className="inline-block text-[#2cca2c] ml-1"/></span>
              </div>
            </div>

            {/*  */}
            <div className="container mx-auto">
       
        {/* Table Body */}
        <div>
  <div>
    <table className="w-full border-collapse">
    <thead >
          <tr className="text-gray-300">
            <th className="w-auto text-center pl-5">
            <FaRegCheckSquare className="bg-green-500 text-white" />
            </th>
            <th className="text-left font-normal text-gray-300 p-2">Patient ID</th>
            <th className="text-left font-normal text-gray-300 p-2">Name</th>
            <th className="text-left font-normal text-gray-300 p-2">Payer</th>
            <th className="text-left font-normal text-gray-300 p-2">Date</th>
            <th className="text-left font-normal text-gray-300 p-2">Status</th>
           
          </tr>
        </thead>
      <tbody className="text-[14px] text-gray-300">
        {patientRecords.map((record, index) => (
          <React.Fragment key={index}>
            <tr className={`${patientRecords.length === index+1 ? "": "border-b"} border-sky-900`}>
              <td className="text-center pl-5">
                <FaRegCheckSquare className="bg-green-500 text-white" />
              </td>
              <td className="p-2 text-[blue]">794565515{index+1}</td>
              <td className="p-2">
                {record.name}
                <p className="text-[12px]">{index % 2 === 0 ? "Female 21" : "Male 23"}</p>
              </td>
              <td className="p-2">Daman Insurance</td>
              <td className="p-2">{record.date} <p className="text-[9px] text-gray-500">2:36pm</p></td>
              <td className="p-2">
                <FaCheckCircle className="mr-1 text-[#1bda1b] rounded-full inline-block bg-white" /> Claims Scrubbed
              </td>
              <td className="text-center p-2 w-auto">
                <MdKeyboardArrowUp className={`text-gray-400 text-[25px] ${index !== 0 && "transform rotate-180"}`} />
              </td>
            </tr>

            {/* Conditional rendering for additional data */}
            {index === 0 && (
              <tr className="">
                <td colSpan="7" className="space-y-1 py-3 ">
                 
                    {data.map((val, dataIndex) => (
                      <div key={dataIndex+"u"} className="grid text-[10px] text-gray-400 grid-cols-3 gap-6 w-[90%] mx-auto border-b border-gray-600">
                        <div className="">{val.key1}</div>
                        <div className="">{val.key2}</div>
                        <div className="">{val.key3} <FaCheckCircle className="ml-2 text-[#1bda1b] rounded-full inline-block bg-white" /> </div>
                      </div>
                    ))}
                 
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  </div>
</div>

     
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
