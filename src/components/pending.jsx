
import { FaCheckCircle } from "react-icons/fa";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdKeyboardArrowUp } from "react-icons/md";
import React from "react";

export default function Pending() {
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
  return ( <div>
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
  )
}
