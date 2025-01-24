import React, { useState } from "react";
import { Search } from "lucide-react";
import { LuBellDot } from "react-icons/lu";
import { MdMarkUnreadChatAlt } from "react-icons/md";
import { MdFeed } from "react-icons/md";
import ProfileImage from "../assets/profile.jpg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdOutlineArrowDropUp } from "react-icons/md";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="p-5 flex justify-between items-center bg-white">
      <div className="flex gap-2 p-2 rounded bg-slate-50 cursor-pointer">
        <Search className="text-slate-600" />
        <input
          type="text"
          className="outline-none"
          placeholder="Search Product"
        />
      </div>
      <div className="flex items-center space-x-8 mr-6">
        <div 
          className="flex space-x-2 items-center cursor-pointer" 
          onClick={toggleDropdown}
        >
          <img src={ProfileImage} alt="" className="h-7 w-7 rounded-full " />
          <p className="flex items-center">
            Angellina Doe
            {open ? (
              <MdOutlineArrowDropUp className="ml-1" />
            ) : (
              <IoMdArrowDropdown className="ml-1" />
            )}
          </p>
        </div>
        <div className="flex space-x-6">
          <MdMarkUnreadChatAlt className="cursor-pointer" />
          <LuBellDot className="cursor-pointer" />
          <MdFeed className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;



// import React, { useState } from "react";
// import { Search } from "lucide-react";
// import { LuBellDot } from "react-icons/lu";
// import { MdMarkUnreadChatAlt } from "react-icons/md";
// import { MdFeed } from "react-icons/md";
// import ProfileImage from "../assets/profile.jpg";
// import { IoMdArrowDropdown } from "react-icons/io";
// import { MdOutlineArrowDropUp } from "react-icons/md";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   return (
//     <div className="p-5 flex justify-between items-center bg-white">
//       <div className="flex gap-2 p-2 rounded bg-slate-50">
//         <Search className="text-slate-600" />
//         <input
//           type="text"
//           className="outline-none"
//           placeholder="Search Product"
//         />
//       </div>
//       <div className="flex items-center space-x-8 mr-6">
//         <div className="flex space-x-2 items-center">
//           <img src={ProfileImage} alt="" className="h-7 w-7 rounded-full " />
//           <p>
//             Angellina Doe <span>${open} ? <IoMdArrowDropdown /> : <MdOutlineArrowDropUp /></span>
//           </p>
//         </div>
//         <div className="flex space-x-6">
//           <MdMarkUnreadChatAlt />
//           <LuBellDot />
//           <MdFeed />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
