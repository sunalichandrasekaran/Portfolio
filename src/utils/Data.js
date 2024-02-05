import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";

//image for projects
import project_img1 from "../assets/project_img1.png";
import project_img2 from "../assets/project_img2.png";
import project_img3 from "../assets/project_img3.png";
import project_img4 from "../assets/project_img4.png";

//icons for myskill
export const Skills = [
  {
    id: 0,
    tech: "HTML",
    icon: <FaHtml5 />,
  },
  {
    id: 1,
    tech: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    id: 2,
    tech: "Javascript",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    tech: "React Js",
    icon: <FaReact />,
  },
  {
    id: 4,
    tech: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    tech: "Sql",
    icon: <PiFileSqlBold />,
  },
];

// {details for projects}
export const projectdetails = [
  {
    id: 1,
    project_name: "NETFLIX",
    projects_detail: `Designed a visually appealing homepage with a layout similar to Netflix, featuring rows of trending movies and TV shows.
    Integrated a dynamic content catalog with a vast collection of movies and TV series, organized into categories such as genres, trending, and top-rated.
    Integrated a custom video player that supports smooth playback and includes features like play, pause, volume control, and fullscreen mode.`,
    tech_stack: ["React JS", "Tailwind"],
    project_img: project_img1,
    link: "https://beautiful-eclair-0323a6.netlify.app/",
    reverese: false,
  },
  {
    id: 2,
    project_name: "Airplane Website",
    projects_detail: `In this project, I undertook the challenge of replicating the popular streaming 
      platform Netflix, showcasing my proficiency in front-end web development. The Netflix clone is a responsive and user-friendly web application that mimics the key features and aesthetics of the original platform.`,
    tech_stack: ["HTML", "CSS", "Javascript"],
    project_img: project_img2,
    link: "https://quiet-stroopwafel-adef05.netlify.app/",
    reverese: false,
  },
  {
    id: 3,
    project_name: "Restaurant Website",
    projects_detail: `In the dynamic and competitive world of dining, I developed the Restaurant Explorer website,
      an innovative application aimed at revolutionizing the way users discover, explore, and engage with local restaurants.
      Crafted a visually appealing and user-friendly interface to ensure a seamless and enjoyable navigation experience for users of all levels.
      Optionally integrated a secure online ordering system, enabling users to place food orders for delivery or pickup directly through the website.`,
    tech_stack: ["React JS", "Tailwind"],
    project_img: project_img3,
    link: "https://super-mochi-24aca5.netlify.app",
    reverese: false,
  },
  {
    id: 4,
    project_name: "Shoe Website",
    projects_detail: `
      This project showcases my expertise in e-commerce website development, user interface design,
      and a commitment for users to explore, select, and purchase their favorite footwear.
      Crafted a visually stunning product showcase that allows users to explore a diverse range of shoes, complete with high-quality images, detailed descriptions, and user-friendly navigation.
      Implemented a robust search and filtering system, enabling users to quickly find the perfect pair based on categories like gender, style, brand, size, and color.`,
    tech_stack: ["React JS"],
    project_img: project_img4,
    link: "https://sparkly-melomakarona-bafef9.netlify.app/",
    reverese: true,
  },
];

export const navLinks = [
  {
    id: 0,
    name: "Home",
    href: "Home",
  },
  {
    id: 1,
    name: "My Skills",
    href: "Skills",
  },
  {
    id: 2,
    name: " My Projects",
    href: "Projects",
  },
  {
    id: 3,
    name: "Contact",
    href: "Contact",
  },
];
