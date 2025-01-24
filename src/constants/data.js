import { FaHome } from "react-icons/fa";
import { SiElementor } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { FaWpforms } from "react-icons/fa";
import { AiFillDatabase } from "react-icons/ai";
import { LiaIconsSolid } from "react-icons/lia";
import { RiPagesFill } from "react-icons/ri";
import { GiExtraTime } from "react-icons/gi";

const navlinks = [
    {
      id: 0,
      title: "Dashboard",
      url: "/dashboard",
      icons: FaHome,
    },
    {
      id: 1,
      title: "UI Elements",
      url: "/uielements",
      icons: SiElementor,   },
    {
      id: 2,
      title: "Components",
      url: "/components",
      icons: SiStyledcomponents,
    },
    {
      id: 3,
      title: "Forms Stuff",
      url: "/formsstuff",
      icons: FaWpforms,
    },
    {
      id: 4,
      title: "Data Table",
      url: "/datatable",
      icons: AiFillDatabase,
    },
    {
      id: 5,
      title: "Icons",
      url: "/icons",
      icons: LiaIconsSolid,
    },
    {
      id: 6,
      title: "Sample Page",
      url: "/samplepage",
      icons: RiPagesFill,
    },
    {
      id: 7,
      title: "Extra",
      url: "/extra",
      icons: GiExtraTime,
    },
  ];

const standardTableData = [
  {
    name: "Aditya Singh",
    email: "aditya@gmail.com",
    userType: "Admin",
    joined: "23 April 2024",
    status: "PENDING",
  },
  {
    name: "Nikhil Rawat",
    email: "nikhil@gmail.com",
    userType: "Editor",
    joined: "19 February 2024",
    status: "APPROVED"
  },
  {
    name: "Abhiraj Yadav",
    email: "abhiraj@gmail.com",
    userType: "Admin",
    joined: "20 March 2024",
    status: "SELECT"
  },
  {
    name: "Anupam Kumar",
    email: "anupam@gmail.com",
    userType: "Editor",
    joined: "31 August 2024",
    status: "PENDING"
  },
  {
    name: "Aakshat Singh",
    email: "aakshat@gmail.com",
    userType: "Admin",
    joined: "14 January 2024",
    status: "APPROVED"
  },
  {
    name: "Lucky Shukwal",
    email: "lucky@gmail.com",
    userType: "Editor",
    joined: "19 January 2024",
    status: "SELECT"
  },
]

  
  export { navlinks, standardTableData };
  