import { treeDatas } from "../../utils";
import { FaCircleChevronRight } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";

import { MdOutlineAttachFile } from "react-icons/md";
import { FaCheckDouble } from "react-icons/fa6";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Login from "./login";
import HomePage from "./homePage";

export default function Home() {
  
  return (
    <div className="space-y-[60px] bg-[#cecee7]">
      <Login/>
    </div>
  
  );
}
